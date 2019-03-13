'use strict'
let web = {
    deleteAdv : function () {
        let elem = document.querySelector('.adv');
        elem.parentNode.removeChild(elem);


    },
    addButton : function (){
        let buttons = document.querySelector('.menu'),
            btn = document.querySelectorAll('.menu-item');
        let newB = document.createElement('li');
        newB.className = "menu-item";
        newB.innerHTML = 'Пятый пункт';
        buttons.appendChild(newB);
        console.log(newB);
        console.log(btn);
        let btnTemp1 = btn[1],
            btnTemp2 = btn [2];
        buttons.insertBefore(btnTemp2,btnTemp1);
        
        
            

        

        
    }
};
// web.deleteAdv();
web.addButton();

