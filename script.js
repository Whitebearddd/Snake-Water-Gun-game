let user = prompt("Enter \nSNAKE \nWATER \nGUN")
let cpuI = Math.floor(Math.random() * 3);//GENERATES 1,2,3
let cpu = ["SNAKE", "WATER", "GUN"][cpuI]

const match = (cpu, user) =>{
  if (cpu == user) {
    return "Nobody"
  }

 if (cpu == "WATER" && user == "GUN") {
  return cpu
}
else if (cpu == "WATER" && user == "SNAKE") {
  return user
}
else if (cpu == "GUN" && user == "SNAKE") {
  return cpu
}
else if (cpu == "GUN" && user == "WATER") {
  return user
}
else if (cpu == "SNAKE" && user == "GUN") {
  return user
}
else if (cpu == "SNAKE" && user == "WATER") {
  return cpu
}
}
let result = match(cpu, user)

document.write(`CPU:${cpu} <br> User:${user} <br>The winner is: ${result.toUpperCase()}`)