function countFlavors(inputString) {
  const flavors = inputString.split(",");
  const flavorCounts = {};

  flavors.forEach(flavor => {
    flavor = flavor.trim();
    flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
  });

  console.log("Flavor Counts:", flavorCounts);
}

const userInput = prompt("Enter a list of froyo flavors separated by commas:", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");
if (userInput) {
  countFlavors(userInput);
}



