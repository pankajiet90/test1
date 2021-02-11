let data =new Promise(( resolve,reject)=>{
    setTimeout(() => {
        
        resolve("my first promise")
    },2000);
})
console.log(data)
// let data =new Promise(( resolve,reject)=>{
//     setTimeout(() => {
        
//         reject("same issues")
//     },2000);
// })
 
// data.then((item)=>{
//     console.log(item)
// })

// .catch((err)=>{
//     console.log("catch block",err)
// })
let data1 = fetch("http://dummy.restapiexample.com/api/v1/employees");
data1.then((item)=>{
    // console.log(item)
    return item.json()
}).then((res)=>{
    console.log("2n block",res)
   
})