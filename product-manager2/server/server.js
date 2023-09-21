const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.use(cors());

require("./config/mongoose.config");

const AllMyProductRoutes = require("./routes/products.routes");
AllMyProductRoutes(app);



app.listen( port, () => console.log(`Listening on port: ${port}`) );