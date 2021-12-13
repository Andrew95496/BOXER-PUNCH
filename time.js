
let time = new Date().getHours()

if ( time > 5 && time < 12){
    document.body.style.background = "url('https://64.media.tumblr.com/5d8132706dcd2adbf4957093b37fc267/tumblr_pwe0mm0vhe1uxrf48o1_640.gifv')";
    document.body.style.backgroundSize = "cover"

}



if (time >= 12 && time < 17){
    document.body.style.background = "url('https://i.pinimg.com/originals/9f/be/4a/9fbe4a25916c15bf8a7b2d6939c97ab3.png')";
    document.body.style.backgroundSize = "cover"

}



if (time >= 20 || time <= 5){
    document.body.style.background = "url('https://64.media.tumblr.com/2bc084c044357fe1e782dd67441c9d4b/9bf1ca157771228f-d8/s1280x1920/7e06cf46ca6bb67b80f9be339715be6ea54052c4.gifv')";
    document.body.style.backgroundSize = "cover"

}

