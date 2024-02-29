const input = document.querySelector(".input");
const c = document.querySelector(".c");
let buttons = document.querySelectorAll(".number");
// const enter = ["1","2","3","4","5","6","7","8","9","0","/","*","-","+","="];
// document.addEventListener("keydown", function (event) {
//   if (enter.includes(event.key)) {
//   input.value = input.value + event.key;
//   input.value = input.value;
//   e.target.innerText;
//   }
// });
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
   
    if (e.target.innerText == "clear") {
      input.value = "";
      input.value = e.target.innerText;
      input.value = "";
    } else if (e.target.innerText == "C") {
      input.value = input.value.substring(0, input.value.length - 1);
    } else if (e.target.innerText == "%") {
      input.value = input.value + " /100 *  ";
      input.value = input.value;
    }
    // else if (input.value == "=") {
    //   // console.log("blank");
    //   input.value =input.value - input.value
    // //   input.value = eval(input.value);
    // //   // console.log("blank", blank);
    // }  
    else if (e.target.innerText == "=" || input.value == "=") {
      console.log("blank");
      // input.value = eval(input.value);
      // input.value = input.value
      // console.log("blank", blank);
    } 
    else {
      input.value = input.value + e.target.innerText;
      input.value = input.value;
    }
  });
});
