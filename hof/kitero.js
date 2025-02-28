const fv1 = (a ,b) => a + b;

function fv2(a, b, cb){         //ez higher order function
    const v1 = cb(a, 2);
    const v2 = cb(b, 4);
    return cb(v1, v2);
}

console.log(fv1(5,7));

const res1 = fv2(5, 7, (a,b) => a+b);
console.log(res1);

const res2 = fv2(5, 7, fv1);
console.log(res2);


const fv3 = (operator) => {     //ez higher order function
    switch (operator) {
            case '-':
                return (a,b) => a-b;
                // a return miatt nem kell break;
            case 'x*2':
                const multi = 2;
                return (a,b) => (a+b)*multi;
                // a return miatt nem kell break;
            
        

        }
}

const fv4 = fv3('-');

console.log(fv4(5,7));


const res3 = fv2(5,7, fv3('-'));
console.log(res3);


console.log(fv3('-')(5,7));
console.log(fv2(5,7, fv3('-')));
console.log(fv2(5,7, fv3('x*2')));
