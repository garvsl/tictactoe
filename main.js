const gameboard = (function() {
    let _gameboard = ['', '', '', '', '', '', '', '', ''];
    let numbers = [];
    const square = document.querySelectorAll('.square')

    let gameSelect = (x) => {
        return(_gameboard[x] == 'x')
    }

    let win = () => {
        if(gameSelect(0) && gameSelect(3) && gameSelect(6)){
            numbers.push(0, 3, 6)
            return (true);
        }
        if(gameSelect(1) && gameSelect(4) && gameSelect(7)){
            numbers.push(1, 4, 7)
            return (true);
        }
        if(gameSelect(2) && gameSelect(5) && gameSelect(8)){
            numbers.push(2, 5, 8)
            return (true);
        }
        
        if(gameSelect(0) && gameSelect(1) && gameSelect(2)){
            numbers.push(0, 1, 2)
            return (true);
            
        }
        if(gameSelect(4) && gameSelect(4) && gameSelect(5)){
            numbers.push(3, 4, 5)
            return (true);
            
        }
        
        if(gameSelect(6) && gameSelect(7) && gameSelect(8)){
            numbers.push(6, 7, 8)
            return (true);
            
        }
        
        if(gameSelect(0) && gameSelect(4) && gameSelect(8)){
            numbers.push(0, 4, 8)
            return (true);
        }
        if(gameSelect(2) && gameSelect(4) && gameSelect(6)){
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
                        }, 100);
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
    const square = document.querySelectorAll('.square') 
    let design = () => {
        if(gameboard.win() == true){
            gameboard.numbers.forEach(element => {
                square[element].style.backgroundColor = 'rgba(82, 255, 148, 0.5)'
            });
        }
    }

    return {design}
})();

const playerFactory = function(name){

}

const squareEffect = (function(doc) {
    const square = doc.querySelectorAll('.square')
    
    square.forEach(element => {
        element.addEventListener('mousedown', () => {
            element.style.scale = 0.85;
            setTimeout(() => {
                element.style.scale = 1;
            }, 150);
        })
        // element.addEventListener('mouseup', () => {
            
            
        // })


    });

})(document);

//



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