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
  breifcase: "../../img/icon/breifcase.png",
  century: "../../img/icon/century.png",
  greatsword: "../../img/icon/greatsword.png"
},
rarity = {
  limited: "#3B9C9C",
  unique: "neonpurple",
  epic: "#E42217"
}

window.onload = Wpns()

async function Wpns() {
  await fetch("../../bzb.json").then(res => res.json()).then(json => data = json)
  
  displayWeapon()
}

function displayWeapon() {
  let listed = data.weapon.sort((a,b) => a.name.localeCompare(b.name)), index = document.getElementById("index")

  listed.forEach(i => {
    let pasif = "", tag = "", skill = "", elem = "", summon = "", ammo = "", subType = ""
    if(i.element !== undefined) elem = `<br>Art &nbsp; : ${i.element.charAt(0).toUpperCase() + i.element.slice(1)}`
    if(i.ammo !== undefined) ammo = `<br>Ammo &nbsp;: ${i.ammo}`
    if(i.subType !== undefined) subType = ` - ${i.subType.charAt(0).toUpperCase() + i.subType.slice(1)}`
    i.tag.forEach(t => tag += `, ${t}`)
    i.pasif.forEach(j => {
      pasif += `<br><br><font color="yellow">[${j.name.charAt(0).toUpperCase() + j.name.slice(1)}]</font> - <font color="orange">${j.type.charAt(0).toUpperCase() + j.type.slice(1)}</font><br>${j.effect}`
    })
    i.skill.forEach(s => {
      let cd = "", duration = ""
      if(s.cd) cd = `, <font color="orange">Cooldown ${s.cd}s</font>`
      if(s.duration) duration = `, <font color="lime">Durasi ${s.duration}s</font>`
      skill += `<br><br><font color="yellow">[${s.skill}]</font><br>Stamina ${s.stamina}${duration}${cd}<br>${s.in}`
    })
    if(i.summon !== undefined) {
      summon += "<p class='code'>Summon:"
      i.summon.forEach(h => {
        summon += `<br><br>${h.name.charAt(0).toUpperCase() + h.name.slice(1)}<br>Atk &nbsp;: ${h.atk} Damage<br>HP &nbsp; : ${h.hp} HP<br>Sifat:<br>[${h.trait}]`
      })
      summon += "</p>"
    }

    index.innerHTML += `<div class="list code" onclick="classList.toggle('open')"><div class="cra"><img class="icon" src="${weapon[i.type]}"><b>${i.name.charAt(0).toUpperCase() + i.name.slice(1)}</b></div><br><p class="code">Atk &nbsp; : <font color="lightsalmon" style="font-weight:bold">${i.atk}</font> Damage<br>Type &nbsp;: ${i.type.charAt(0).toUpperCase() + i.type.slice(1)}${subType}${elem}${ammo}<br>Rarity: <font color="${rarity[i.rarity.toLowerCase()]}">${i.rarity.charAt(0).toUpperCase() + i.rarity.slice(1)}</font><br>Tag &nbsp; : ${tag.replace(", ", "")}</p><p class="code">Sifat :<br>${i.trait}</p><p class="code">Pasif :${pasif}</p><p class="code">Skill :${skill}</p>${summon.replace(/\n/gi, "<br>")}<br>#${i.wp}</div>`
  })
}