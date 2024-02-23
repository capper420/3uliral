const mess=[]

function Start(){
    let chat='';                    
        for(let  i = 0 ; i < mess.length ; i++ ){
        chat += "You: " +mess[i]+ '<br>' ;
        }
    
    document.getElementById('box1').innerHTML = chat;
}
function Send(){
    
    let a = document.getElementById('mess').value;
    console.log(a)
    mess.push(a)
        Start()
    

}