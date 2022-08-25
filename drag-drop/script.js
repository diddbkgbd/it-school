"use strict"


window.addEventListener('load',documentReady,false);

function documentReady() {
    const images=document.querySelectorAll('img');

    for (let i=0; i<images.length; i++){
        let image = images[i]

        let coord = getCoords(image) ;
        image.style.left = coord.left+"px";
        image.style.top = coord.top +"px";

        image.addEventListener('mousedown',moveMe,false);
    }

    for (let i=0; i<images.length; i++){
        images[i].style.position = "absolute"
        
    }

    function getCoords(elem) { 
        var box = elem.getBoundingClientRect();
        return {
            top: box.top,
            left: box.left
        };

    }
}



function moveMe(eo) {
    eo=eo||window.event
    
    let self = eo.target


    let shiftX = eo.clientX - self.getBoundingClientRect().left;
    let shiftY = eo.clientY - self.getBoundingClientRect().top;
  
    self.style.position = 'absolute';
    self.style.zIndex = 1000;

    document.body.append(self);
  
    moveAt(eo.pageX, eo.pageY);
  
  
    function moveAt(pageX, pageY) {
        self.style.left = pageX - shiftX + 'px';
        self.style.top = pageY - shiftY + 'px';

        self.style.cursor="move";
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
 
    document.addEventListener('mousemove', onMouseMove);
  
    self.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      self.onmouseup = null;
    };
  

    self.ondragstart = function() {
    return false;
    };
}
