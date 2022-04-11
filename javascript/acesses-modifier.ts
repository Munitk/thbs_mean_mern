class Person { //(1)

    // private firstName = ""; //(2)

    // private lastName = "";



    // constructor(firstName, lastName) {

    //     this.firstName = firstName;

    //     this.lastName = lastName;

    // }



    constructor(private fname, private lname) {

    }



    getName() {

        console.log(this.fname + "    " + this.lname);

    }

}



let p1 = new Person('ss', 'cc');

