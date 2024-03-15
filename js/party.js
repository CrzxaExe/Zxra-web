let data = {}

window.onload = Party()

async function Party() {
  await fetch("../../bzb.json").then(res => res.json()).then(json => data = json)
  
  displayParty()
}

function displayParty() {
  let listed = data.party.sort((a,b) => a.name.localeCompare(b.name)), index = document.getElementById("content"), text = ""

  listed.forEach(e => {
    let use = ""
    e.use.forEach(r => use += ` [${r}]`)
    text += `<br><b>${e.name.charAt(0).toUpperCase() + e.name.slice(1).replace(/ /gi, "_")}</b><hr>${e.desc}<br><br>Format: /scriptevent cz:${e.name.replace(/ /gi, "_")}${use}<br><br>`
  })
  index.innerHTML += text
}