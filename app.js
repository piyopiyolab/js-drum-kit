const main = async () => {
    console.log("script ok");

    //////////////////////////////////////
    // Variables            
    const soundObj = {
        a: './audio/808-Drum-Kit/808-Drum-Kit/8O8_R.wav',
        z: './audio/808-Drum-Kit/808-Drum-Kit/808_2.wav',
        e: './audio/808-Drum-Kit/808-Drum-Kit/808_3.wav',
        q: './audio/808-Drum-Kit/808-Drum-Kit/808_4.wav',
        s: './audio/808-Drum-Kit/808-Drum-Kit/808_5.wav',
        d: './audio/808-Drum-Kit/808-Drum-Kit/808_6.wav',
        w: './audio/808-Drum-Kit/808-Drum-Kit/808_7.wav',
        x: './audio/808-Drum-Kit/808-Drum-Kit/808_O.wav',
        c: './audio/808-Drum-Kit/808-Drum-Kit/808_K.wav',
    }

    const divDrums = document.querySelectorAll('div');
    const divIds = Array.from(divDrums).map(div => div.id);

    //////////////////////////////////////
    // Function playDrums
    const playDrums = (event) => {
        const key = event.key.toLowerCase();
        const soundSrc = soundObj[key];

        if (soundSrc) {
            const soundToPlay = new Howl({
                src: [soundSrc],
            });

            soundToPlay.play();
        }
    };

    //////////////////////////////////////
    // Function logKeyPressed
    const logKeyPressed = (event) => {
        const key = event.key.toLowerCase();

        for (let i = 0; i < divIds.length; i++) {

            if (key === divIds[i]) {
                divDrums[i].classList.add('bg-purple-400');

                divDrums.forEach((div, index) => {
                    if (index !== i) {
                        div.classList.remove('bg-purple-400');
                    }
                });
            }
        }
    };

    //////////////////////////////////////
    // Function logKeyPressed OUT
    const logKeyPressedOut = (event) => {
        const key = event.key.toLowerCase();
        let newBg = null;

        for (let i = 0; i < divIds.length; i++) {


            if (key === divIds[i]) {
                divDrums[i].classList.remove('bg-purple-400');

                divDrums.forEach((div, index) => {
                    if (index !== i) {
                        div.classList.remove('bg-purple-400');
                    }
                });
            }
        }
    };

    //////////////////////////////////////
    // Event listeners drumpad

    divDrums.forEach(div => {
        div.addEventListener('keydown', logKeyPressed);
        div.addEventListener('keyup', logKeyPressedOut);
        div.addEventListener('keydown', playDrums);
    });

    window.addEventListener('keydown', logKeyPressed);
    window.addEventListener('keyup', logKeyPressedOut);
    window.addEventListener('keydown', playDrums);
};

window.addEventListener('load', main);
