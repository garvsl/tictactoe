const gameboard = (function() {
    let _gameboard = ['', '', '', '', '', '', '', '', ''];
    let numbers = [];
    const square = document.querySelectorAll('.square')

    let gameSelectX = (x) => {
        return(_gameboard[x] == 'x')
    }

    let gameSelectO = (x) => {
        return(_gameboard[x] == 'x')
    }

    let win = () => {
        if(gameSelectO(0) && gameSelectO(3) && gameSelectO(6)){
            numbers.push(0, 3, 6)
            return (true);
        }
        if(gameSelectO(1) && gameSelectO(4) && gameSelectO(7)){
            numbers.push(1, 4, 7)
            return (true);
        }
        if(gameSelectO(2) && gameSelectO(5) && gameSelectO(8)){
            numbers.push(2, 5, 8)
            return (true);
        }
        
        if(gameSelectO(0) && gameSelectO(1) && gameSelectO(2)){
            numbers.push(0, 1, 2)
            return (true);
            
        }
        if(gameSelectO(3) && gameSelectO(4) && gameSelectO(5)){
            numbers.push(3, 4, 5)
            return (true);
            
        }
        
        if(gameSelectO(6) && gameSelectO(7) && gameSelectO(8)){
            numbers.push(6, 7, 8)
            return (true);
            
        }
        
        if(gameSelectO(0) && gameSelectO(4) && gameSelectO(8)){
            numbers.push(0, 4, 8)
            return (true);
        }
        if(gameSelectO(2) && gameSelectO(4) && gameSelectO(6)){
            numbers.push(2, 4, 6)
            return (true);
        }

        if(gameSelectX(0) && gameSelectX(3) && gameSelectX(6)){
            numbers.push(0, 3, 6)
            return (true);
        }
        if(gameSelectX(1) && gameSelectX(4) && gameSelectX(7)){
            numbers.push(1, 4, 7)
            return (true);
        }
        if(gameSelectX(2) && gameSelectX(5) && gameSelectX(8)){
            numbers.push(2, 5, 8)
            return (true);
        }
        
        if(gameSelectX(0) && gameSelectX(1) && gameSelectX(2)){
            numbers.push(0, 1, 2)
            return (true);
            
        }
        if(gameSelectX(3) && gameSelectX(4) && gameSelectX(5)){
            numbers.push(3, 4, 5)
            return (true);
            
        }
        
        if(gameSelectX(6) && gameSelectX(7) && gameSelectX(8)){
            numbers.push(6, 7, 8)
            return (true);
            
        }
        
        if(gameSelectX(0) && gameSelectX(4) && gameSelectX(8)){
            numbers.push(0, 4, 8)
            return (true);
        }
        if(gameSelectX(2) && gameSelectX(4) && gameSelectX(6)){
            numbers.push(2, 4, 6)
            return (true);
        }
    }   
    let eachSquare = () => {

        for(let i = 0 ; i < _gameboard.length; i++){
        
            square[i].addEventListener('click', () => {
                if(_gameboard.length <= 9 && _gameboard[i] != 'x'){
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
                    _gameboard[i] = 'x'
                    console.log(_gameboard)
                    displayController.design();
                }
            })
        }
    }
    eachSquare();
    
    return {win, numbers}

})();

const displayController = (function() {
    const container = document.querySelector('.container')
    const intro = document.querySelector('.intro')
    const square = document.querySelectorAll('.square') 
    const ai = document.querySelector('.ai')
    const player = document.querySelector('.player')
    const cover = document.querySelector('.cover')

    setTimeout(function() {
        cover.classList.add('active')
    }, 100);
    setTimeout(function() {
        cover.style.transition = 0;
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
    })

    let design = () => {
        if(gameboard.win() == true){
            gameboard.numbers.forEach(element => {
                square[element].style.backgroundColor = 'rgba(82, 255, 148, 0.5)'
            });
        }
    }

    let squareEffect = () => {
        square.forEach(element => {
            element.addEventListener('mousedown', () => {
                element.style.scale = 0.90;
                setTimeout(() => {
                    element.style.scale = 1;
                }, 125);
            })
        })
    }
    squareEffect();

    return {design}

})();

const playerFactory = function(name){

}




        // else if(_gameboard[el] == 'o' &&_gameboard.length <= 9){
        //     let svg = document.createElement('svg')
        //     svg.innerHTML = '<svg width="125px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 96C135.6 96 64 167.6 64 256s71.6 160 160 160s160-71.6 160-160s-71.6-160-160-160zM0 256C0 132.3 100.3 32 224 32s224 100.3 224 224s-100.3 224-224 224S0 379.7 0 256z"/></svg>'
        //     element.appendChild(svg)
        //     let svgselect = document.querySelectorAll('svg')
        //     svgselect.forEach(ele => {
        //         ele.style.transition = "opacity 0.5s linear";
        //         setTimeout(function() {
        //             ele.style.opacity = 1;
        //         }, 0);
        //     });
        // }