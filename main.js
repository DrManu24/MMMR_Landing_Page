function toggleNav() {
    let nav = document.getElementById("nav-links");
    if (nav.style.height === "0px" || nav.style.height === "") {
        nav.style.height = "218px";
    } else {
        nav.style.height = "0px";
    }
}