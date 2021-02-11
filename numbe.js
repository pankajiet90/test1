for ( var i = 1; i <= 50; i++ )
{
  if ( i%3 === 0 )
  {
    console.log( i + " hello" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " wellcome" );
  }
  else
  {
    console.log(i);
  }
}



// event odd
for (var x=0; x<=20; x++) {
   
     if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}
//min and max get 

let z=(10,20,30,40)
let z1 =Math.max(z)

console.log(z1)


// let a= 25;
// let b= 30;
// let c=35;

function abc(){
   
    let a= document.getElementById("demo").value
    let b=document.getElementById("demo1").value
    let c =document.getElementById("demo2").value
if ( a<b  && a<c  ){
    
    document.write(a)
}
else if ( b<a && b<c ){
    
    document.write(b)
}
else if( c<a && c<b){
  
  document.write(c)
}
else{
    console.log("error")
}

// document.getElementById("demo1").innerHTML = text;
// //   console.log(text)
}
// function sum (a,b){
//   var c=a+b;
  
//   return c;
  
// }

// //array
// var t=sum (5,5)
// document.write(t)

// var ary =[10,20,30,40]
// var sum = 0;
// for (a=0; a<=4; a++){
//   document.write(ary[a] +"<br>")
//   sum = sum + ary[a];

// }
// document.write("total " + sum)

//by user 
//  var ary =new Array(3)
//  for ( var g=0; g<3; g++){
//    ary[g]=prompt("enter")
//  }
//  for (var a=0; a<3; a++){
//    document.write(ary[a]+ "<br>" )
//  }

//multidimasion 
//  var ary =[
//    [ "a",10,"m",20],
//    [ "b",10,"l",20],
//    [ "c",10,"a",20]
//  ]

//  for (a=0; a<=4; a++){
//    for ( b=0; b<=4; b++){
//    document.write(ary[a][b] +"  ")
//   }
//   document.write("<br>")
//  }


