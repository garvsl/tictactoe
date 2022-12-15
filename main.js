const gameboard = (function() {
    let _gameboard = ['', '', '', '', '', '', '', '', ''];
    let numbersX = [];
    let numbersO = [];
    let gametype = ''
    let gameX;
    let gameO; 

    const square = document.querySelectorAll('.square')

    let gameSelectX = (x) => {
        return(_gameboard[x] == 'x')
    }

    let gameSelectO = (x) => {
        return(_gameboard[x] == 'o')
    }

    let winO = () => {
        if(gameSelectO(0) && gameSelectO(3) && gameSelectO(6)){
            numbersO.push(0, 3, 6)
            return (true);
        }
        if(gameSelectO(1) && gameSelectO(4) && gameSelectO(7)){
            numbersO.push(1, 4, 7)
            return (true);
        }
        if(gameSelectO(2) && gameSelectO(5) && gameSelectO(8)){
            numbersO.push(2, 5, 8)
            return (true);
        }
        
        if(gameSelectO(0) && gameSelectO(1) && gameSelectO(2)){
            numbersO.push(0, 1, 2)
            return (true);
            
        }
        if(gameSelectO(3) && gameSelectO(4) && gameSelectO(5)){
            numbersO.push(3, 4, 5)
            return (true);
            
        }
        
        if(gameSelectO(6) && gameSelectO(7) && gameSelectO(8)){
            numbersO.push(6, 7, 8)
            return (true);
            
        }
        
        if(gameSelectO(0) && gameSelectO(4) && gameSelectO(8)){
            numbersO.push(0, 4, 8)
            return (true);
        }
        if(gameSelectO(2) && gameSelectO(4) && gameSelectO(6)){
            numbersO.push(2, 4, 6)
            return (true);
        }
    }

    let winX = () => {
        if(gameSelectX(0) && gameSelectX(3) && gameSelectX(6)){
            numbersX.push(0, 3, 6)
            return (true);
        }
        if(gameSelectX(1) && gameSelectX(4) && gameSelectX(7)){
            numbersX.push(1, 4, 7)
            return (true);
        }
        if(gameSelectX(2) && gameSelectX(5) && gameSelectX(8)){
            numbersX.push(2, 5, 8)
            return (true);
        }
        
        if(gameSelectX(0) && gameSelectX(1) && gameSelectX(2)){
            numbersX.push(0, 1, 2)
            return (true);
            
        }
        if(gameSelectX(3) && gameSelectX(4) && gameSelectX(5)){
            numbersX.push(3, 4, 5)
            return (true);
            
        }
        
        if(gameSelectX(6) && gameSelectX(7) && gameSelectX(8)){
            numbersX.push(6, 7, 8)
            return (true);
            
        }
        
        if(gameSelectX(0) && gameSelectX(4) && gameSelectX(8)){
            numbersX.push(0, 4, 8)
            return (true);
        }
        if(gameSelectX(2) && gameSelectX(4) && gameSelectX(6)){
            numbersX.push(2, 4, 6)
            return (true);
        }
    }

        
    let eachSquare = (() => {
        const playerturn = document.querySelector('.playerturn');
        const scoretitle = document.querySelector('.scoretitle')
        let counter = 1;
        // round = 1
        for(let i = 0 ; i < _gameboard.length; i++){

            
            
            function addSymbols(){

                if(_gameboard[i] != 'x' && _gameboard[i] != 'o' && counter % 2 != 0){
                    _gameboard[i] = 'x'
                    let svg = document.createElement('svg')
                    svg.innerHTML = '<svg width="120px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>'
                    square[i].appendChild(svg)
                    let svgselect = document.querySelectorAll('svg')
                    svgselect.forEach(ele => {
                        ele.style.transition = "opacity 0.5s linear";
                        setTimeout(function() {
                            ele.style.opacity = 1;
                        }, 50);
                    });
                    counter++
                    if(counter % 2 == 0 && gameboard.gametype == 'ai' && winX() != true){
                        setTimeout(() => {
                        
                            gameboard.bestMove();
                            counter++
                            winO();
                            displayController.design(_gameboard, counter);
                            if(winO() == true){
                                square.forEach(block => {
                                    setTimeout(() => {
                                        let svgselect = document.querySelectorAll('svg')
                                        svgselect.forEach(svj => {
                                            svj.style.opacity = '0'
                                        });
                                        setTimeout(() => {
                                            svgselect.forEach(svj => {
                                                svj.remove()
                                            });
                                            square.forEach(sqre => {
                                                sqre.style.backgroundColor = 'rgba(226, 226, 226, 0.397)'
                                            })
                                        }, 300);
                                        block.style.pointerEvents = 'all'
                                        _gameboard = ['', '', '', '', '', '', '', '', ''];
                                    }, 2000);
                                });
                            }
                        }, 500)
                        setTimeout(() => {
                            playerturn.style.color = 'red'
                            playerturn.textContent = "Player 1's turn"
                        }, 1150);
                        }
                    ;
                    if(winX() == true && gameboard.gametype =='ai'){
                        counter++
                            setTimeout(() => {
                                playerturn.textContent = "Player 1's turn"
                                playerturn.style.color = 'red'
                                playerturn.style.textShadow = '0px 0px 1.5px black'

                            }, 2000);
                            setTimeout(() => {
                                gameboard.numbersX.length = 0;
                                gameboard.numbersO.length = 0;
                                draw.length = 0;
                            }, 3000)
                    }
                    console.log(_gameboard)
                    
                    if(counter % 2 != 0 && gameboard.gametype == 'ai' && winX() != true){
                        displayController.design(_gameboard, counter);
                    }
                    

                }else if(_gameboard[i] != 'o' && _gameboard[i] != 'x' && counter % 2 == 0 && gameboard.gametype == 'player'){
                    let svg = document.createElement('svg')
                    svg.innerHTML = '<svg width="125px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 96C135.6 96 64 167.6 64 256s71.6 160 160 160s160-71.6 160-160s-71.6-160-160-160zM0 256C0 132.3 100.3 32 224 32s224 100.3 224 224s-100.3 224-224 224S0 379.7 0 256z"/></svg>'
                    square[i].appendChild(svg)
                    let svgselect = document.querySelectorAll('svg')
                    svgselect.forEach(ele => {
                        ele.style.transition = "opacity 0.5s linear";
                        setTimeout(function() {
                            ele.style.opacity = 1;
                        }, 50);
                    });
                    _gameboard[i] = 'o'
                    console.log(_gameboard)
                    counter++
                    displayController.design(_gameboard, counter);
                    
                }
           
                if(counter % 2 != 0 && winX() != true && winO() != true){
                    playerturn.textContent = "Player 1's turn"
                    // playerturn.style.opacity = 0;
                    setTimeout(() => {
                        playerturn.style.color = 'red'
                    }, 25);
                }else if(counter % 2 == 0 && winX() != true && winO() != true){
                    
                    playerturn.textContent = "Player 2's turn"
                    // playerturn.style.opacity = 0;
                    setTimeout(() => {
                        playerturn.style.color = 'blue'
                    }, 25);
                }else{
                    playerturn.style.color = 'white'
                    playerturn.style.textShadow = '0px 0px 0px white'
                    setTimeout(() => {
                        if(counter % 2 != 0 && winX() != true && winO() != true){
                            playerturn.textContent = "Player 1's turn"
                            // playerturn.style.opacity = 0;
                            setTimeout(() => {
                                playerturn.style.color = 'red'
                                playerturn.style.textShadow = '0px 0px 1.5px black'
                            }, 25);
                        }else if(counter % 2 == 0 && winX() != true && winO() != true){
                           
                            playerturn.textContent = "Player 2's turn"
                            // playerturn.style.opacity = 0;
                            setTimeout(() => {
                                playerturn.style.color = 'blue'
                                playerturn.style.textShadow = '0px 0px 1.5px black'
                            }, 25);
                        }
                    }, 2000);
                }   

            

                

                let draw = _gameboard.filter(word => word != '')
                
                let roundWinner = (() => { square.forEach(block => {
                    if(gameboard.gameO != "win" && gameboard.gameX != "win" && block.style.pointerEvents == 'none' ){
                        
                        numbersX.length = 0;
                        numbersO.length = 0;
                        draw.length = 0;
                        setTimeout(() => {
                            let svgselect = document.querySelectorAll('svg')
                            svgselect.forEach(svj => {
                                svj.style.opacity = '0'
                            });
                            setTimeout(() => {
                                svgselect.forEach(svj => {
                                    svj.remove()
                                });
                                square.forEach(sqre => {
                                    sqre.style.backgroundColor = 'rgba(226, 226, 226, 0.397)'
                                })
                            }, 300);
                            block.style.pointerEvents = 'all'
                            _gameboard = ['', '', '', '', '', '', '', '', ''];
                        }, 2000);
                        
                    }
                });
                })();

                

                let drawWinner = (() => { 
                    draw = _gameboard.filter(word => word != '')
                    if(draw.length == 9 && winO() != true && winX() != true){
                       
                        numbersX.length = 0;
                        numbersO.length = 0;
                        draw.length = 0;
                        square.forEach(block => {
                            block.style.pointerEvents = 'none'
                            square.forEach(element => {
                                element.style.backgroundColor = 'rgba(230, 12, 12, 0.267)';
                            });
                                
                            setTimeout(() => {
                                let svgselect = document.querySelectorAll('svg')

                                svgselect.forEach(svj => {
                                    svj.style.opacity = '0'
                                });
                                setTimeout(() => {
                                    svgselect.forEach(svj => {
                                        svj.remove()
                                    });
                                    square.forEach(sqre => {
                                        sqre.style.backgroundColor = 'rgba(226, 226, 226, 0.397)'
                                    })
                                }, 300);
                                block.style.pointerEvents = 'all'
                                _gameboard = ['', '', '', '', '', '', '', '', ''];
                            }, 2000);
                        });
                    }
                })();

            }



        

            square[i].addEventListener('click', addSymbols) 

        }
    })();
    
    let draw = _gameboard.filter(word => word != '')

    let reset = () => {
        square.forEach(block => {
            numbersX.length = 0;
            _gameboard = ['', '', '', '', '', '', '', '', ''];
            numbersO.length = 0;
            draw.length = 0;
            setTimeout(() => {
                let svgselect = document.querySelectorAll('svg')

                svgselect.forEach(svj => {
                    svj.style.opacity = '0'
                });
                setTimeout(() => {
                    svgselect.forEach(svj => {
                        svj.remove()
                    });
                    square.forEach(sqre => {
                        sqre.style.backgroundColor = 'rgba(226, 226, 226, 0.397)'
                    })
                }, 300);
            }, 2000);
        });
        
    }

    function bestMove(){
        let bestScore = -Infinity;
        let move;
        let svg = document.createElement('svg')
        for (let i = 0; i < _gameboard.length; i++) {
            if(_gameboard[i] == ''){
                _gameboard[i] = 'o';
                let score = minimax(0, false);
                _gameboard[i] = '';
                if(score > bestScore){
                    bestScore = score
                    move = i;
                    
                }
            }
        }
        if(_gameboard[move] == '' && _gameboard[move] != 'x'){
            svg.innerHTML = '<svg width="125px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 96C135.6 96 64 167.6 64 256s71.6 160 160 160s160-71.6 160-160s-71.6-160-160-160zM0 256C0 132.3 100.3 32 224 32s224 100.3 224 224s-100.3 224-224 224S0 379.7 0 256z"/></svg>'
            square[move].appendChild(svg)
            _gameboard[move] = 'o'
            let svgselect = document.querySelectorAll('svg')
                svgselect.forEach(ele => {
                    ele.style.transition = "opacity 0.5s linear";
                    setTimeout(function() {
                        ele.style.opacity = 1;
                    }, 50);
                });
        
            }


    }

    function checkWinner(){

    let draw = _gameboard.filter(word => word != '')
        if(winO() == true){
            return 'O';
        }else if(winX() == true){
            return 'X';
        }else if(draw.length == 9 && winO() != true && winX() != true){
            return 'tie';
        }else{
            return false;
        }
    }

    let scores = {
        X: -1,
        O: 1,
        tie: 0
    }


    function minimax(depth, isMaximizng){
        let result = checkWinner();
        if(result != false){
            let score = scores[result];
            return score;
        }

        if(isMaximizng){
            let bestScore = -Infinity
            for (let i = 0; i < _gameboard.length; i++) {
                if(_gameboard[i] == ''){
                    _gameboard[i] = 'o';
                    let score = minimax(depth + 1, false)
                    _gameboard[i] = '';
                    bestScore = Math.max(score, bestScore)

                }
            }
            return bestScore;
        }else{
            let bestScore = Infinity
            for (let i = 0; i < _gameboard.length; i++) {
                if(_gameboard[i] == ''){
                    _gameboard[i] = 'x';
                    let score = minimax(depth + 1, true)
                    _gameboard[i] = '';
                    bestScore = Math.min(score, bestScore)
                    
                }
            }
            return bestScore;
        }

    };



    
    return {winX, winO, numbersX, gametype, numbersO, reset, gameO, gameX, bestMove}

})();

