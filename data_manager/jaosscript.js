const sum = (a,b) =>{
    return a+b;
}

console.log(sum(4,5));

const obj = {};

obj.calculate1=sum;

console.log(obj.calculate1(1,2));

obj.calculate2 = (callback) => {
    const res = callback(4,5);
    return res;
}

const res1 =
    obj.calculate2((a,b) => {
        return a+b;
    });

console.log(res1);

const res2 = obj.calculate2((a,b) =>{
    return a*b;
});

console.log(res2);

obj.calculate3 = (a, b, callback) => {
    return callback(a,b);
};

console.log(
    obj.calculate3(2,3, 
        (a,b) =>{
            return a/b;
        }
    )   
);



const theFunction = () => {
    const asd = 10;

    const res = 
        obj.calculate3(2,7, (a,b) => {
            return a * asd + b;
        });

    console.log(res);
}

theFunction();


