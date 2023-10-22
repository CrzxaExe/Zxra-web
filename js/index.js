const navbar = document.getElementById("nav")
const zxra = navbar.querySelector("#zxra")

window.addEventListener("load", () => {
  zxra.addEventListener("click", () => {
    toggleNav()
  })
  
  document.getElementById("home").addEventListener("click", () => window.location.href="index.html")
  //document.getElementById("zxraapi").addEventListener("click", () => window.location.href="api.html")
  //document.getElementById("zxradustry").addEventListener("click", () => window.location.href="dustry.html")
  document.getElementById("zxrarpg").addEventListener("click", () => window.location.href="rpg.html")
  document.getElementById("zxrawtft").addEventListener("click", () => window.location.href="wtft.html")
})

// Functions
function toggleNav() {
  navbar.classList.toggle("open")
}