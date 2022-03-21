let input = document.getElementById("input");
let number = document.querySelectorAll(".number");
let operator = document.querySelectorAll(".operator");
let clear = document.querySelector(".clear");
let egale = document.querySelector(".egale");
let supp = document.querySelector(".supp");
let nbr = "0";
let res = "";
let arrai=[];

for(let i=0; i<number.length; i++){
    number[i].addEventListener("click",function(){
        if(input.innerText == "0" && number[i].innerHTML !== "."){
            input.innerText = number[i].innerHTML; 
            nbr = number[i].innerHTML;
        }
        else {
            input.innerText += number[i].innerHTML;
            nbr += number[i].innerHTML; 
        }
          
    }) 
}
for(let i=0; i<operator.length; i++){
    operator[i].addEventListener("click",function(){
        if(nbr != ""){
            arrai.push(nbr);
            nbr = "";
        }
        input.innerHTML += operator[i].innerHTML;
        arrai.push(operator[i].innerHTML);
        
    })
}

clear.addEventListener("click",function(){
    arrai=[];
    input.innerHTML ="0"; 
    nbr = "0";

})

egale.addEventListener("click",function(){
        if(nbr != ""){
            arrai.push(nbr);
            nbr = "";
        } 
    for(i=0 ; i < arrai.length; i++){
        if (i == 0) {
            res = parseFloat(arrai[i]);
        } 
        else {
            if (!isNaN(arrai[i])) {

                switch (arrai[i-1]) {
                    case '-':
                        res -= parseFloat(arrai[i]);
                        input.innerHTML=res;
                        console.log(res);
                        break;
                    case '+':
                        res+= parseFloat(arrai[i]);
                        input.innerHTML=res;
                        console.log(res);
                        
                        break;
                    case 'x':
                        res *= parseFloat(arrai[i]);
                        input.innerHTML=res;
                        console.log(res);
                        
                        break;
                    case '÷':
                        if(parseFloat(arrai[i])==0){
                            input.innerHTML="Non devisable par 0";
                            console.log(res);
                            break;
                        }
                        else{
                            res /= parseFloat(arrai[i]);
                            input.innerHTML=res;
                            console.log(res);
                            break;
                        }   
                    case '%':
                        res %= parseFloat(arrai[i]);
                        input.innerHTML=res;
                        console.log(res);
                        break;
                }
            }
        }
    }
    console.log(arrai);
})
supp.addEventListener("click",function(){
    if(nbr != ""){
        arrai.push(nbr);
        nbr = "";
    } 
            let valo = arrai.slice(0, -1);
            let text = valo.join("");
            arrai  = valo ;
            input.innerText = text;
})
