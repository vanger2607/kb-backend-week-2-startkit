const {parseBody,} = require("../appModules/http-utils");
async function voteRouteController(req, res) {
  if (req.method !== "POST") {
    res.statusCode = 404;
    res.end("Not Found");
    return;
  }
  try {
    const body = await parseBody(req);
    console.log(body);
    res.statusCode = 200;
    res.end("Success!");
  }
  catch (err){
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}

module.exports = voteRouteController;
