const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

const video = document.getElementById('video');

function getVideo() {

  navigator.mediaDevices.getUserMedia({
      video: true
    })

    .then(localMediaStream => {
      

      video.srcObject = localMediaStream;
      
      video.play();

    })
    .catch(err=>{
      console.log('Oh No!',err);
    });

}


getVideo();
