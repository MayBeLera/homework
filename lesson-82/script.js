// 1 задание
function helloUser (name){
    console.log('Hello ' + name)
}

helloUser('Lera')

// 2 задание
let number = [12, 2, 13, 1, 2, 2, 14, 15, 45]
function search (arr){
    for(let i = 0; i <= arr.length; i++){
        if (arr[i] > 10){
            console.log(arr[i])
        }
        i++
    }
}
search(number)

// 3 задание
function calculator (num1, num2, str){
    let result;
    if (str === 'minus'){
        result = num1 - num2;
    }else if (str ==='plus'){
        result = num1 + num2
    } else if (str === 'division'){
        result = num1 / num2
    }
    else if (str === 'multiplication'){
        result = num1 * num2
    }
    console.log(result)
}

calculator(4, 2, 'plus')
calculator(4, 2, 'multiplication')