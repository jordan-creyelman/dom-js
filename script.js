

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