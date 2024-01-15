let data = {},
weapon = {
  slayer: "../../img/icon/slayer.png",
  gun: "../../img/icon/gun.png",
  spear: "../../img/icon/spear.png",
  reaper: "../../img/icon/reaper.png",
  staff: "../../img/icon/staff.png",
  hammer: "../../img/icon/hammer.png",
  katana: "../../img/icon/katana.png",
  artsword: "../../img/icon/artsword.png",
  breifcase: "../../img/icon/breifcase.png"
}

window.onload = Wpns()

async function Wpns() {
  await fetch("../../bzb.json").then(res => res.json()).then(json => data = json)
  
  displayWeapon()
}

function displayWeapon() {
  let listed = data.weapon.sort((a,b) => a.name.localeCompare(b.name)), index = document.getElementById("index")

  listed.forEach(i => {
    let pasif = "", tag = "", skill = "", elem = "", summon = "", ammo = ""
    if(i.element !== undefined) elem = `<br>Art &nbsp; : ${i.element.charAt(0).toUpperCase() + i.element.slice(1)}`
    if(i.ammo !== undefined) ammo = `<br>Ammo &nbsp;: ${i.ammo}`
    i.tag.forEach(t => tag += `, ${t}`)
    i.pasif.forEach(j => {
      pasif += `<br><br>[${j.name.charAt(0).toUpperCase() + j.name.slice(1)}] - ${j.type.charAt(0).toUpperCase() + j.type.slice(1)}<br>${j.effect}`
    })
    i.skill.forEach(s => {
      skill += `<br><br>[${s.skill}], Stamina ${s.stamina}<br>${s.in}`
    })
    if(i.summon !== undefined) {
      summon += "<p class='code'>Summon:"
      i.summon.forEach(h => {
        summon += `<br><br>${h.name.charAt(0).toUpperCase() + h.name.slice(1)}<br>Atk &nbsp;: ${h.atk} Damage<br>HP &nbsp; : ${h.hp} HP<br>Sifat:<br>[${h.trait}]`
      })
      summon += "</p>"
    }

    index.innerHTML += `<div class="list code" onclick="classList.toggle('open')"><div class="cra"><img class="icon" src="${weapon[i.type]}"><b>${i.name.charAt(0).toUpperCase() + i.name.slice(1)}</b></div><br><p class="code">Atk &nbsp; : ${i.atk} Damage<br>Type &nbsp;: ${i.type.charAt(0).toUpperCase() + i.type.slice(1)}${elem}${ammo}<br>Rarity: ${i.rarity.charAt(0).toUpperCase() + i.rarity.slice(1)}<br>Tag &nbsp; : ${tag.replace(", ", "")}</p><p class="code">Sifat :<br>${i.trait}</p><p class="code">Pasif :${pasif}</p><p class="code">Skill :${skill}</p>${summon.replace(/\n/gi, "<br>")}<br>#${i.wp}</div>`
  })
}