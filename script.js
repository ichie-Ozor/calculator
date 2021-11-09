var ans = "";
 function displayNumber(num) {
    var initcontent = document.getElementById("display").value;
    if (initcontent == ans){
   document.getElementById("display").value = num;}
   
     else {
        document.getElementById("display").value +=  num;
     }}
 
/* once it locates this function, it asks it to executes it command which is to go to the display on the html and clear the screen to nothing
*/

function clearScreen(){
    document.getElementById("display").value = "";
}
/* this get the object and its value and set them to nothing*/
     
     
 function equals(){
     var screen = document.getElementById("display");
     ans = eval(screen.value);
     screen.value = ans;
}









