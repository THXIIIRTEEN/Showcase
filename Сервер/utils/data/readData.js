const fs = require("fs").promises;

const readData = async (url) => {
  try {
    const data = await fs.readFile(url, "utf-8");
    const json = JSON.parse(data);
    return json;
  } catch (error) {
    console.log(error);
  }
};

module.exports = readData;
