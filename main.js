const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

const video = document.getElementById('video');

function getVideo() {
  
  navigator.mediaDevices.getUserMedia({video:true,audio:false})
  
  .then(localMediaStream=>{
    
    console.log(localMediaStream);
    
  })
  
}