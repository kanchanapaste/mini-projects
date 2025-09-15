const answerBox = document.querySelector(`.answer`);
const oneButton = document.querySelector(`#one`);
const allButtons = document.querySelectorAll('.buttons button');
answerBox.innerHTML=""
let rec=""
console.log(answerBox.value)
for (const button of allButtons){
  button.addEventListener("click",(e)=>{
    
      if(e.target.value=="="){
        calculatetheans()
      }
      else if(e.target.value=="⌫"){
       let newrec=rec.substring(0,rec.length-1)
        rec=newrec
          answerBox.value=rec
      }
      else{
        rec+=e.target.value;
        answerBox.value=rec
        console.log(e.target.value)
        console.log(rec)
      }
  })

}
function calculatetheans(){
  let ans = rec.trim();
  if (ans.length <= 0) {
    answerBox.value = "no value entered";
    return;
  }

  try {
    let result = eval(ans);
    answerBox.value = result;
    rec = result.toString(); // allow chaining
  } catch (error) {
    answerBox.value = "Invalid Expression";
    rec = "";
  }
}
window.addEventListener("keydown",(e)=>{

 const key=parseInt(e.key)
 console.log(key)
 if(e.key=="+"){
  rec+=e.key
  answerBox.value=rec
 }
 else if(e.key=="Enter"){
    calculatetheans()
 }
else if(key!=NaN){
    rec+=e.key
    answerBox.value=rec
 }
 console.log(key)
})