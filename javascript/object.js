let myDetails={
    fname:'Munit',
    lname:'Yadav',
    mobile:7371893840,
    age:21,
    address:{
        presentaddr:{
            location:'pune'
        },
        premantaddr:{
            location:'Bihar',
            pincode:40001
        }
    }
};
console.log(typeof myDetails);
console.log(myDetails);

console.log(myDetails.age);

//adding new key to obj
myDetails.address.premantaddr.area='darbhanga';

//value inside obj or nested obj
myDetails.address.premantaddr.pincode;

//updating value of obj key
myDetails.address.premantaddr.pincode=411014
//update value inside object
console.log(myDetails.lname = 'kumar')
