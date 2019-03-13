'use strict'
let money, time;
        let start = document.getElementById('start'),
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
            rass = button [2],
            inOptionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
            inOptionalIncome = document.querySelector('.choose-income'),
            checkBox = document.querySelector('.savings'),
            sum = document.querySelector('.choose-sum'),
            percent = document.querySelector('.choose-percent'),
            year = document.querySelector('.year-value'),
            month = document.querySelector('.month-value'),
            day = document.querySelector('.day-value');
		start.addEventListener('click', function () {
    		time = prompt ('Введите дату в формате YYYY-MM-DD','YYYY-MM-DD');
			money = +prompt ('Ваш бюджет на месяц', "");
    		while ((isNaN(money))||(money == '')||(money==null)){
				money = +prompt ('Ваш бюджет на месяц', "");
			}
			appData.budget = money;
			appData.timeData = time;
			budget.textContent= money.toFixed();
			year.value = new Date(Date.parse(time)).getFullYear();
			month.value = new Date(Date.parse(time)).getMonth() +1;
			day.value = new Date(Date.parse(time)).getDate();


		});
utv0.addEventListener('click', function() {
	let sum = 0;
	for (let i =0 ; i < expItem.length ; i++){
		let a = expItem[i].value,
			b = expItem[++i].value;
		if ((typeof(a) === 'string') && (typeof(a) != null)&& (typeof(b) != null)&&(a!='')&&(b!='')&&(a.length<50)) {
			appData.expenses[a]=b;
			sum += +b;
		}else {
			alert ('Вводи нормально, а?');
			i--;
		}
		
	}
	expenses.textContent = sum;
});
utv1.addEventListener('click' , function(){
	for (let i =0 ; i <optExpItem.length; i++){
		let c = optExpItem[i].value;
		if ((typeof(c) === 'string') && (typeof(c) != null)&&(c!='')&&(c.length<50)) {
			console.log('ox');
			appData.optionalExpenses[i]=c;
			optionalexpenses.textContent += appData.optionalExpenses[i] +' ' ;
		}else {
			alert ('Вводи нормально, а?');
			i--;
		}
	} 
})
let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true,
    chooseExpenses: function (){
        
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