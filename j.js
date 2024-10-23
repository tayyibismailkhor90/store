let adminname = document.getElementById("myInput");
let adminlog = document.getElementById("adminlog");
let USERName = document.getElementById("USER-Name");
let adminpas = document.getElementById("adminpas");
let userpas = document.getElementById("userpass");
let value = adminname.value;
let usernam = USERName.value;
let adminpassword = adminpas.value;
let userpassword = userpas.value;
// Get the value of the input field
let userbtn = document.querySelector('#userbtn');
let a='gf'


userbtn.addEventListener('click',()=>{
    console.log('dfd')
    document.getElementById('userlog').style.display='block'
    document.getElementById('userlog').style.marginTop='300px'
    document.getElementById('choice').style.display='none'
})
document.getElementById('adminbtn').addEventListener('click',()=>{
    console.log('dfd')
    document.getElementById('adminlog').style.display='block'
    document.getElementById('adminlog').style.marginTop='300px'
    document.getElementById('choice').style.display='none'
})





// Display the value in an alert


let adminsub = document.getElementById('adminsub');

adminsub.addEventListener('click',()=>{
    value = adminname.value;
    console.log(value);
    adminpassword = adminpas.value;
    
})
adminsub.addEventListener('click',()=>{
    if (value==='tayyib2'&& adminpassword==='1122' ) {
        console.log(value);
        alert('ok admin');
adminlog.style.display='none';
        document.querySelector(body).style.backgroundColor='red'
    } else {
   alert(' ckeck ADMIN NAME and PASSWORD ')
    }
})
////////////////////////
let usersub = document.getElementById('usersub');

usersub.addEventListener('click',()=>{
    usernam = USERName.value;
     userpassword = userpas.value;
    console.log(value);
    
})
usersub.addEventListener('click',()=>{
    if (userpassword==='1234'&& usernam==='tayyibismail' ) {
        console.log(value);
        alert('ok user')
        document.querySelector('#userlog').style.display='none'
        document.querySelector('.userproduct').style.display='block'
    } else {
   alert(' USER NAME IS UNCORECT')
    }
})
