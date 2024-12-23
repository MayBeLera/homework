let user ={
    name: 'Lera',
    age: 22,
    sayHello(name){
        console.log(`Hello ${name}`)
    }
}

user.sayHello('Lera')


// ==========================================

const users = [
    {
        name:'Nick',
        age: 25,
        admin: true,
    },
    {
        name: 'Jonh',
        age: 27,
        admin: false,
    },
    {
        name: 'Larisa',
        age: 24,
        admin: true,
    },
    {
        name:'Nick',
        age: 25,
        admin: true,
    },
    {
        name: 'Jonh',
        age: 27,
        admin: false,
    },
    {
        name: 'Ivan',
        age: 27,
        admin: false,
    }
]

let simpleUsers = 0;

function countSimpleUser (obj){
    for(let i = 0; i < obj.length; i++){
        if(obj[i].admin !== true){
            simpleUsers++
        }
    }
    
}
countSimpleUser(users)
console.log(simpleUsers)