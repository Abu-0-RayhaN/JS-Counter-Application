let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let number = document.querySelector('input');
let Reset = document.querySelector("#Reset");
increment.addEventListener('click', ()=>{
    number.value ++;
})
decrement.addEventListener('click',()=>{
    
    if ( number.value == 0){
        alert("Can't decrese")
    } else{
        number.value --;
    }
})
Reset.addEventListener('click',()=>{
    number.value = 0;
})
