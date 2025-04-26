function toggleNav() {
    let nav = document.getElementById("nav-links");
    if (nav.style.height === "0px" || nav.style.height === "") {
        nav.style.height = nav.scrollHeight + "px";
    } else {
        nav.style.height = "0px";
    }
}
document.querySelectorAll('#nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
      let nav = document.getElementById('nav-links');
      if (nav.style.height !== "" && nav.style.height !== "auto") {
        nav.style.height = '0px';
      }
    });
  });
  

