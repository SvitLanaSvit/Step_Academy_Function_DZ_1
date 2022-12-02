//1
function getRes(val1, val2){
    if(val1 === val2) return 0;
    return val1 < val2 ? -1 : 1;
}

//2
function factorial(n){
    if(n == 1) return 1;
    return n * factorial(n - 1);
}

//3
function number(val1, val2, val3){
    return "" + val1 + val2 + val3;
}

//4
function square(){
    if(arguments.length == 1)
        return arguments[0]**2;
    else if(arguments.length > 1) 
        return arguments[0] * arguments[1];
}

//5
function isNumberPerfect(n){
    let sum = 0;
    let reminder;
    if(n === 0) return false;
    for(let i = 1; i < n - 1; i++){
        reminder = n % i;
        if(reminder === 0){
            sum += i;
        }
    }
    if(n === sum) return true;
    else return false;
}

//6
function getPerfectNumbers(min, max){
    for(i = min; i <= max; i++){
        if(isNumberPerfect(i)){
            console.log(i);
        }
    }
}

//7
function getTime(hh, mm, ss){
    if(arguments.length == 3)
        return `${hh < 10 ? "" + 0 + hh : hh}:${mm < 10 ? "" + 0 + mm : mm}:${ss < 10 ? "" + 0 + ss : ss}`;
    else if(arguments.length == 1){
        return `${hh < 10 ? "" + 0 + hh : hh}:${0 + "" + 0}:${0+ "" + 0}`;
    }
    else if(arguments.length == 2){
        return `${hh < 10 ? "" + 0 + hh : hh}:${mm < 10 ? "" + 0 + mm : mm}:${0+ "" + 0}`;
    }
}

//8
function getTimeInSeconds(hh, mm, ss){
    if(arguments.length === 3)
    return `${hh * 60 * 60 + mm * 60 + ss}`;
}

//9
function getTimeFromSeconds(ss){
    let hh = ss / 3600 - (ss / 3600) % 1;
    let mm = (ss - hh * 3600) / 60 - ((ss - hh * 3600) / 60) % 1;
    ss = ss - hh * 3600 - mm * 60;
    return `${hh < 10 ? "" + 0 + hh : hh}:${mm < 10 ? "" + 0 + mm : mm}:${ss < 10 ? "" + 0 + ss : ss}`;
}

//10
function diferenceThrowTime(hh1,mm1,ss1,hh2,mm2,ss2){
    if(arguments.length === 6){
        let time1 = getTimeInSeconds(hh1,mm1,ss1);
        let time2 = getTimeInSeconds(hh2,mm2,ss2);
        let dif = time1 - time2;
        if(dif < 0) dif = -dif;
        console.log(getTimeFromSeconds(dif));
    }
}

//Recursion
//1
function powNumber(n, pow){
    if(pow == 0) return 1;
    return n * powNumber(n, pow - 1);
}

//2
function NOD () {
    for (var x = arguments[0], i = 1; i < arguments.length; i++) {
      var y = arguments[i];
      while (x && y) {
        x > y ? x %= y : y %= x;
      }
      x += y;
    }
    return x;
  }

//3
function maxDigitRecursion(n){
    if(n < 0) return -n;
    if(n < 10) return n;
    return Math.max((n % 10), maxDigitRecursion(parseInt(n / 10)));
}

//4
function isPrimaNumberRecursion(n, div = 3){
    if(n === 2) return true;
    if(n < 2 || n % 2 === 0) return false;
    if(div * div > n) return true;
    if(num % div === 0) return false;
    return isPrimaNumberRecursion(n, div + 2);
}

//5
function multipliers(n, div = 2){
    while(div <= n){
        if(n % div === 0){
            if (div != n){
                console.log(div + " ");
                multipliers(n / div, div + 1);
            }
            else{
                console.log(div);
            } 
        } 
        return;
    }
}
//6
function getFib(n){
    if(n == 0 || n == 1) return n;
    return getFib(n - 1) + getFib(n - 2);
}
