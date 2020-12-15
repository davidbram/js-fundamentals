let str = 'As sly as a fox, as strong as an ox';
let target = 'as'; // let's look for it
let pos = str.length;

while(~(pos = str.lastIndexOf(target, pos - 1))) {
    console.log(`Found at ${pos}`);
}