const displayController = (function() {
    const square = document.querySelectorAll('.square') 
    let scoretitle = document.querySelector('.scoretitle')
    const container = document.querySelector('.container')
    
    const intro = document.querySelector('.intro')
    const ai = document.querySelector('.ai')
    const player = document.querySelector('.player')
    const cover = document.querySelector('.cover')

    setTimeout(function() {
        cover.classList.add('active')
    }, 100);
    setTimeout(function() {
        cover.style.opacity = 1;
        cover.style.scale = 1;
    }, 100);


    ai.addEventListener('click', () => {
        container.style.display = 'grid'
        setTimeout(() => {
            container.style.opacity = '1'
        }, 1000);
        intro.style.opacity = '0';
        setTimeout(() => {
            intro.style.display = 'none'
        }, 1000);

        gameboard.gametype = 'ai'
        
    })

    player.addEventListener('click', () => {
        container.style.display = 'grid'
        setTimeout(() => {
            container.style.opacity = '1'
        }, 1000);
        intro.style.opacity = '0';
        setTimeout(() => {
            intro.style.display = 'none'
        }, 1000);
        gameboard.gametype = 'player'
    
    })
    

    let round = 1;
    let xScore = 0
    let oScore = 0
    let one = document.querySelector('.one') 
    let two = document.querySelector('.two')
    let first = document.getElementById('first')
    let second = document.getElementById('second')
    let score = document.getElementById('score')

    let winningscreen = document.querySelector('.winningscreen')
    let squares = document.querySelector('.squares')
    let winningtext = document.querySelector('.winningtext')
    let design = (_gameboard, counter) => {
        draw = _gameboard.filter(word => word != '')
        console.log(draw)
        if(draw.length == 9 && round > 5 && gameboard.winX() != true && gameboard.winO() != true){
            console.log('hi')
            if(xScore == oScore){
                winningtext.textContent = 'Tie!'
                gameboard.gameX = 'win'
                gameboard.gameO = 'win'
                square.forEach(block => {
                    block.style.pointerEvents = 'none';
                    block.style.backgroundColor = 'rgba(230, 12, 12, 0.267)';
                });
            

                gameboard.reset()
                round = 1;
                xScore = 0
                oScore = 0

                squares.style.pointerEvents = 'none'
                setTimeout(() => {
                    winningscreen.style.opacity = 1;
                    winningscreen.style.transform = 'translateX(-50%)translateY(-50%)scale(1)'
                }, 1000);
                winningscreen.style.display = 'flex'
                score.textContent = `${round}/5`
                first.textContent = xScore
                second.textContent = oScore
                replay()

                return;

            }
        }
        if(draw.length == 9 && gameboard.winX() != true && gameboard.winO() != true && round <= 5){
            setTimeout(() => {
                round++
                score.textContent = `${round}/5`
                
            }, 2000);


            
        }
        else if(gameboard.winX() == true ){
            round++
            if(round > 5){
                xScore++
                if(xScore > oScore){
                    winningtext.textContent = 'Player1 Wins!'
                }else if(oScore > xScore){
                    winningtext.textContent = 'Player2 Wins!'
                }else if(xScore == oScore){
                    winningtext.textContent = 'Tie!'
                }
                
                gameboard.gameX = 'win'
                gameboard.numbersX.forEach(element => {
                    square[element].style.backgroundColor = 'rgba(82, 255, 148, 0.5)'
                    square.forEach(block => {
                        block.style.pointerEvents = 'none';
                    });
                });
                gameboard.gameX = 'win'
                gameboard.reset()
                round = 1;
                xScore = 0
                oScore = 0
                

                squares.style.pointerEvents = 'none'
                setTimeout(() => {
                    winningscreen.style.opacity = 1;
                    winningscreen.style.transform = 'translateX(-50%)translateY(-50%)scale(1)'
                }, 1000);
                winningscreen.style.display = 'flex'
                score.textContent = `${round}/5`
                first.textContent = xScore
                second.textContent = oScore
                replay()

                
                return;
                
            }
            setTimeout(() => {
                score.textContent = `${round}/5`
            }, 2000);

            xScore++
            first.style.color = 'rgb(0, 255, 0)'
            
            setTimeout(() => {
                first.textContent = xScore
            }, 500);

            setTimeout(() => {
                first.style.color = 'red'
            }, 1250);

            
            squares.style.pointerEvents = 'none'
            
            gameboard.numbersX.forEach(element => {
                square[element].style.backgroundColor = 'rgba(82, 255, 148, 0.5)'
                square.forEach(block => {
                    block.style.pointerEvents = 'none';
                });
            });
        }else if(gameboard.winO() == true){
            round++
            if(round > 5){
                xScore++
                if(xScore > oScore){
                    winningtext.textContent = 'Player1 Wins!'
                }else if(oScore > xScore){
                    winningtext.textContent = 'Player2 Wins!'
                }else if(xScore == oScore){
                    winningtext.textContent = 'Tie!'
                }
                gameboard.gameO = 'win'
                gameboard.numbersO.forEach(element => {
                    square[element].style.backgroundColor = 'rgba(82, 255, 148, 0.5)'
                    square.forEach(block => {
                        block.style.pointerEvents = 'none';
                    });
                });
                gameboard.reset()
                round = 1;
                xScore = 0
                oScore = 0
                squares.style.pointerEvents = 'none'
                setTimeout(() => {
                    winningscreen.style.opacity = 1;
                    winningscreen.style.transform = 'translateX(-50%)translateY(-50%)scale(1)'
                }, 1000);
                winningscreen.style.display = 'flex'
                score.textContent = `${round}/5`
                second.textContent = oScore
                first.textContent = xScore  
                replay()
                return;
                
            }
            

            oScore++
            second.style.color = 'rgb(0, 255, 0)'
            
            setTimeout(() => {
                second.textContent = oScore

            }, 500);
            setTimeout(() => {
                second.style.color = 'blue'
            }, 1250);

            setTimeout(() => {
                score.textContent = `${round}/5`
            }, 2000);

            gameboard.numbersO.forEach(element => {
                square[element].style.backgroundColor = 'rgba(82, 255, 148, 0.5)'
                square.forEach(block => {
                    block.style.pointerEvents = 'none';
                });
            });
        }
        
        }




    let squareEffect = (() => {
        square.forEach(element => {
            element.addEventListener('mousedown', () => {
                element.style.scale = 0.90;
                setTimeout(() => {
                    element.style.scale = 1;
                }, 125);
            })
        })
    })()


    let replay = () => {
        let playagain = document.querySelector('.playagain')
            squares.style.pointerEvents = 'none'
            square.forEach(block => {
                block.style.pointerEvents = 'none';
            });
        playagain.addEventListener('click', () => {

            setTimeout(() => {
                gameboard.gameO = ''
                gameboard.gameX = ''
                square.forEach(block => {
                    block.style.pointerEvents = 'all';
                });
                
                winningscreen.style.opacity = 0;
                winningscreen.style.transform = 'translateX(-50%)translateY(-50%)scale(0)'
                
            }, 500);

            setTimeout(() => {
                winningscreen.style.display = 'none'
            }, 1500);
        })
    };

    return {design}

})();





//so check where the player has inputted and have it randomly place one, afterwards to advance it take into account where the player will place to win and place it there




//after that u are done with player then its time for ai    


//add a point to the round for a draw, and stop once it reaches round 5.
//if the score is equal then run through the draw function and make it display a tie.

//fix scores

//so color on ai win, and when its a draw round goes up by 2

//color on ai win i think it is because it goes in all spots and winO() is run which calculates it so something like that u can check in console
//yeah no bueno 971k so win is being repeated probably
//and winX too so that is something with the ai
//so the color is with the x too u woulndtk now because u cant win

//for the round the design is not being called at all because of weird order and stuff, just clean it all up really.

//alpha beta pruning