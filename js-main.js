let menu =document.querySelector('.menu-icon');
let navbar =document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle("open-menu")
    menu.classList.toggle("move")

};
window.onscroll = () =>{
    navbar.classList.remove("open-menu")
    menu.classList.remove("move")
}

function validate(){
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        }else{
            sendmail(name.value,email.value,msg.value);
            success();
        }
    });

}
validate();

function sendmail(name,mail,msg){
    emailjs.send("service_fzzd2gn","template_h2bme9q",{
        from_name: "email",
        to_name: "name",
        message:"msg"
        });
}

function emptyerror(){
    swal({
        title: "error!",
        text: "Fields cannot be empty!",
        icon: "error",
        
      });
}

function success(){
    swal({
        title: "Mail sent successfully!",
        text: "We will reply in 24 hours",
        icon: "scuccess",
        
      });
}
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", ()=> {
    scrollTop.classList.toggle("scroll-active",window.scrollY > 400);
})
/*responsive*/
