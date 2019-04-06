let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {//проверка для того чтобы пользователь не смог нажать кнопку отмена, смог ввести только цифры и не смог оставить пустую строку.
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
        
        if( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null //проверка на нажатие кнопки отмена, чтобы не записывалось значение null.
            && a != '' && b != '' && a.length < 50) {//проверка на пустую строку и ограничение кол-во символов
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    };
}
chooseExpenses();

//два способа цикла for
//----ПЕРВЫЙ----
// let i = 0;
// let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
// b = prompt("Во сколько обойдется?", "");
// while(i < 2) {
//     i++;
//     if( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
//       && a != '' && b != '' && a.length < 50) {
//      console.log("done");
//        appData.expenses[a] = b;
//     } else {
    
//    }
// }
//----ВТОРОЙ----
//  let i = 0;
//  let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//  b = prompt("Во сколько обойдется?", "");
// do {
//     i++;
//     if( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
//       && a != '' && b != '' && a.length < 50) {
//       console.log("done");
//         appData.expenses[a] = b;
//      } else {
    
//     }
// } while(i < 2);
//два способа



function detectDayBudget(){
    if(appData.moneyPerDay = (appData.budget / 30).toFixed())//для округления чисел используется toFixed() и возвращает строковое значение
    {
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    }  
}

detectDayBudget();

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function chooseOptExpenses() {
    for (let i = 0; i < 1; i++) {
        let a = prompt("Статья необязательных расходов?", ""),
            b = prompt("Статья необязательных расходов?", ""),
            c = prompt("Статья необязательных расходов?", "");
        if( (typeof(a))=== 'string' && (typeof(a)) != null //проверка на нажатие кнопки отмена, чтобы не записывалось значение null.
            && a != '' && b != '' && c != '') {//проверка на пустую строку и ограничение кол-во символов
            console.log("done");
            appData.optionalExpenses[1] = a;
            appData.optionalExpenses[2] = b;
            appData.optionalExpenses[3] = c;
        } else {
            i = i - 1;
        }
    };
}
chooseOptExpenses();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

















