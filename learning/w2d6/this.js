// method -> obj
// function -> window (browser) / global (Node)

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
}

video.play();

function playVideo() {
    console.log(this);
}

playVideo();