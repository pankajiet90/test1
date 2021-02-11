

 function textchange() {
 document.getElementById("demo").innerHTML=("the text has been change ")
 
};

function myFunction() {
    setTimeout(function(){ alert("wellcome to map"); }, 2000)
};

// var arr=[10,20,30,40,50];
// var newArr=arr.map(function(value,i,arr){
//  console.log(value);
//  console.log(i);
//  console.log(arr);
//  console.log(newArr)

// })
    
document.getElementById("demo2").addEventListener("click",abc);
function abc(){
    document.getElementById("demo2").innerHTML=("change text")
}
var btn =document.getElementById("mybtn")
btn.addEventListener("click",function(){ alert("button clicked")})