const gameboard = (function() {
    let _gameboard = ['o', 'x', 'o', 'x', 'o', 'x', 'o', 'x', 'o'];


    const square = document.querySelectorAll('.square')
    const x = () => {

    }
    const o = () => {

    }

    const blank = () => {
        
    }
    let el = 0;
    let eachSquare = square.forEach(element => {
        if(_gameboard[el] == 'x' && _gameboard.length <= 9){
            let svg = document.createElement('svg')
            svg.innerHTML = '<svg width="120px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>'
            element.appendChild(svg)
            let svgselect = document.querySelectorAll('svg')
            svgselect.forEach(ele => {
                ele.style.transition = "opacity 0.5s linear";
                setTimeout(function() {
                    ele.style.opacity = 1;
                }, 0);
            });
        }
        else if(_gameboard[el] == 'o' &&_gameboard.length <= 9){
            let svg = document.createElement('svg')
            svg.innerHTML = '<svg width="125px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 96C135.6 96 64 167.6 64 256s71.6 160 160 160s160-71.6 160-160s-71.6-160-160-160zM0 256C0 132.3 100.3 32 224 32s224 100.3 224 224s-100.3 224-224 224S0 379.7 0 256z"/></svg>'
            element.appendChild(svg)
            let svgselect = document.querySelectorAll('svg')
            svgselect.forEach(ele => {
                ele.style.transition = "opacity 0.5s linear";
                setTimeout(function() {
                    ele.style.opacity = 1;
                }, 0);
            });
        }
        el++;
        });

        return {ex}

    


})();

const displayController = (function() {
    
})();

const playerFactory = function(name){

}

const squareEffect = (function(doc) {
    const square = doc.querySelectorAll('.square')
    
    square.forEach(element => {
        element.addEventListener('mousedown', () => {
            element.style.scale = 1.025;
        })
        element.addEventListener('mouseup', () => {
            element.style.scale = 1;
            
            // let svg = doc.createElement('svg')
            // svg.innerHTML = '<svg width="120px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>'
            // element.appendChild(svg)
            // let svgselect = doc.querySelectorAll('svg')
            // svgselect.forEach(el => {
            //     el.style.transition = "opacity 0.5s linear";
            //     setTimeout(function() {
            //         el.style.opacity = 1;
            //     }, 0);
            // });
            
        })


    });

})(document);

//


