function numberBoxEventDown(event){
    console.log(event.key);
    if(event.key === 'Enter'){
        calci();
    }
}
function calci(){
    const inputElement = document.querySelector('.number-box');
    let cost = Number(inputElement.value);
    if(cost<40){
        cost += 10;
    }
    document.querySelector('.total-cost').innerHTML= `Total Cost = $${cost}`;
}
function subscribe(){
    const buttonElement=document.querySelector('.Subscribe');
if(buttonElement.innerHTML==='<b>Subscribe</b>'){
buttonElement.innerHTML = '<b>Subscribed</b>';
} else{
buttonElement.innerHTML = '<b>Subscribe</b>';
}
}