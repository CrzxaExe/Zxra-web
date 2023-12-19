const navbar = document.getElementById("nav")
const zxra = navbar.querySelector("#zxra")
let ups = document.getElementById("updates")

let bzbProc = { ver: "3.2.4", percen: 1.9 }, bzb = {}

window.addEventListener("load", async () => {
  zxra.addEventListener("click", () => {
    toggleNav("nav")
    toggleNav("mod")
  })
  
  await fetch("bzb.json").then(res => res.json()).then(json => bzb = json)
  //console.log(bzb)
  
  // Button
  document.getElementById("home").addEventListener("click", () => window.location.href="index.html")
  document.getElementById("bzb").addEventListener("click", () => window.location.href="bzb.html")
  document.getElementById("galery").addEventListener("click", () => window.location.href="galery.html")
  document.getElementById("prosbar").textContent = `${bzbProc.percen}%`
  document.getElementById("bar").style.width = `${bzbProc.percen}%`
  document.getElementById("versionup").textContent = bzbProc.ver
  
  // Bzb Download Versions
  bzb.down.forEach(i => document.getElementById("ver").innerHTML +=`<div><c>${i.ver} | MC ${i.mc}</c><form action='${i.link}'><button type='submit'><i class='bx bxs-download'></i></button></form></div>`)
  document.getElementById("vers").addEventListener("click", () => toggleVer())
  
  // Initialize of update
  ups.innerHTML += `<b>Versi ${bzb.down[0].ver}</b><br>`
  ups.innerHTML += `<c>${bzb.down[0].info}<br><a href='${bzb.down[0].link}'>Unduh</a></c><br><br>`
  // Start to texting the update
  let lsk = Object.keys(bzb.down[0].update).sort((a, b) => a.localeCompare(b)), pkjh = 0
  lsk.forEach(l => {
    ups.innerHTML += `<b>${l.charAt(0).toUpperCase() + l.slice(1)}</b><br>`
    let khfh = bzb.down[0].update[l].sort((a, b) => a.localeCompare(b))
    khfh.forEach(n => { ups.innerHTML += `- ${n.replace(/\n/gi, "<br>&nbsp; ")}<br>`; pkjh++ })
    ups.innerHTML += "<br>"
  })
  ups.innerHTML += `<b>${pkjh} Perubahan Baru Dalam Update<b>`
  // Done
})

// Functions
function toggleNav(name) {
  document.getElementById(name).classList.toggle("open")
}
function toggleVer() {
  let vers = document.getElementById("ver")
  vers.classList.toggle("open")
  if(vers.className.includes("open")) {
    vers.querySelector("#vers").textContent = "/ Version"
  } else vers.querySelector("#vers").textContent = "- Version"
}