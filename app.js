// Creating the required elements
const text= ['Developer','Problem Solver','Student','Engineer'];
let counter=0;
let index=0;
let currentText = '';
let letters ='';


(function typer()
{
if(counter === text.length)
{
    counter= 0;
}
currentText = text[counter];
letters= currentText.slice(0, ++index);


document.querySelector('.typing').textContent=letters;
if(letters.length===currentText.length)
{
    counter++;
    index=0;
}

setTimeout(typer,200);


})();
