const sortHouse = answers => {
  // For now, we're all Gryffindors.
  // Replace this with your own logic to really sort things out!
  const houseObj = {
    Gryffindor: 0,
    Hufflepuff: 0,
    Ravenclaw: 0,
    Slytherin: 0
  };
  let maxHouse = '';

  answers.forEach(answer => {
    houseObj[answer]++;
  });

  for (let house in houseObj) {
    if (houseObj.hasOwnProperty(house)) {
      let maxValue = 0;

      if (houseObj[house] > maxValue) {
        maxValue = houseObj[house];
        maxHouse = house;
      }
    }
  }

  return maxHouse;
};

export default sortHouse;
