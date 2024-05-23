const mess=[]

function Start(){
    let chat='';                    
        for(let  i = 0 ; i < mess.length ; i++ ){
        chat += "You: " +mess[i]+ '<br>' ;
        }
    document.getElementById('card1').innerHTML = chat;
}
function Addtocard(){
    alert('HEllo')
}
