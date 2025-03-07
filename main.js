const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const book = document.querySelector("#book")

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

prev.addEventListener("click", gotoprev);
next.addEventListener("click", gotonext);


let currentlocation=1;
let numofpapers = 3;
let maxlocation = numofpapers+1;
function openBook(){
    book.style.transform = "translateX(50%)";
    prev.style.transform = "translateX(-250px)";
    next.style.transform = "translateX(250px)";
}
function closeBook(isAtBeginning){
    if(isAtBeginning){
        book.style.transform = "translateX(0%)";
    }
    else{
        book.style.transform = "translateX(100%)";
    }
    book.style.transform = "translateX(0%)";
    prev.style.transform = "translateX(0px)";
    next.style.transform = "translateX(0px)";
}
function gotonext(){
    if(currentlocation < maxlocation){
        switch(currentlocation){
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 1;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper2.style.zIndex = 1;
                break;
            default:
                throw new Error ("unknown");
        }
        currentlocation++;
    }
}
function gotoprev(){
    if(currentlocation > 1){
        switch(currentlocation){
            case 2:
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            case 4:
                openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error ("unknown");
        }
        currentlocation--;
    }

}