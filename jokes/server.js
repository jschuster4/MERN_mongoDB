const express = require('express')
const app = express();
const port = 8000; 
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

// make sure this line goes below this ^^
const AllRoutes = require("./server/routes/jokes.routes")
AllRoutes(app);

app.listen(port, () => console.log(`Running on port ${port}`))