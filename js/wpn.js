let data = {}

window.onload = Wpns()

async function Wpns() {
  await fetch("../../bzb.json").then(res => res.json()).then(json => data = json)
  
  displayWeapon()
}

function displayWeapon() {
  let listed = data.weapon.sort((a,b) => a.name.localeCompare(b.name)), index = document.getElementById("index")

  listed.forEach(i => {
    let pasif = "", tag = "", skill = ""
    i.tag.forEach(t => tag += `,${t}`)
    i.pasif.forEach(j => {
      pasif += `<br><br>[${j.name.charAt(0).toUpperCase() + j.name.slice(1)}] - ${j.type.charAt(0).toUpperCase() + j.type.slice(1)}<br>${j.effect}`
    })
    i.skill.forEach(s => {
      skill += `<br><br>[${s.skill}], Stamina ${s.stamina}<br>${s.in}`
    })

    index.innerHTML += `<div class="list code" onclick="classList.toggle('open')"><b>${i.name.charAt(0).toUpperCase() + i.name.slice(1)}</b><br><p class="code">Atk &nbsp; : ${i.atk} Damage<br>Type &nbsp;: ${i.type.charAt(0).toUpperCase() + i.type.slice(1)}<br>Rarity: ${i.rarity.charAt(0).toUpperCase() + i.rarity.slice(1)}<br>Tag &nbsp; : ${tag.replace(",", "")}</p><p class="code">Sifat :<br>${i.trait}</p><p class="code">Pasif :${pasif}</p><p class="code">Skill :${skill}</p>Senjata ke ${i.wp}</div>`
  })
}