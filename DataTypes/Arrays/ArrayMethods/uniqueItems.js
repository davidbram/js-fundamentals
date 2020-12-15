function unique(arr) {
    let uniqueArr = [];
    for(let i of arr) {
        if(!uniqueArr.includes(i)) {
            uniqueArr.push(i);
        }
    }
    return uniqueArr
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(strings) ); // Hare, Krishna, :-O