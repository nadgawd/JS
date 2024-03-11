// let helloBtn=document.querySelector('button');
// helloBtn.addEventListener('click', showMsg);

// function showMsg()
// {
//     alert("Hello World!");
// }

let helloBtn = document.querySelector('button');
helloBtn.addEventListener('click', inputMsg);

function inputMsg() 
{
    let name = prompt('Enter Shit');
    helloBtn.textContent = 'Two Assholes:' + name;
}