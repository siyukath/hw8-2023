
//Variable
let video;

//Function
function updateVolume() {
	document.getElementById("volume").innerHTML = Math.round(slider.value)+"%";
}

//Load the window
window.addEventListener("load", function() {
	video = document.getElementById("player1");
	console.log("Good job opening the window")
	video.autoplay = false;
	console.log("Auto play is set to false")
	video.loop = false;
	console.log("Loop is set to false")

});
//Buttons
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video",video);
	video.play();
	updateVolume()
})

document.querySelector("#slider").addEventListener("change", function() {
	console.log("change volume")
	updateVolume();
})


document.querySelector("#pause").addEventListener("click", function() {
	 console.log("Pause Video");
	 video.pause();
}); 
document.querySelector("#slower").addEventListener("click", function() {
  console.log("Slow Down");
  video.playbackRate *= 0.9;
  console.log("New speed is: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate /= 0.9;
	console.log("New speed is: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
  console.log("Skip Ahead");
  if (video.currentTime + 10 >= video.duration) {
    video.currentTime = 0;
  } 
  else {
    video.currentTime += 10;
  }
  console.log("Current time is: " + video.currentTime);
});


document.querySelector("#mute").addEventListener("click", function() {
  if (video.muted) {
    video.muted = false;
    document.querySelector("#mute").textContent = "Mute";
  } else {
    video.muted = true;
    document.querySelector("#mute").textContent = "Unmute";
  }
});
document.querySelector("#vintage").addEventListener("click", function() {
  video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
  video.classList.remove("oldSchool");
});





