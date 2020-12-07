let mac = "EC:B0:8T:E4";
const mapper = {
  E: 0,
  T: 0
}

function swap(mac, mapper) { 
    return mac.split("").map(m => mapper.hasOwnProperty(m) ? mapper[m] : m).join("");
}

console.log(swap(mac, mapper));