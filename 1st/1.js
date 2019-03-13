'use strict'
let money, time;
let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true,
    chooseExpenses: function (){
        for (let i =0 ; i <2; i++){
            let a = prompt ('Введите обязательную статью расходов в этом месяце');
            let b = prompt ('Во сколько обойдется?');
            if ((typeof(a) === 'string') && (typeof(a) != null)&& (typeof(b) != null)&&(a!='')&&(b!='')&&(a.length<50)) {
                console.log('ex');
                appData.expenses[a]=b;
            }else {
                alert ('Вводи нормально, а?');
                i--;
            }
            
        }
    },
    start: function () {
    money = +prompt ('Ваш бюджет на месяц', "");
    time = prompt ('Введите дату в формате YYYY-MM-DD','YYYY-MM-DD');

    while ((isNaN(money))||(money == '')||(money==null)){
        money = +prompt ('Ваш бюджет на месяц', "");

        }
    },
    detectDayBudget : function (){
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert ('Ежедневный бюджет' + appData.moneyPerDay); 
    },
    detectLevel : function () {
        if (appData.moneyPerDay < 100){
            console.log('bomzh');
        }else if (appData.moneyPerDay < 1000){
            console.log('norm');
        }else {
            console.log('vahse norm');
        }
    },
    checkSavings : function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита:' + appData.monthIncome);
        }
    },
    optionalExpenses : function () {
        for (let i =0 ; i <3; i++){
            let c = prompt ('Статья необязательных расходов?');
            if ((typeof(c) === 'string') && (typeof(c) != null)&&(c!='')&&(c.length<50)) {
                console.log('ox');
                appData.optionalExpenses[i+1]=c;
            }else {
                alert ('Вводи нормально, а?');
                i--;
            }
        }
    },
    chooseIncome : function (){
        for (let i =0 ; i <1; i++){
        let items = prompt('Что принесет вам дополнительный доход', 'через запятую');
        if ((typeof(items) === 'string') && (typeof(items) != null)&&(items !='')&&(items.length<50)) {
            appData.income=items.split(',');
            appData.income.push(prompt('Может что-то еще?',''));
            appData.income.sort();
        } else{
            alert ('Вводи нормально, а?');
            i--;
        }
        }
        console.log ('Способы доп. заработка: ');
        appData.income.forEach(function (item,i) {
            console.log (i+1 +' ' + item);
        });
    },
    list: function (){
        for (let key in appData){
            console.log('Наша программа включает в себя данные, Свойство или метод: ' + key );
        }
    }
} ;
// appData.start ();
// appData.chooseExpenses();
// appData.detectDayBudget();
// appData.detectLevel();
// appData.checkSavings();
// appData.optionalExpenses();
// appData.chooseIncome();
// appData.list();
let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart');


console.log(box);
console.log(btn);
console.log(btn[0]);
console.log(circle[2]);
console.log(heart[1]);