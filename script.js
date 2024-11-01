let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; // O

const  winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
const resetGame = () => {
    turnO = true;

    function enableBoxes() {
        for (let box of boxes) {
            box.disabled = false;
            box.innerText = "";
        }
    }
    enableBoxes()
    msgContainer.classList.add("hide");
}
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})
const checkWinner = () => {
    for (let pattern of winPatterns) {
        /*console.log(pattern[0], pattern[1], pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        );
         */
        let position1Val = boxes[pattern[0]].innerText;
        let position2Val = boxes[pattern[1]].innerText;
        let position3Val = boxes[pattern[2]].innerText;

        const disableBoxes = () => {
            for (let box of boxes) {
                box.disabled = true;
            }
        }

        // const enableBoxes = () => {
        //     for (let box of boxes) {
        //         box.disabled = false;
        //         box.innerText = "";
        //     }
        // }

        const showWinner = (winner) => {
            msg.innerText = `Congratulations, winner is ${winner}`;
            msgContainer.classList.remove("hide")
            disableBoxes();
        }

        if (position1Val !== "" && position2Val !== "" && position3Val !== "") {
            if (position1Val === position2Val && position2Val === position3Val) {
                showWinner(position1Val);
            }
        }
    }
}
newBtn.addEventListener("click", resetGame);
restBtn.addEventListener("click", resetGame);