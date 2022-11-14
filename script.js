let btn = document.getElementById('btn');
let txt = document.getElementById('txt');
function changeColor(color){
    document.body.style.background = color;
    btn.style.background = color;
    txt.style.borderColor = color;

document.querySelectorAll('span').forEach(function
(item){
    item.classList.remove('active');
})
event.target.classList.add('active')
}

function send() {
var name = document.getElementById("name");
var age = document.getElementById("age");
var height = document.getElementById("height");
var email = document.getElementById("email");
var tell = document.getElementById("tell");
if (name.value != "" 
&& age.value!= "" 
&& height.value!= "" 
&& email.value!= ""
&& tell.value!= ""
) {
    alert('Obrigado ' + name.value + ' Dados enviados com sucesso');
    sended();
}else{
    alert('Algo esta errado!')
}

function sended(){
    document.getElementById('name').value='';
    document.getElementById('age').value='';
    document.getElementById('height').value='';
    document.getElementById('email').value='';
    document.getElementById('tell').value='';
    }
}
