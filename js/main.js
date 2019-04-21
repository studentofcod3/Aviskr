//Smooth Scrolling
$(".shortcut-btn, #history-of-drones").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 25
      },
      900
    );
  }
});


//NOTE: for the animate method we need the jquery cdn - download the minified version

// tableau api 
function initViz() {
  var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/profile/afraz.ahmad#!/vizhome/DroneWars/Overview";

  var viz = new tableau.Viz(containerDiv, url);
}



