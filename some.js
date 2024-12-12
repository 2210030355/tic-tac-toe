let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset")
let newbtn=document.querySelector("#new-btn")
let msgCont=document.querySelector(".msg-cont")
let msg=document.querySelector("#msg")
let turn0=true;

const win=[
    [0,1,2],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[0,4,8],[2,4,6],
    [0,3,6]
];
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turn0)
        {
            box.innerText = "O";
            turn0=false;
        }
        else{
            box.innerText = "X";
            turn0=true;
        }
        box.disabled =true;
        checkwinner ();
    })
})
const disableboxes=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showwinner=(winner)=>{
    msg.innerText = `congrats ${winner}`;
    msgCont.classList.remove("hide");
    disableboxes();
}
const checkwinner=() =>{
    for(let pattern of win){
        console.log(pattern);
        let a=boxes[pattern[0]].innerText;
        let b=boxes[pattern[1]].innerText;
        let c=boxes[pattern[2]].innerText;
        if(a!="" && b!="" && c!=""){
            if(a==b && b==c && c==a)
            {
                console.log("you won",a);
                showwinner(a);
            }
        }
    }
};
const resetgame = ()=>{
    turn0=true;
    enableboxes();
    msgCont.classList.add("hide");
}
const enableboxes=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

