const fs = require('fs');

// Replace these values with your desired new description and image URI
const newDescription = "wE BELONG TO sTANDARD DEVIANTS";
const newImageUri = "ipfs://QWEQWEWSCAS1312QWDASD/";

// Iterate over all the JSON files in the current directory
let folderPath="./json/";
let files = fs.readdirSync(folderPath);
console.log("reading "+files.length);
files .forEach(file => {
  if (file.endsWith('.json')) {
    // Read the JSON file
    console.log(file);
    const data = fs.readFileSync("./json/"+file, 'utf-8');
    const jsonData = JSON.parse(data);

    // Update the description and image fields
    jsonData.description = newDescription;
    jsonData.image = `${newImageUri}${jsonData.image.slice(jsonData.image.lastIndexOf('/') + 1)}`;

    // Write the updated JSON back to the file
    fs.writeFileSync("./updatedJsons/"+file, JSON.stringify(jsonData, null, 2));
  }
});
