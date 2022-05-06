class Student {
    fullName : string
    age: number
    introduce: string
    army: boolean
    constructor(
        public firstName: string,
        public middleName: string,
        public lastName: string,
        public text: string
    ) {
        this.fullName = firstName + "\t" + middleName + "\t" + lastName
        this.age = 34
        this.introduce = text
        this.army = true
    }
}

interface Person {
    firstName: string,
    middleName: string,
    lastName: string,
    age: number,
    introduce: string,
    army: boolean
}

const greeter = function (person: Person){
    return 'hello, ' + person.firstName + "\t" + person.middleName + "\t" + person.lastName + "\r" + person.age + "\t"
        + person.introduce + "\t" + person.army
}

const test = () => {
    console.log('Hello World ES6')
}

let user = new Student('kim', 'eui', 'yeon.', 'hello world!!!!!!!')

/*function greeter (person) {
    return 'hello\t' + person
}

let user = 'Jane User'*/
document.body.textContent = greeter(user)

