const inventory = [
    { type: "machine", value: 5000, isPresent: true },
    { type: "machine", value: 650, isPresent: true },
    { type: "chairs", value: 10, isPresent: false },
    { type: "furniture", value: 2400, isPresent: false },
    { type: "furniture", value: 1200, isPresent: true },
    { type: "machine", value: 77, isPresent: true }
  ];
  
  let total = inventory.filter(item => item.isPresent).reduce((accumulator, item) => {
      return accumulator + item.value;
  }, 0);
  
  console.log(total);
  


