
var i = 0;                     

function main() {
   let word = "Strange";  
   let draw = document.getElementById("draw-space");         
   setTimeout(function () {    
      console.log('hello'); 
      draw.innerHTML = word[i];         
      i++;                     
      if (i < word.length) {           
         main();             
      }                       
   }, 1000)
}