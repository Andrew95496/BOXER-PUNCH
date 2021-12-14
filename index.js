alert('NOISE ALERT!!!!\nOptimized for Macbook Air 13in\n')

window.addEventListener('load', () => {
  console.log('window');
  if (window.innerWidth < 1331) {
    alert('Screen Size too small\nNeeds to be between 1330px and 1555px')
    console.log(window.innerWidth);
}

if (window.innerWidth > 1555) {
    alert('Screen Size too Big\nNeeds to be between 1330px and 1555px')
    console.log(window.innerWidth);
}
})


const img = document.getElementById("img");
const title = document.getElementById("inner-title");

const score1 = document.querySelector(".scores1");
const score2 = document.querySelector(".scores2");

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const punch1 = document.getElementById("char-1");
const punch2 = document.getElementById("char-2");
const punch3 = document.getElementById("char-3");

const boxer1Btn = document.getElementById("boxer1");
const boxer2Btn = document.getElementById("boxer2");
const newGame = document.getElementById("new-game");
const dis = document.querySelectorAll('.dis')
const classic = document.getElementById('classic')
const tokyo = document.getElementById('tokyo')
const forest = document.getElementById('forest')
const inferno = document.getElementById('inferno')

const volume = document.getElementById('volume')
const settings = document.getElementById('settings')

let health1 = document.getElementById("health1");
let health2 = document.getElementById("health2");



// * Player Object
const Player = {
  hit: (hitAudio) => {
    const hit = new Audio(hitAudio);
    hit.play();
    hit.currentTime = 0;
  },
  grunt: (gruntAudio) => {
    const grunt = new Audio(gruntAudio);
    grunt.play();
    grunt.currentTime = 0;
  },
  victory: (victoryAudio) => {
    const victory = new Audio(victoryAudio);
    victory.play();
  },
  punch1: (punch) => {
    punch1.src = punch;
  },
  punch2: (punch) => {
    punch2.src = punch;
  },
  knockout: (sound) => {
    const knockout = new Audio(sound);
    knockout.play();
  },
  hurt: (sound) => {
    const hurt = new Audio(sound);
    hurt.play();
  }
};


//  Map Sounds
var sclassic = new Audio('./music/classic.mp3');
var stokyo = new Audio('./music/tokyo.mp3');
var sforest = new Audio('./music/forest.mp3');
var sinferno = new Audio('./music/inferno.mp3');

// Maps
let iclassic = 'https://www.andersonkenya1.net/uploads/monthly_2021_04/Special_Circuit_Super_Punch-Out.png.ca124d5487c87c7caf4b39df4156b322.png'
let itokyo = 'https://external-preview.redd.it/kPoQNQRrbmCkWYDOT5SOo09uwTvbmAiMyqR9Xgk_71w.png?auto=webp&s=668af9e5f78f74e0a5373d65e38404c7f6e07249'
let iforest = 'https://i.pinimg.com/originals/b7/1b/50/b71b50a335dbf28f68bbd1e774a54729.png'
let iinferno = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/272dadfd-f3ec-4b8a-aca5-1c7af06dbcec/d6wmjpx-4e9f594f-4e8b-40f8-886a-68d5b1a51c97.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MmRhZGZkLWYzZWMtNGI4YS1hY2E1LTFjN2FmMDZkYmNlY1wvZDZ3bWpweC00ZTlmNTk0Zi00ZThiLTQwZjgtODg2YS02OGQ1YjFhNTFjOTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._uaeJc6s-OV9hUq3V4em_MjF7UOcQWuICyQMAuzEiEg'


// * VOLUME & MUSIC
isMuted = false
mainMuted = false

count = 0
let music = ['music/BICEP _ APRICOTS (Official Video).mp3', 'music/Through The Fire And Flames.mp3', "music/Saint's Row The Third Garage_Crib_Rimjobs Soundtrack [BEST QUALITY].mp3"]
document.addEventListener('keypress', (e) => {
  
  if (count > 2){
    count = 0
  }
  if (e.key == 'b'){
    audio.src = music[count]
    audio.play()
    console.log(music[count]);
    count+= 1
  }
})

// main music
const audio = new Audio("./music/Saint's Row The Third Garage_Crib_Rimjobs Soundtrack [BEST QUALITY].mp3")
audio.volume = 0.5;
audio.play()
sclassic.play();
sclassic.volume = 0.3;
document.addEventListener('keypress', (e) => {
  if (e.key == 'm'){
    audio.pause(); 
    mainMuted = true

  } 
  if (e.key == 'n'){
    audio.play()
    mainMuted = false
  }
})

volume.addEventListener('click', () => {
  volume.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Mute_Icon.svg/1920px-Mute_Icon.svg.png'
  sclassic.pause();
  stokyo.pause()
  sforest.pause()
  sinferno.pause()
  audio.pause()
  isMuted = true
})

