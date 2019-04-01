'use strict'
let money, time;
let start = document.getElementById('start'),
    flag = false,
    budget = document.getElementsByClassName('budget-value')[0],
    daybudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthsavings = document.getElementsByClassName('monthsavings-value')[0],
    yearsavings = document.getElementsByClassName('yearsavings-value')[0],
    button = document.getElementsByTagName('button'),
    expItem = document.getElementsByClassName('expenses-item'),
    optExpItem = document.getElementsByClassName('optionalexpenses-item'),
    utv0 = button[0],
    utv1 = button[1],
    rass = button[2],
    inOptionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
    inOptionalIncome = document.querySelector('.choose-income'),
    checkBox = document.querySelector('#savings'),
    sum = document.querySelector('.choose-sum'),
    percent = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');
start.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');
    money = +prompt('Ваш бюджет на месяц', "");
    while ((isNaN(money)) || (money == '') || (money == null)) {
        money = +prompt('Ваш бюджет на месяц', "");
    }
    appData.budget = money;
    appData.timeData = time;
    budget.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
    flag = true;
});
utv0.addEventListener('click', function () {
    if (flag) {
        let sum = 0;
        for (let i = 0; i < expItem.length; i++) {
            let a = expItem[i].value,
                b = expItem[++i].value;
            if ((typeof (a) === 'string') && (typeof (a) != null) && (typeof (b) != null) && (a != '') && (b != '') && (a.length < 50)) {
                appData.expenses[a] = b;
                sum += +b;
            } else {
                alert('Вводи нормально, а?');
                i--;
            }
        }
        expenses.textContent = sum;
        appData.allExp = sum;
    } else {
        alert('Нажмите "Начать Работу"');
    }
});
utv1.addEventListener('click', function () {
    if (flag) {
        for (let i = 0; i < optExpItem.length; i++) {
            let c = optExpItem[i].value;
            if ((typeof (c) === 'string') && (typeof (c) != null) && (c != '') && (c.length < 50)) {
                console.log('ox');
                appData.optionalExpenses[i] = c;
                optionalexpenses.textContent += appData.optionalExpenses[i] + ' ';
            }
        }
    } else {
        alert('Нажмите "Начать Работу"');
    }
});
rass.addEventListener('click', function () {
    if (flag) {
        if (appData.budget != undefined) {
            appData.moneyPerDay = ((appData.budget - appData.allExp) / 30).toFixed();
            daybudget.textContent = appData.moneyPerDay;
            if (appData.moneyPerDay < 100) {
                level.textContent = ('bomzh');
            } else if (appData.moneyPerDay < 1000) {
                level.textContent = ('norm');
            } else {
                level.textContent = ('vahse norm');
            }
        } else {
            level.textContent = "Произошла ошибка, нажмите  \"Начать рассчет\"";
        }
    } else {
        alert('Нажмите "Начать Работу"');
    }
});
inOptionalIncome.addEventListener('input', function () {
    if (flag) {
        let items1 = this.value;
        appData.income = items1.split(', ');
        income.textContent = appData.income;
    } else {
        alert('Нажмите "Начать Работу"');
    }

});
checkBox.addEventListener('click', function () {
    if (flag) {
        if (appData.savings == false) {
            appData.savings = true;
        } else {
            appData.savings = false;
        }
    } else {
        alert('Нажмите "Начать Работу"');
    }
});
sum.addEventListener('input', function () {
    if (flag) {
        if (appData.savings == true) {
            let s = +sum.value;
            let p = +percent.value;
            appData.monthIncome = s / 100 / 12 * p;
            appData.yearIncome = s / 100 * p;
            monthsavings.textContent = appData.monthIncome.toFixed(1);
            yearsavings.textContent = appData.yearIncome.toFixed(1);
        }
    } else {
        alert('Нажмите "Начать Работу"');
    }
});
percent.addEventListener('input', function () {
    if (flag) {
        if (appData.savings == true) {
            let s = +sum.value;
            let p = +percent.value;
            appData.monthIncome = s / 100 / 12 * p;
            appData.yearIncome = s / 100 * p;
            monthsavings.textContent = appData.monthIncome.toFixed(1);
            yearsavings.textContent = appData.yearIncome.toFixed(1);
        }
    } else {
        alert('Нажмите "Начать Работу"');
    }
});
let appData = {
    allExp: 0,
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};