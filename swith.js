
function myDay() {
  var text;
  var x =Number(document.getElementById("myInput").value);

  switch(x) {
    case 1:
      text = "sunday";
    break;
    case 2:
    text = "mond";
    break;
    case 3:
    text = "tues";
    break;
    default:
    text = "error";
    
  }
  document.getElementById("demo").innerHTML = text;
  console.log(text)
  
}