volume.addEventListener('dblclick', () => {
  volume.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/1000px-Speaker_Icon.svg.png'
  audio.play()
  if (img.src == iclassic){
      sclassic.play()
  }
  if (img.src == itokyo){
      stokyo.play()
  }
  if (img.src == iforest){
      sforest.play()
  }
  if (img.src == iinferno){
      sinferno.play()
  }
  isMuted = false
})


// * MAPS
classic.addEventListener('click', () => {
    img.src = 'https://www.andersonkenya1.net/uploads/monthly_2021_04/Special_Circuit_Super_Punch-Out.png.ca124d5487c87c7caf4b39df4156b322.png'
    if (!isMuted){
    sclassic.play();
    stokyo.pause()
    sforest.pause()
    sinferno.pause()
    }
})
tokyo.addEventListener('click', () => {
    img.src = 'https://external-preview.redd.it/kPoQNQRrbmCkWYDOT5SOo09uwTvbmAiMyqR9Xgk_71w.png?auto=webp&s=668af9e5f78f74e0a5373d65e38404c7f6e07249'
    if (!isMuted){
    sclassic.pause();
    stokyo.play()
    sforest.pause()
    sinferno.pause()
    }
})
forest.addEventListener('click', () => {
    img.src = 'https://i.pinimg.com/originals/b7/1b/50/b71b50a335dbf28f68bbd1e774a54729.png'
    if (!isMuted){
    sclassic.pause();
    stokyo.pause()
    sforest.play()
    sinferno.pause()
    }
})
inferno.addEventListener('click', () => {
    img.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/272dadfd-f3ec-4b8a-aca5-1c7af06dbcec/d6wmjpx-4e9f594f-4e8b-40f8-886a-68d5b1a51c97.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MmRhZGZkLWYzZWMtNGI4YS1hY2E1LTFjN2FmMDZkYmNlY1wvZDZ3bWpweC00ZTlmNTk0Zi00ZThiLTQwZjgtODg2YS02OGQ1YjFhNTFjOTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._uaeJc6s-OV9hUq3V4em_MjF7UOcQWuICyQMAuzEiEg'
    if (!isMuted){
    sclassic.pause();
    stokyo.pause()
    sforest.pause()
    sinferno.play()
    }
})



//* Settings
settings.addEventListener('click', () => {
  alert('"a": Player 1\n"l": Player 2\n"m": Mute Music\n"n": Unmute Music\n"b": Change Music')
})


//* New Game
newGame.addEventListener("click", () => {
  title.innerText = 'BOXER PUNCH PUNCH!!!'
  punch1.classList.add("hide");
  punch2.classList.add("m");
  punch3.classList.add("m")
  img.src = 'https://64.media.tumblr.com/tumblr_m9806hwDBZ1r0ralmo1_500.gifv'
  for (let di of dis){
    di.disabled = false
}
  isGameOver = false
  const coin = new Audio("./effects/new_game.wav");
  coin.play();
  setTimeout(() => {
    if(!isMuted){
      sclassic.play();
      stokyo.pause();
      sforest.pause();
      sinferno.pause();
    }
    if (!mainMuted){
      audio.play()
    }
    player1.style.color = "black";
    player2.style.color = "black";
    score = 100;
    health1.value = 100
    health2.value = 100
    score2.innerText = score;
    score1.innerText = score;
    punch1.classList.remove("hide");
    punch2.classList.remove("m");
    punch3.classList.remove("m");
    img.src = 'https://www.andersonkenya1.net/uploads/monthly_2021_04/Special_Circuit_Super_Punch-Out.png.ca124d5487c87c7caf4b39df4156b322.png';
  }, 1100);
});


// * Player Variables
let score = 100;
score2.innerText = score;
score1.innerText = score;
let isGameOver = false

// * Player 1 
document.addEventListener("keyup", (e) => {
    if (isGameOver){
        return
    } else {
    if (e.key == "a") {
      for (let di of dis){
        di.disabled = true
    }
    if (score != 0) {
    score = health2.value -= 10;
    }
    score2.innerText = score;
    audio.volume = 0.3;
    Player.hit("./effects/player_1/player_hit.wav");
    Player.grunt("./effects/player_1/player1_grunt.wav");
    Player.punch1(
    "https://thumbs.gfycat.com/LeanKaleidoscopicLacewing-size_restricted.gif"
    );
    setTimeout(() => {
    punch1.src =
        "https://forums.homecomingservers.com/uploads/monthly_2020_01/AggressiveMixedGeese-size_restricted.gif.867e6c8f91eede131bf5bf806690b970.gif";
    }, 500);
    e.preventDefault();
    if (score == 0) {
    Player.hurt("hurt.wav");
    setTimeout(Player.knockout("./effects/player_1/knockout.wav"), 1000);
    punch1.classList.add("hide");
    punch2.classList.add("m");
    punch3.classList.add("m");
    audio.pause();
    Player.victory("./effects/player_1/player1_victory.wav");
    img.src = "https://c.tenor.com/BTMPECC4hS4AAAAC/game-over.gif";
    title.innerText = "PLAYER 1 WINS!!!!";
    player1.style.color = "green";
    player2.style.color = "red";
    isGameOver = true
    }
}
}});


