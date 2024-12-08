document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function () {
        const soundFile = `sounds/${this.getAttribute("data-sound")}`;
        const audio = new Audio(soundFile);
        audio.play();
    });
});

document.addEventListener("keydown", function (event) {
    const keyMap = {
        'a': "boom.wav",
        's': "clap.wav",
        'd': "hihat.wav",
        'f': "kick.wav",
        'g': "openhat.wav",
        'h': "ride.wav",
        'j': "snare.wav",
        'k': "tink.wav",
        'l': "tom.wav"
    };

    const soundFile = keyMap[event.key.toLowerCase()];
    if (soundFile) {
        const audio = new Audio(`sounds/${soundFile}`);
        audio.play();
    }
});
