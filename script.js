// ES 5

function sum (a,b,c,d,e,f,g,h) {
    console.log(a+b+c+d+e+f+g+h);
}
sum(1,2,3,4,5,6,7,8)



// ES 6


// 1st
function sum2 (...rest) {
    console.log(...rest);
}
sum2(1,2,3,4,5,6,7,8,9,10)


// 2nd
function sum3 (...rest) {
    let total = 0;
    for (let r of rest) {
        total += r;              //below one is also same
        // total = total + i 
    }
    console.log(total);
}
sum3(1,2,3,4,5,6,7,8,9,10)
