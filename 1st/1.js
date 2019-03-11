'use strict'
let money = +prompt ('Ваш бюджет на месяц', "");
let time = prompt ('Введите дату в формате YYYY-MM-DD','YYYY-MM-DD');
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
    savings : false
} ;
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
appData.moneyPerDay = appData.budget/30;

alert ('Ежедневный бюджет' + appData.moneyPerDay); 
if (appData.moneyPerDay < 100){
    console.log('bomzh');
}else if (appData.moneyPerDay < 1000){
    console.log('norm');
}else {
    console.log('vahse norm');
}
