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
            btnTemp2 = btn[2];
        buttons.insertBefore(btnTemp2,btnTemp1);
    },
    changeTitle : function () {
        let title = document.querySelector('.title');
        title.innerHTML="Мы продаем только подлинную технику Apple";
    },
    ask : function () {
        let ans = prompt('Как вы относитесь к технике Apple?', ""),
            anns = document.querySelector('.prompt');
        anns.innerHTML=ans;
    },
    changeImg : function (){
        document.body.style.backgroundImage = 'url(/Users/user/Documents/ws/5/img/apple_true.jpg)';  
    }
};
web.deleteAdv();
web.addButton();
web.changeTitle();
web.ask();
web.changeImg();


