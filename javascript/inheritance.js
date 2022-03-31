var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    Person.prototype.whoAreYou = function () {
        return "Hi i'm ".concat(this.name());
    };
    return Person;
}());
//Inheritance
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, course) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.course = course;
        return _this;
    }
    Student.prototype.whoAreYou = function () {
        return "".concat(_super.prototype.whoAreYou.call(this), " and i'm studying this ").concat(this.course);
    };
    Student.prototype.getCourseDetails = function () {
        return "".concat(_super.prototype.whoAreYou, " and i am studying ").concat(this.course);
    };
    return Student;
}(Person));
var munit = new Student('munit', 'yadav', 'API');
console.log(munit.whoAreYou());
