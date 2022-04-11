//object.key
const emp={
name:'munit',
position:'S/W',
salary:2000
};
const keys=Object.keys(emp);
console.log(keys);

//OBJECT.VALUES
const session={
    id:1,
    time:`july`,
    device:'laptop',
    class:'API'
};
const values =Object.values(session);
console.log(values);

//boject.entries
const system={
    name:'lenovo',
    ram:8
};
const entries=Object.entries(system);
console.log(entries);

//object.assign
const name={
    fname:'munt',
    lname:'yadav'
};
const details={
    job:'THBS',
    employee:'software engg'
};
const result=Object.assign(name,details);
console.log(result);

//object. freeze
const user={
    name:'munit'
}
Object.freeze(user);
user.name='raju';
user['age']=21;
console.log(user);