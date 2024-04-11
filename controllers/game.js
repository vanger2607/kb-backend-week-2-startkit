const fs = require("fs").promises;
const { config } = require("../appModules/ratings");

async function gameRouteController(res) {
  try {
    const ratingFile = await fs.readFile(config.PATH_TO_RATING_FILE);
    const data = JSON.parse(ratingFile);
    const game = data[0];
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(game));
  } catch (err) {
    res.statusCode = 500;
    console.log(config.PATH_TO_RATING_FILE);
    res.end("Internal Server Error");
  }
}

module.exports = gameRouteController;
