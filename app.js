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
    // Function playDrums sound/audio
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
    // Function adding background-clas @param Key, s
    const addBackground = (key) => {

        for (let i = 0; i < divIds.length; i++) {

            if (key === 'a' || key === 'z' || key === 'q') {
                const index = divIds.indexOf(key);
                divDrums[index].classList.add('bg-purple-400')
            }

            if (key === 'e' || key === 's' || key === 'd') {
                const index = divIds.indexOf(key);
                divDrums[index].classList.add('bg-cyan-200')
            }

            if (key === 'w' || key === 'x' || key === 'c') {
                const index = divIds.indexOf(key);
                divDrums[index].classList.add('bg-yellow-100')
            }

        }

    }

    //Function removing background-class @param key
    const removeBackground = (key) => {
        for (let i = 0; i < divIds.length; i++) {

            if (key === 'a' || key === 'z' || key === 'q') {
                const index = divIds.indexOf(key);
                divDrums[index].classList.remove('bg-purple-400')
            }

            if (key === 'e' || key === 's' || key === 'd') {
                const index = divIds.indexOf(key);
                divDrums[index].classList.remove('bg-cyan-200')
            }

            if (key === 'w' || key === 'x' || key === 'c') {
                const index = divIds.indexOf(key);
                divDrums[index].classList.remove('bg-yellow-100')
            }

        }
    }
    //////////////////////////////////////
    // Function logKeyPressed
    const logKeyPressed = (event) => {
        const key = event.key.toLowerCase();
        addBackground(key);

    };
    //////////////////////////////////////
    // Function click

    const clickDrumPad = (event) => {

        const drumKey = event.target.id.toLowerCase();
        addBackground(drumKey);
        setTimeout(() => {
            removeBackground(drumKey);
        }, 200);

        const soundSrc = soundObj[drumKey];
        if (soundSrc) {
            const soundToPlay = new Howl({
                src: [soundSrc],
            });

            soundToPlay.play();
        }

    }




    //////////////////////////////////////
    // Function logKeyPressed OUT
    const logKeyPressedOut = (event) => {
        const key = event.key.toLowerCase();
        removeBackground(key);


    };

    //////////////////////////////////////
    // Event listeners drumpad

    divDrums.forEach(div => {
        div.addEventListener('keydown', logKeyPressed);
        div.addEventListener('keyup', logKeyPressedOut);
        div.addEventListener('keydown', playDrums);
        div.addEventListener('click', clickDrumPad);
    });

    window.addEventListener('keydown', logKeyPressed);
    window.addEventListener('keyup', logKeyPressedOut);
    window.addEventListener('keydown', playDrums);
};

window.addEventListener('load', main);