// * Player 2
document.addEventListener("keyup", (e) => {
    if (isGameOver){
        return
    } else {
if (e.key == "l") {
  for (let di of dis){
    di.disabled = true
}
    if (score != 0) {
    score = health1.value -= 10;
    }
    score1.innerText = score;
    audio.volume = 0.3;
    Player.hit("./effects/player_2/player_hit.wav");
    Player.grunt("./effects/player_2/player2_grunt.wav");
    punch2.classList.add("hide");
    punch3.classList.remove("hide");
    setTimeout(() => {
    navigator.keyboard.lock()
    punch2.classList.remove("hide");
    punch3.classList.add("hide");
    }, 500);
    e.preventDefault();
    if (score == 0) {
    Player.hurt("hurt.wav");
    setTimeout(Player.knockout("./effects/player_2/knockout.wav"), 1000);
    punch1.classList.add("hide");
    punch2.classList.add("m");
    punch3.classList.add("m");
    audio.pause();
    Player.victory("./effects/player_2/player2_victory.wav");
    img.src =
        "https://media4.giphy.com/media/12GphGoFazeoso/giphy.gif?cid=ecf05e47e6i5q55uiasam7utet80lmml4duyhyxgj99x30c8&rid=giphy.gif&ct=g";
    title.innerText = "PLAYER 2 WINS!!!!";
    player2.style.color = "green";
    player1.style.color = "red";
    isGameOver = true
    }
}
}});


// sumo1Btn.addEventListener('click', (e)=>{
//     health2.value -= 10;
//     score = setScore2.value -=10
//     score2.innerText = score
//     audio.volume = 0.3;
//     Player.hit("player_hit.wav")
//     Player.grunt("player1_grunt.wav")
//     Player.punch1('https://thumbs.gfycat.com/LeanKaleidoscopicLacewing-size_restricted.gif')
//     sumo1Btn.disabled = true
//     setTimeout(() => {
//         punch1.src = 'https://forums.homecomingservers.com/uploads/monthly_2020_01/AggressiveMixedGeese-size_restricted.gif.867e6c8f91eede131bf5bf806690b970.gif'
//         sumo1Btn.disabled = false
//     }, 500)
//     e.preventDefault()
//     if (score == 0){
//         Player.hurt('hurt.wav')
//         setTimeout(Player.knockout('knockout.wav'), 1000)
//         punch1.classList.add('hide')
//         punch2.classList.add('m')
//         punch3.classList.add('m')
//         audio.pause()
//         Player.victory("player1_victory.wav")
//         img.src = 'https://c.tenor.com/BTMPECC4hS4AAAAC/game-over.gif'
//         title.innerText = 'PLAYER 1 WINS!!!!'
//         player1.style.color = 'green'
//         player2.style.color = 'red'
//         sumo2Btn.disabled = true;
//         sumo1Btn.disabled = true;
//     }
//     setScore.disabled = true

// })

// sumo2Btn.addEventListener('click', (e)=>{
//     health1.value -= 10;
//     score = setScore.value -=10
//     score1.innerText = score
//     audio.volume = 0.3;
//     Player.hit("player_hit.wav")
//     Player.grunt("player2_grunt.wav")
//     punch2.classList.add('hide')
//     punch3.classList.remove('hide')
//     sumo2Btn.disabled = true
//     setTimeout(() => {
//         punch2.classList.remove('hide')
//         punch3.classList.add('hide')
//         sumo2Btn.disabled = false
//     }, 500)
//     e.preventDefault()
//     if (score == 0){
//         Player.hurt('hurt.wav')
//         setTimeout(Player.knockout('knockout.wav'), 1000)
//         punch1.classList.add('hide')
//         punch2.classList.add('m')
//         punch3.classList.add('m')
//         audio.pause()
//         Player.victory("player2_victory.wav")
//         img.src = 'https://media4.giphy.com/media/12GphGoFazeoso/giphy.gif?cid=ecf05e47e6i5q55uiasam7utet80lmml4duyhyxgj99x30c8&rid=giphy.gif&ct=g'
//         title.innerText = 'PLAYER 2 WINS!!!!'
//         player2.style.color = 'green'
//         player1.style.color = 'red'
//         sumo2Btn.disabled = true;
//         sumo1Btn.disabled = true;
//     }
//     setScore2.disabled = true

// })