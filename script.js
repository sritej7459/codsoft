let btn = document.querySelectorAll("button");
let text = document.getElementById("text");
    for(let i=0;i<btn.length;i++){
        btn[i].addEventListener('click',function(){
            if(this.innerHTML == "C")
            text.innerHTML = " ";
            else if(this.innerHTML == "="){
                text.innerHTML = eval(text.innerHTML)
            }
            else{
                text.innerHTML += this.innerHTML;
            }
        })
    }