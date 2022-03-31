var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = " ";
        this.lastName = " ";
        console.log('i am munit');
        console.log(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.name = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var munit = new Person('Anam', 'Raju');
console.log(munit.name());
