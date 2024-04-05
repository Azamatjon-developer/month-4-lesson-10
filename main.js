//  1 task starts 

// let number = +prompt("Enter your favorite number ...") 

// const arr = (prompt) => {
//     let changeString = prompt.toString()
    
//     const changeArray = changeString.split('')

//     let result = 0 
    
//     for (let i = 0; i < changeArray.length; i++) {
//         result += +changeArray[i] 



//     }
//     console.log(`Kiritilgan raqamlar yig'indisi ${result} ga teng`);
// }

// arr(number) 

// 1  task finished  


//  2 task starts 

// const arrFn = (...arr) => {

//     let result = arr.reduce((a,b) => a + b, 0)

//     console.log(`array ichidagi qiymatlarni qo'shsak ${result} ga teng `);

//     const changeNumberToArray = Array.from(String(result), Number)

//     console.log(changeNumberToArray); 
// }

// arrFn(1,22,3)

// 2 task finished   Oxirgi result natija alohida arrayda ifodalangan  




// let num = "445"
// console.log(num);

// Number to string 4 methods 

// let str = num.toString(); 1 method 
// let str = String(num) ; 2 method 
// let str = `${num}` 3 method 
// let str = num + "" 4 method 

// string to number 

// let str = '4.2' 
// console.log(str);
// let num = Number(str) 1 methods 
// let num = parseInt(str)  2 methods 
// let num = parseFloat(str)  3 methods 
// let num = Math.ceil(str) 4 methods 
// console.log(num);

// Number to array 




// 3 task starts  

// function findUniversalPalindrome (params) {
//     let type = typeof(params)

//     if (type === "number") {

//         let arr = Array.from(params.toString(), Number).reverse() 
    
//         let changeArrayToNumber = Number(arr.join(""))
//         if (params === changeArrayToNumber) {
//             return "Polindrome"
    
//         }else{
//             return "Polindrome emas"
//         }

//     }else if (type === "string") {

//         let ChangeStrToArray = params.split("").reverse() 
//         let ChangeString = ChangeStrToArray.join("")
//         if (params === ChangeString) {
//             return "polindrome text"

//         }else{
//             return "polindrome emas text"
//         }

//     }else{
//         return "Siz text ham emas number ham emas bo'lgan typedagi narsa yozdiz"
//     }

// }
// console.log(findUniversalPalindrome ("552")); 


// 4 task starts 

// let obj = {age : 221, height : 113} 
// let changeObjToArray = Object.values(obj) 


// let sum = changeObjToArray.reduce((a,b) => a + b, 0) 


// console.log(` valuelarning yig'indisi ${sum} ga teng`);


// changeObjToArray = Array.from(String(sum), Number)

// let sumOfValues = changeObjToArray.reduce((b,d) => b + d, 0)

// console.log(`valuelarining yig'indisining raqamlar yig'indisi ${sumOfValues} ga teng`);

// 4 task finished 











// 6 task starts 

//  6 task 1 method starts 

// function getInitialOdds(n) {
//     let result = []

//     for (let i = 0; i < (n*2) ; i++) {
//         if (i % 2 !== 0) {
//             result.push(i)
//         }
//     }
//     console.log(result);

// }

// getInitialOdds(6)


//  6 task 1 method finish 


//  6task 2 method starts 



// function findOddNumber (n) {

//     const result = []
//     let count = 0 

//     for (let i = 1 ; count < n; i +=2 ) {
//         result.push(i)
//         count++
//     }

//     console.log(result);
// }
// findOddNumber(4)