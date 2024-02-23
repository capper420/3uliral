const number=['1','2','3','G4'] 
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
    let newnumber = document.getElementById('newname').value;
    
    names.push(newnumber)
                Start()
            }