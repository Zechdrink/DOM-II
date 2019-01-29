// Your code goes here

const contentAll = document.querySelector('body');

//--------- Event Listener One = Keydown --------------------
//___________________________________________________________



contentAll.addEventListener("keydown", e => {
      if (e.key == "b") {
      e.target.style.background = "black";
      e.target.style.color = "silver";
    }
  });

//--------- Event Listener Two = Keyup ---------------------
//__________________________________________________________  

  contentAll.addEventListener("keyup", e => {
    if (e.key == "b") {
      e.target.style.background = "";
      e.target.style.color = "";
    }
  });


 //---Event Listener's Three and Four = click and dblclick---

const bttons = document.querySelectorAll('.btn');


bttons[0].addEventListener('click',(e) => {
    e.target.style.color = 'red';
    e.target.style.background = 'black';
    });
    
 bttons[0].addEventListener('dblclick',(e) => {
     e.target.style.color = 'white';
     e.target.style.background = '#17A2B8';
    });
    

    
//---------


bttons[1].addEventListener('click', (e)=> {
    e.target.style.color = 'white';
    e.target.style.background = 'black';
});

bttons[2].addEventListener('click', (e)=> {
    e.target.style.color = 'blue';
    e.target.style.background = 'black';
});


