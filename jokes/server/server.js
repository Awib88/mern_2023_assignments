const express = require("express");
const app = express();
const port = 8000;

require("./config/mongoose.config");

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// This is where we import the jokes routes function from our joke.routes.js file
const AllMyJokeRoutes = require("./routes/joke.routes");
AllMyJokeRoutes(app);



// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );