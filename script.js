
//for last contact submit button
var submit = document.querySelector("#contactSubmit");
function delete2() {
    var firstname = document.querySelector(".firstname");
    
    var secondname = document.querySelector(".lastname");
    var email = document.querySelector(".email");
    var textarea = document.querySelector('#textarea');
    if (firstname.value.length == 0 || secondname.value.length == 0 || textarea.value.length == 0 || email.value.length == 0) {
        window.alert("Empty fields!!please enter the value");
        
    }
    else {
        window.alert("Thank you! for the submission");
    }

}
/*navigation bar button actived while clicking */
var navbarBtn = document.querySelectorAll('.nav-btn');
console.log(navbarBtn);

navbarBtn.forEach((element) => {

    element.addEventListener('click', () => {

        element.style.borderBottom = "5px thick red";
        element.style.backgroundColor="red";
    })

});

//expanding introductory section
var expand = document.querySelectorAll('.intro');

console.log(expand);

expand.forEach((element)=>{
    element.addEventListener('click',()=>{
        var block =element.nextElementSibling;
        
       
        if(block.classList.contains("none")){
           
            
            block.classList.add("block");
            element.style.color="blue";
            
            block.classList.remove("none");
        }
        else{
            block.classList.add("none");
            block.classList.remove("block");
            element.style.color="black";
        }

    })

})

//Click below blinker
var Blinker= document.getElementById('Blinker');

console.log(Blinker);
function colorChanger(){
    let color=["red","blue","green"];
    let index=[0,1,2]
    let ind = Math.floor(Math.random()*index.length);
  
    if(ind==color.length){
        ind=0;
        
    Blinker.style.color=`${color[ind]}`;
    ind++;
}
else{
    Blinker.style.color=`${color[ind]}`;
    ind++;
}
}
setInterval(colorChanger,200);