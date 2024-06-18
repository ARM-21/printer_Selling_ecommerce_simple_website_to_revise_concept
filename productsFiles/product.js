//image slider for product page
var imageContainer = document.querySelector('.advertisement');
console.log(imageContainer);
var images = ['0','1', '2', '3', '4', '5']
function slider() {
    let index = 0;

    setInterval(() => {
       
        console.log(index)
        if (index >= images.length) {
            index = 0;
        }
        console.log(index)

        imageContainer.style.backgroundImage = `url( ./../images/background_images/background${images[index]}.png)`;
        index++
        
    }, 5000)
}
slider();

// add to cart submission feedback
var cart = document.querySelectorAll('.addToCart');
console.log(cart);
cart.forEach((element)=>{
element.addEventListener("click",()=>{
window.alert("Product added successfully!:)");

});

});