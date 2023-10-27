    function handleImage(e) {
        let video = document.getElementsByClassName("video");
        console.log(video);
        video[0].src = `assets/video1${e + 1}.mp4`;
        console.log(e);
    }

    function handleImageDelete(e) {
        // let overlay = document.getElementsByClassName(`overlay`)
        // overlay[0].className.split(" ")
        // console.log(typeof overlay[0].className,e)
    }

