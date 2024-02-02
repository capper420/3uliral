const names=['Deeznuts','The goat','hujaa','GYAT'] 
window.onload = Start();


function Start(){
    let box=''
    document.getElementById('list').innerHTML = "Hello";            
    
    for(let i = 0; i < names.length ; i++){
        box += "USER: " + names[i] + '<br>' ;
    }
    document.getElementById('list').innerHTML = box;
}
function Save(){
    let newname = document.getElementById('newname').value;
    names.push(newname)
                Start()
            }