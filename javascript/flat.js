let obj={
    name:"munit",
    saylater:function(){
        console.log(this)
        console.log(this.getAddr());
        console.log(`$(this.name)`);
        
    },
    getAddr:function(){return 'pune'}
};
obj.saylater();