'use strict'
let money = prompt ('Ваш бюджет на месяц', "");
let time = prompt ('Введите дату в формате YYYY-MM-DD','YYYY-MM-DD');
let fir = prompt ('Введите обязательную статью расходов в этом месяце');
let sec = prompt ('Во сколько обойдется?');
var appData = {
    budget : money,
    timeData : time,
    expenses : {
        first : sec 
    },
    optionalExpenses : {
    },
    income : [],
    savings : false
} ;
let res = (appData.budget-appData.expenses.first)/30;
alert (res); 
