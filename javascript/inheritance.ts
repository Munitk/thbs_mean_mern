class Person {
    firstName = " ";
    lastName = " ";
    constructor(firstName, lastName) {
        console.log('i am munit')
        console.log(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
    }
    name() {
        return `${this.firstName} ${this.lastName}`;
    }
    whoAreYou() {

        return `Hi i'm ${this.name()}`
    }
}
//Inheritance
class Student extends Person {
    course;
    constructor( firstName, lastName, course) {
        super(firstName, lastName);
        this.course = course;
    }
    whoAreYou() {
        return `${super.whoAreYou()} and i'm studying this ${this.course}`;
    }
    getCourseDetails(){
        return `${super.whoAreYou} and i am studying ${this.course}`;
    }
}
let munit = new Student('munit', 'yadav', 'API');
console.log(munit.whoAreYou());