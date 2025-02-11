const btn = document.createElement("button")
btn.innerHTML="I am here"
document.body.appendChild(btn)

 btn.addEventListener("click",DiceGame)
 btn.style.marginBottom = "20px";
 btn.style.padding = "12px 24px";
 btn.style.fontSize = "18px";
 btn.style.cursor = "pointer";
 btn.style.backgroundColor = "#4CAF50";  
 btn.style.color = "white";
 btn.style.border = "none";
 btn.style.borderRadius = "10px";
 btn.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
 btn.style.transition = "background-color 0.3s ease";
function DiceGame(){
    let number = Math.floor(Math.random()*6)+1;
    console.log(number);
        displayDice(number);
    
}
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
 // Corrected from 'horizontal' to 'row'
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";  // Ensures full height for proper vertical centering

function displayDice(number){
    const existingImage = document.querySelector('img')
    if(existingImage){
        existingImage.remove();
    }

    const image = document.createElement("img")
   
    if (number==1){
         image.src="dice-six-faces-one.svg"
        // document.body.appendChild(image)
        
    }
    else if(number==2){
        image.src="dice-six-faces-two.svg"
        // document.body.appendChild(image)
    }
    else if(number==3){
        image.src="dice-six-faces-three.svg"
        // document.body.appendChild(image)
    }
    else if(number==4){
        image.src="inverted-dice-4.svg"
        // document.body.appendChild(image)
    }else if(number==5){
        image.src="inverted-dice-5.svg"
        // document.body.appendChild(image)
    }
    else{
        image.src="dice-six-faces-six.svg"
         
    }
    image.style.width = "200px";
    image.style.height="200px"
    // image.style.display="flex"
    // image.style.justifyContent="center"
    // image.style.display="center"
    // image.style.marginLeft="650px"
    // image.style.marginTop="200px"
    image.style.transition="transform 0.1s ease"
    image.addEventListener("mouseover", () => {
        image.style.transform = "scale(1.1) rotate(100deg)";  // Slight zoom and tilt
    });
    image.addEventListener("mouseout", () => {
        image.style.transform = "scale(1) rotate(0deg)";
    });
    document.body.appendChild(image)
}


const image = document.createElement("img")
image.src="dice-six-faces-one.svg"
image.style.width = "200px";
image.style.height="200px"
// image.style.display="flex"
// image.style.justifyContent="center"
// image.style.display="center"
// image.style.marginLeft="650px"
// image.style.marginTop="200px"
image.style.transition="transform 0.1s ease"
image.addEventListener("mouseover", () => {
    image.style.transform = "scale(1.1) rotate(120deg)";  // Slight zoom and tilt
});
image.addEventListener("mouseout", () => {
    image.style.transform = "scale(1) rotate(0deg)";
});
document.body.appendChild(image)
