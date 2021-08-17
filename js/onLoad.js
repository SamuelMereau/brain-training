window.onload = function () {
    const div = document.getElementById("loading");
    const button = document.getElementById("start");
    button.addEventListener("click", function () {
        // Create loading bars
        const progressBar = document.createElement("div");
        progressBar.id = "progress-bar";
        const progress = document.createElement("div");
        progress.id = "progress";
        progressBar.appendChild(progress);
        const brainAge = document.createElement("p");
        brainAge.id = "brain-age";
        // Append to loading div
        div.appendChild(progressBar);
        div.appendChild(brainAge);
        // Change heading
        const heading = document.getElementById("heading");
        heading.innerHTML = "Training the brain...";
        // Load loadingBar.js
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "./js/loadingBar.js"; 
        document.body.appendChild(script);
        // Remove button
        button.remove();
        // Play music
        let intro = new Audio('../audio/intro.mp3');
        intro.volume = 0.3;
        intro.play();
        let loop = new Audio('../audio/loop.mp3');
        loop.volume = 0.3;
        loop.loop = true;
        intro.addEventListener("ended", function () {
            loop.play();
        })
        return false;
    })
    console.log("https://github.com/SamuelMereau/brain-training");
}
