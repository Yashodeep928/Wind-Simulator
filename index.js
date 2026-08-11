const tree = document.getElementById("tree");
const windRange = document.getElementById("windRange");
const windValue = document.getElementById("windValue");
const startWindButton = document.getElementById("startWind")
const stopWindButton = document.getElementById("stopWind")

let windStrength = 0
let windRunning = false;
let time = 0;

windRange.addEventListener("input", () =>{
    windStrength = Number(windRange.value)
    windValue.textContent = windStrength
})

startWindButton.addEventListener("click", () => {
     if (windRunning) {
    return;
    }
     windRunning = true;

     animateWind()
})

stopWindButton.addEventListener("click", () => {
    windRunning = false;

    cancelAnimationFrame(animationId)

    tree.style.transform ="translateX(-50%) rotate(0deg)";
})


function animateWind() {

    if(!windRunning){
        return
    }

    time += 0.5;

    const maxRotation = windStrength * 0.12;

    const movement = Math.sin(time) * maxRotation;

    tree.style.transform =`translateX(-50%) rotate(${movement}deg)`

    animationId = requestAnimationFrame(animateWind)

}

