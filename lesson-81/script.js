const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for(let i = 0; i <= arr.length; i++){
    if(arr[i] % 2 !== 0 & i !== 0){
        console.log(i)
        i++
    }
}

// ==================================

const rainbow = ['Красный', 'Оранжевый', 'Желтый', 'Зеленый', 'Голубой', 'Синий', 'Фиолетовый'];

for(let i = rainbow.length - 1; i >= 0;  i--){
    console.log(rainbow[i])
}


