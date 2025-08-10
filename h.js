let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#res");
let msgwinner=document.querySelector("#ur");
let neewbutn=document.querySelector("#btn");
let msg=document.querySelector(".msg");
let turno=true;
const winpattern=
[[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[6,7,8],
[2,4,6],
[3,4,5],
];

const resetgame=()=>{
    turno=true;
    enableboxes();
    msg.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
       if(turno){
        box.innerText="o";
        turno=false;

       }
       else{
        box.innerText="x";
        turno=true;
       }
       box.disabled=true;
       checkwinner();
        
    })
    
});
const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const shoWinner=(winner)=>{
    ur.innerText=`congratulation ,winner is ${winner}`;
    msg.classList.remove("hide");
    disabledboxes();
}
const checkwinner=() =>{
    for(let pattern of winpattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val)
            {
                console.log("Winner",pos1val);
                shoWinner(pos1val);
                
            }
        }
    }
}
neewbutn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
