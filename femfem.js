let results = [];
const findDuplicates = (arr) => {
    let sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
    // JS by default uses a crappy string compare.
    // (we use slice to clone the array so the
    // original array won't be modified)
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    console.log(results);
    console.log(results.length);
    return results;
  }




  let duplicatedArray = [1, 1, 4, 5];
  findDuplicates(duplicatedArray)
  
  const allEqual = arr => arr.every(v => v === arr[0]);

if (allEqual(results)) {
    console.log("sui")
}