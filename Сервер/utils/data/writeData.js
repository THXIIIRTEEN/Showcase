const fs = require("fs").promises;

const writeData = async (url, data) => {
  const json = JSON.stringify(data);
  await fs.writeFile(url, json);
};

module.exports = writeData;