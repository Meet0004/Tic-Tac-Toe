let boxes = document.querySelectorAll(".box");
//let resetbtn = document.getElementById("#reset");  //reset id access hi nahi hui thi reeeeeeeeeeeeeeeeeeeeeee
let resetbtn = document.getElementById("reset");
let newGameBtn = document.querySelector("#newgame");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");
let colors = document.getElementById("colors");


let turn0 = true; // Boolean value should be 'true' in JavaScript
let count=0;

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText="";
    });
};


const resetGame = () =>{
    count=0;
    console.log(count);
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const drawHogaya = () => {
    console.log("9 counts hue hai");
    msg.innerText = "Draww Hogaya!";
    msgContainer.classList.remove("hide");
    count=0;
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        console.log(count);
        checkWinner();
        
        
        if(count==9){
            drawHogaya();
        }
    });
});

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    count=0;
}
//nahi hua toh count++
const checkWinner = () => {
    for(pattern of winPatterns){
        //console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                console.log("Winner", pos1Val);
                //print();
                showWinner(pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);


let currentMode = "light";
const color = document.getElementById("colors");

colors.addEventListener("click", () => {
    if (currentMode === "light") {
        currentMode = "dark";
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
    } else {
        currentMode = "light";
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
    }
});

const images = [
    "url('/icons/img1.jpeg')",
    "url('/icons/img2.jpeg')",
    "url('/icons/img3.jpeg')",
    "url('/icons/img4.jpg')",
    "url('/icons/img5.jpg')",
    "url('/icons/img6.webp')",
];

let index = -1;
const bgtheme = document.querySelector("#bgImage");

bgtheme.addEventListener("click", () => {
    index = (index + 1) % (images.length + 1); 

    if (index === images.length) {
        document.body.style.backgroundImage = "none"; //reset
    } else {
        document.body.style.backgroundImage = images[index];
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "repeat";
        document.body.style.backgroundPosition = "center";
    }
});


const colorss = ["rgb(207, 156, 255)","#FF6F91", "#FF9671", "#FFC75F", "#F9F871", "#008F7A", "#0089BA", "#2C73D2", "#3596B5"];
let colorIndex = 0;

const solidTheme = document.querySelector("#solidBg");
solidTheme.addEventListener("click", () => {
    if (colorIndex === " ") return;
    
    document.body.style.backgroundColor = colorss[colorIndex];
    
    if (colorIndex === colorss.length - 1) {
        colorIndex = "0";
    } else {
        colorIndex++;
    }
});

const newbox = document.getElementById("hash")
newbox.addEventListener('click', () => {
    document.getElementsByClassName('container').style.visibility = hidden;
})



// let bgImage = " ";
// const bgtheme = document.querySelector("#bgImage");
// bgtheme.addEventListener("click", () => {
//     if(bgImage===" "){
//         bgImage="img1";
//         document.body.style.backgroundSize = "cover";
//         document.body.style.backgroundRepeat = "repeat";
//         document.body.style.backgroundPosition = "center";
//         document.body.style.backgroundImage = "url('/icons/img1.jpeg')";
//     }
//     else if(bgImage==="img1"){
//         bgImage="img2";
//         document.body.style.backgroundSize = "cover";
//         document.body.style.backgroundRepeat = "repeat";
//         document.body.style.backgroundPosition = "center";
//         document.body.style.backgroundImage = "url('/icons/img2.jpeg')";
//     }
//     else if(bgImage==="img2"){
//         bgImage="img3";
//         document.body.style.backgroundSize = "cover";
//         document.body.style.backgroundRepeat = "repeat"; 
//         document.body.style.backgroundPosition = "center"; 
//         document.body.style.backgroundImage = "url('/icons/img3.jpeg')";
//     }
//     else if(bgImage==="img3"){
//         bgImage=" ";
//         document.body.style.backgroundImage = "none";
//     }
// })