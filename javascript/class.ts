class Person{
    firstName=" ";
    lastName=" ";
    constructor(firstName,lastName) {
        console.log('i am munit')
        console.log(firstName,lastName);
        this.firstName=firstName;
        this.lastName=lastName;
    }
    name(){
        return `${this.firstName} ${this.lastName}`;
    }
}
let munit=new Person('Anam','Raju');
console.log(munit.name());