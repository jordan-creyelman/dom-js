

// fonctionnalité 1 and Bis

function click()  
{  

  const footer = document.querySelector('footer');
  footer.addEventListener('click',event =>{
    console.log("clique");
    console.log(`clique:${event.detail}`);

  });

}

click();
//fonctionnalité 2

function collapse_hamburger()
{

    var headerNav = document.getElementById("navbarHeader");
    var buttonNav = document.querySelector("button.navbar-toggler");
    buttonNav.addEventListener("click", () => {
        headerNav.classList.toggle("collapse");
    });

}

collapse_hamburger();

// fonctionnalité 3

function red(){

  var red = document.getElementsByClassName("card")[0];
  var button=document.querySelector(".btn-outline-secondary");
  if(button){
    button.addEventListener("click",() => {
      red.style="color:red"
    });
  }

}
red()

//fonctionnalité 4

function green(){
  var btn=false
  var green = document.getElementsByClassName("card")[1];
  var button=green.querySelector(".btn-outline-secondary");
  button.addEventListener("click",() => {
    if (btn==false){
      btn=true
      green.style="color:green"
    }
    else{
      btn=false
      green.style="color:black"
    }
  })
  

  
}
green()

//fonctionnalité 5
function removebootstrap(){
var link = false;
var button = document.querySelector("header");

button.addEventListener("dblclick",() =>{
  if (link==false){
    link =true
    document.querySelector("link").disabled=true;
  }else
  {
    link =false
    document.querySelector("link").disabled=false;
  }
})

}

removebootstrap()
//fonctionnalité 6
function minimize() {
  var cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    var status = false;
    var btn = card.querySelector(".btn-success");
    var img = card.querySelector(".card-img-top");
    btn.addEventListener("mouseenter", () => {
      card.querySelector("p.card-text").toggleAttribute("hidden");
      if (status === false) 
      {
        img.setAttribute("style", "width:20%");
        status = true;
      }
      else if (status === true) 
      {
        img.setAttribute("style", "width:100%");
        status = false;
      }
    })
  });
}
minimize();

