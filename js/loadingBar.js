/* The very scientific process of training the brain. Loading bars */
let brainAge = 80;
let isTrained = false;

function GetSmarter (i) {
    brainAge -= i;
    GetBrainAge();
    if(isTrained) {
        return;
    }
    StartLoad();
}

function TrainedState(value) {
    if(value === "true") {
        isTrained = true;
    }
}

function GetBrainAge() {
    const p = document.getElementById("brain-age");
    if(brainAge == 20){
        p.innerHTML = `Current brain age: ${brainAge}<br><br>Congratulations, your brain has been trained. Perhaps try another sudoku?`;
        TrainedState("true");
    } else {
        p.innerHTML = `Current brain age: ${brainAge}`;
    }
}

function StartLoad() {
    let i = 0;
    if (i == 0) {
        i = 1;
        let id = setInterval(frame, 200);
        let elem = document.getElementById("progress");
        let width = 1;
        function frame() {
            if (width >= 696) {
                clearInterval(id);
                i = 0;
                GetSmarter(1);
            } else {
                width++;
                elem.style.width = width + "px";
            }
        }
    }
}

GetBrainAge();
StartLoad();