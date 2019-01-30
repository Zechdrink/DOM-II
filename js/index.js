// Your code goes here

const contentAll = document.querySelector('body');


function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

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
//###### USED stopPROPAGATION ON BUTTONS


const bttons = document.querySelectorAll('.btn');


bttons[0].addEventListener('click',(e) => {
    e.stopPropagation();
    e.target.style.color = 'red';
    e.target.style.background = 'black';
    bttons[1].style.color ='white';
    bttons[1].style.background ='black';
    bttons[2].style.color ='teal';
    bttons[2].style.background ='black';
    });
    

    bttons[0].addEventListener('dblclick',(e) => {
        e.target.style.color = 'white';
        e.target.style.background = '#17A2B8';
        bttons[1].style.color ='white';
        bttons[1].style.background ='#17A2B8';
        bttons[2].style.color ='white';
        bttons[2].style.background ='#17A2B8';
        });
    

 bttons[1].addEventListener('click', (e)=> {
     e.stopPropagation();
     e.target.style.color = 'gold';
     e.target.style.background = 'midnightblue';
     bttons[0].style.color ='silver';
     bttons[0].style.background ='midnightblue';
     bttons[2].style.color ='green';
     bttons[2].style.background ='midnightblue';

     });

     bttons[1].addEventListener('dblclick',(e) => {
        e.target.style.color = 'white';
        e.target.style.background = '#17A2B8';
        bttons[0].style.color ='white';
        bttons[0].style.background ='#17A2B8';
        bttons[2].style.color ='white';
        bttons[2].style.background ='#17A2B8';
        });
    
bttons[2].addEventListener('click', (e)=> {
     e.stopPropagation();
     e.target.style.color = 'black';
     e.target.style.background = 'yellow';
     bttons[0].style.color ='orange';
     bttons[0].style.background ='yellow';
     bttons[1].style.color ='blue';
     bttons[1].style.background ='yellow';
    });

    bttons[2].addEventListener('dblclick',(e) => {
    
        e.target.style.color = 'white';
        e.target.style.background = '#17A2B8';
        bttons[0].style.color ='white';
        bttons[0].style.background ='#17A2B8';
        bttons[1].style.color ='white';
        bttons[1].style.background ='#17A2B8';
        });


//---Add Event Listeners 5 and 6 (mouseenter and mouseout) ----------------------


const navAs = document.querySelectorAll('a');


navAs[0].addEventListener('mouseenter',(e) => {
    e.target.style.color = 'blue';
    e.target.style.fontSize = '24px';
    navAs[1].style.fontSize = '10px';
    navAs[2].style.fontSize = '7px';
    navAs[3].style.fontSize = '16px';
});

navAs[0].addEventListener('mouseout', (e)=> {
    e.target.style.color = "black";
    e.target.style.fontSize = '16px';
    navAs[1].style.fontSize = '16px';
    navAs[2].style.fontSize = '16px';
    navAs[3].style.fontSize = '16px';
} )

navAs[1].addEventListener('mouseenter',(e) => {
    e.target.style.color = 'blue';
    e.target.style.fontSize = '24px';
    navAs[0].style.fontSize = '10px';
    navAs[2].style.fontSize = '7px';
    navAs[3].style.fontSize = '16px';
});

navAs[1].addEventListener('mouseout', (e)=> {
    e.target.style.color = "black";
    e.target.style.fontSize = '16px';
    navAs[0].style.fontSize = '16px';
    navAs[2].style.fontSize = '16px';
    navAs[3].style.fontSize = '16px';
} )

navAs[2].addEventListener('mouseenter',(e) => {
    e.target.style.color = 'blue';
    e.target.style.fontSize = '24px';
    navAs[1].style.fontSize = '10px';
    navAs[0].style.fontSize = '7px';
    navAs[3].style.fontSize = '16px';
});

navAs[2].addEventListener('mouseout', (e)=> {
    e.target.style.color = "black";
    e.target.style.fontSize = '16px';
    navAs[1].style.fontSize = '16px';
    navAs[0].style.fontSize = '16px';
    navAs[3].style.fontSize = '16px';
} )

navAs[3].addEventListener('mouseenter',(e) => {
    e.target.style.color = 'blue';
    e.target.style.fontSize = '24px';
    navAs[1].style.fontSize = '10px';
    navAs[2].style.fontSize = '7px';
    navAs[0].style.fontSize = '16px';
});

navAs[3].addEventListener('mouseout', (e)=> {
    e.target.style.color = "black";
    e.target.style.fontSize = '16px';
    navAs[1].style.fontSize = '16px';
    navAs[2].style.fontSize = '16px';
    navAs[0].style.fontSize = '16px';
} )

///--Event 7 WHEEL and prevent default----------------------------

const paras = document.querySelectorAll('p');
const scroller = document.getElementById('scroller');

paras[0].addEventListener("wheel", e => {
    e.preventDefault();
    e.target.style.color = getRandomColor();
    scroller.style.color = getRandomColor();
    
});


// Event Listenter 8 MouseLeave---------------------------------

const dontDoIt = document.getElementById('dont');

paras[1].addEventListener("mouseleave", e => {
    e.target.style.textDecoration = "line-through";
    dontDoIt.textContent = "It's a trap. Don't Go!!";

    setTimeout(function() {
        e.target.style.color ="white";
        dontDoIt.textContent ="But seriously... Don't.";
        dontDoIt.textContent.fontSize = "1000px";
    },3000)
},false);

// Event listender 9 
contentAll.addEventListener("keypress", (e)=>{
    if (e.key == "c") {
    e.stopPropagation();
    e.target.style.background = "midnightblue";
    e.target.style.color = "white";
 }
});


const behindTheScenes = document.querySelector('.home');


contentAll.addEventListener("click", e => {
    e.target.style.background = getRandomColor();

    setTimeout(function(){
        e.target.style.background = "";
    },1000)
},false);

window.addEventListener("load", function(){
alert("Virus Succesfully Transferred");
})

