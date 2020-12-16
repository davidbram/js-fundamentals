function delay(ms) {
    let secs = ms/1000;
    return new Promise(resolve => setTimeout(resolve, ms));
}


delay(15000).then(() => console.log('15 secs done'));