function checkSpam(str) {
    str = str.toLowerCase();
    return str.includes("xxx") || str.includes("get free money")
}


// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false