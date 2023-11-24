// Navber hambaer

const navhamber = document.getElementById('navber')
function onToggleMenu(nav){
    nav.name = nav.name === 'menu' ? 'close' : 'menu'
    navhamber.classList.toggle('left-[0%]')
}


document.getElementById('button').
addEventListener('click',function(){
    const findEmail = document.getElementById('email')
    const emailvalue = findEmail.value;
    
    const findpassword=document.getElementById('password')
    const passwordvalue= findpassword.value;
    if(emailvalue==='arafat123@gmail.com' &&
    passwordvalue==='1234'){
        window.location.href='profile.html'
    }
    else{
        alert('you are woring password')
    }
})