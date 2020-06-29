//Smooth Scrolling
$(".shortcut-btn").on("click", function(event) {
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
    url =
      "https://public.tableau.com/profile/afraz.ahmad#!/vizhome/DroneWars/Overview";

  var viz = new tableau.Viz(containerDiv, url);
}

// Subtitle buttons on drone article
addEventListener("scroll", function hideShortcuts() {
  let subBtns = document.querySelector(".subtitle-btns");

  // Getting the position in viewport
  subBtns2 = subBtns.getBoundingClientRect();

  if (subBtns2.top === 0) {
    return console.log("hello");
    subBtns.classList.add("subtitle-btns-hidden");
  } else {
    subBtns.classList.remove("subtitle-btns-hidden");
  }
});
