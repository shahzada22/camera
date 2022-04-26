const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

const video = document.getElementById('video');

const strip=document.querySelector('#strip');



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

function paintToCanvas() {
/*  const width = video.videoWidth;
  const height = video.videoHsight;
  
  canvas.width = width;
  canvas.height = height;
  
  console.log(width,height);
  
  */
  
 return setInterval(()=>{
   
    ctx.drawImage(video,0,0,250,250);
    
    let pixels = ctx.getImageData(0,0,250,250);
    
    //pixels = redEffect(pixels);
    
    pixels =splitRGB(pixels);
    ctx.putImageData(pixels,0,0);
    
    
  },16);
  
}

function takePhoto(){
  const data=canvas.toDataURL('image/png');
  console.log(data);
 
 
 const link = document.createElement('a');
 link.href=data;
 link.setAttribute('download','handsome');
 //link.textContent='Download Image';
 link.innerHTML = `<img src=${data}>`;
 strip.insertBefore(link,strip.firstChild);
 
}

function redEffect(pixels) {
  
  for (let i = 0; i < pixels.data.length; i+=4) {
    
    pixels.data[i+0] = pixels.data[i+0]+100;
    
    pixels.data[i+1] = pixels.data[i+1]-50;
    
    pixels.data[i+2] = pixels.data[i+2]*0.5;
    
  }
  
  return pixels;
  
}


function splitRGB(pixels) {
  
  for (let i = 0; i < pixels.data.length; i+=4) {
    
    pixels.data[i+150] = pixels.data[i+0];
    
    pixels.data[i*150] = pixels.data[i+1];
    
    pixels.data[i-150] = pixels.data[i+2];
    
  }
  
  return pixels;
  
}

getVideo();

video.addEventListener('canplay',paintToCanvas);

