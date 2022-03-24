const buttons = document.querySelectorAll (".toggler");

buttons.forEach( button => {
 button.addEventListener("click", e =>{
   const answer = button.nextElementSibling;
   answer.classList.toggle("close");
  const answer2= button.Element
 })
});