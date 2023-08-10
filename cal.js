let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let output = document.getElementById('outputBox');


let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            output.value = string;
        }

        else if(e.target.innerHTML == 'C'){
            string ="";
            input.value = string;
            output.value = string;
        }

        else if(e.target.innerHTML == 'D'){
            string = string.substring(0,string.length-1)
            input.value = string;
        }

        else{
            string += e.target.innerHTML;
             input.value = string;
        }
    })
})
