let myMessage=new Promise((resolve,reject) => {
    setTimeout(() => {
        reject('THBS');
        resolve('THBS');
         
    },5000);
});
myMessage.then(
    (sucess) =>{
        console.log(`i am in sucess callback of promise ${sucess}`);
    },
    (error) =>{
    console.log(`i am in failied callback of promise ${error}`);
    }
    ).then(
        (val)=>{
            console.log(`1st i am in sucess callback of promise ${val}`);   
        });
