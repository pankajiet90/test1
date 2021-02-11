
// var x=0;
// var y= 0;
// var sum =0;

// for ( var i = 1; i <= 10; i++ )
// {
    
//   if ( i%3 === 0 || i%5===0 )
//   {  
//     sum =sum + i;
//     // console.log(sum) 
//   }

// //   console.log (sum)
  
// }
// console.log (sum)
//  for ( var i=0; i<=5; i++){
//      if(i%2===0){
//           var x= x+i;     
//      }
//      else if (i%5===0){
//          var y= y+i;
         
//      }
//  }
//  console.log(x+y)
// var a =['a',12,'b',23]
// console.log(a)
// a[0]='s';
// console.log(a)
 
//for each loop with array

// var a=[ 'pankaj','nishant','ravindra','upendra']

// a.forEach((value)=>{
//     document.write(value +" <br>")
// })

//destructuring array

// ({a,b,c,...d}={a:45,b:55,c:60,d:90,e:30})
//  console.log(a,b,c,d)

//  const fruits =[ 'apple','banana','mongo'];

//  [a,b,c]=fruits;

//  console.log(a,b,c);

 //object distructuring

//  const laptop={
//      modal:'dell',
//      age:'25',
//      gender:'m',
//      net:'12356',
//      start:function(){
//          console.log('started')
//      }
//  }
//  const {modal,age,gender,net,start}=laptop;
//  console.log(modal,age,gender,net,start);
//  start()

//spread 
// var a=[10,20,33,40,60];
// var b= [...a];
//  a[0]=50;
// b[1]=70;
// console.log(a);
// console.log(b)

//rest 

// function abc(...nums){
//     console.log(nums);
// }
// abc(10,20,30,40,50);
//  var a=['apple','mongo','banana']
// //  a.shift();
// a.unshift('anil')
//  console.log(a);


 //// value shift

// var  [a,b]= [10, 20];
 
// var [a,b]=[b,a];

// console.log(a,b);
//  var x =['apple','banana']
//  var [a,b]=x;
//  var [a,b]=[b,a];
//  console.log(x)
//  console.log(a,b)

// var x=['apple', 'mango'];
// var [a,b]=[b,a];
// var [a,b]=x;
// document.write(a+" "+b)
//  var x ;
// function count(){
//     let a=Number( document.getElementById("demo").value)
//     let b= Number(document.getElementById("demo1").value)

//     for( c=1; c<= b; c++){
//         x=c*a
//         console.log(x);
//         document.write(x + "<br>")
//     }
// }
// function count(){
//     var a=Number(document.getElementById("demo").value)

//     for (i=1; i<=10; i++)
//     {
//         x=a*i;
        
//         console.log(x)
//         document.write("<ul><li>"+ x +"</li></ul>")
    
//     }
// }
// for in loop

var obj ={
    fname:'pank',
    lname:'kumar',
    age:25,
    email:'pank@gmail.com',
    obj1:{a:'cccc',b:'ddd'}
}
for ( var i in obj){
    console.log(obj[i]);
    document.write(i +":"+ obj[i] +"<br>");
 
    }
    

// for of loop

var arr=['pankaj','nishant','ravindra']
for ( let i of arr)
{
    console.log(i)
}

