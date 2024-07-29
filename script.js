
console.log("Welcome to spotify");

//initialize the variable
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogessbar=document.getElementById('myprogessbar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songname:"legion",filepath:"song/1.mp3",coverpath:"covers/1.jpg"} ,
    {songname:"trap",filepath:"song/2.mp3",coverpath:"covers/2.jpg"} ,
    {songname:"they mad",filepath:"song/3.mp3",coverpath:"covers/3.jpg"} ,
    {songname:"rich the kid",filepath:"song/4.mp3",coverpath:"covers/4.jpg"} ,
    {songname:"safety dance",filepath:"song/5.mp3",coverpath:"covers/5.jpg"} ,
    {songname:"song title",filepath:"song/6.mp3",coverpath:"covers/6.jpg"} ,
    {songname:"back it up",filepath:"song/7.mp3",coverpath:"covers/7.jpg"} ,
    {songname:"hello",filepath:"song/8.mp3",coverpath:"covers/8.jpg"} ,
    {songname:"salam-e-Ishq",filepath:"song/9.mp3",coverpath:"covers/9.jpg"} ,
]
songitem.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
    
});
//audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;
    }
})

//listen to event 
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progess = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogessbar.value=progess;
})

myprogessbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogessbar.value*audioElement.duration/100;
})

const makeallplay=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })    
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeallplay();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        mastersongname.innerText=songs[songIndex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>8){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
    
})
document.getElementById('previous').addEventListener('clickk',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
    
})
