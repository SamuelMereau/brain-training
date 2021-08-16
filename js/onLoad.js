window.onload = function () {
    let intro = new Audio('../audio/intro.mp3');
    intro.volume = 0.3;
    intro.play();
    let loop = new Audio('../audio/loop.mp3');
    loop.volume = 0.3;
    loop.loop = true;
    intro.addEventListener("ended", function () {
        loop.play();
    })
    console.log("https://github.com/SamuelMereau/brain-training");
}
