var Person = /** @class */ (function () {
    // private firstName = ""; //(2)
    // private lastName = "";
    // constructor(firstName, lastName) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }
    function Person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Person.prototype.getName = function () {
        console.log(this.fname + "    " + this.lname);
    };
    return Person;
}());
var p1 = new Person('ss', 'cc');
