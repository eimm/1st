'use strict'
let money, time;
function start () {
    money = +prompt ('Ваш бюджет на месяц', "");
    time = prompt ('Введите дату в формате YYYY-MM-DD','YYYY-MM-DD');

    while ((isNaN(money))||(money == '')||(money==null)){
        money = +prompt ('Ваш бюджет на месяц', "");

    }
}
start();



// let a1 = prompt ('Введите обязательную статью расходов в этом месяце');
// let a2 = prompt ('Во сколько обойдется?');
// let b1 = prompt ('Введите обязательную статью расходов в этом месяце');
// let b2 = prompt ('Во сколько обойдется?');

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true
} ;
function chooseExpenses(){
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
}
chooseExpenses();
function detectDayBudget () {
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert ('Ежедневный бюджет' + appData.moneyPerDay); 
}
detectDayBudget();

function detectLevel(){
    if (appData.moneyPerDay < 100){
        console.log('bomzh');
    }else if (appData.moneyPerDay < 1000){
        console.log('norm');
    }else {
        console.log('vahse norm');
    }
}
detectLevel();
function checkSavings(){
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');
        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита:' + appData.monthIncome);
    }
}
checkSavings();
function optionalExpenses(){
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
}
optionalExpenses();
