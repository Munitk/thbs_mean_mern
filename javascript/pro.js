let myMessage = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('munit');
        reject('munit');
    }, 1000);
});
myMessage.then(
    (sucessesfull) => {
        console.log(`i am good in promise ${sucessesfull}`);
    },
    (failed) => {
        console.log(`i am very good in promise ${failed}`);
    });
