let mac = "EC:B0:8T:E4";
const mapper = {
  E: 0,
  T: 0
}

function swap(mac, mapper) { 
  return mac.split("").map(m => typeof(mapper[m]) === "undefined" ? m : mapper[m]).join("");
}

console.log(swap(mac, mapper));

// find out why it doesn't work