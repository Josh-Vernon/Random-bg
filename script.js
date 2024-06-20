const btn = document.getElementById("btn");
const color = document.getElementById("color");
const container = document.getElementById("container");

const colors = ["Red","Blue","Purple", "Green","White"];
const flip = document.getElementById("flip");
var value;
var random;
flip.addEventListener("click",() =>{
    btn.addEventListener("click",()=>{
        random = Math.random() * colors.length;
        value = colors[Math.floor(random)];
        container.style.backgroundColor = value;
        color.style.color = value;
        color.innerHTML = value;
    });
});

const hexs = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const hex = document.getElementById("hex");
hex.addEventListener("click",()=>{
    btn.addEventListener("click",()=>{
        value = "#";
        for(var i = 0;i<=6;i++)
            {
                random = Math.floor(Math.random() * hexs.length);
                value += hexs[random];
                container.style.backgroundColor = value;
                color.style.color = value;
                color.innerHTML = value;
            }
    })
})