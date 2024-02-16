const names=['']
const birth=['']
const gmail=['']



function Start(){
    let box=''                
    for(let i = 0; i < names.length ; i++){
        box += "USER: " + names[i] + '<br>' ;
    }
    document.getElementById('list').innerHTML = box;
}



function Save(){
    let a=document.getElementById('Name').value;
    let b=document.getElementById('birth date').value;
    let c=document.getElementById('gmail').value;
    names.push(a)
        Start()
    birth.push(b)
    gmail.push(c)

}