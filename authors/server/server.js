const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.use(cors());

require("./config/mongoose.config");

const AllMyAuthorsRoutes = require("./routes/authors.routes");
AllMyAuthorsRoutes(app);



app.listen( port, () => console.log(`Listening on port: ${port}`) );