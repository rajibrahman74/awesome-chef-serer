const express = require("express");
const app =express();
const port =5000;
const cors = require("cors")
app.use(cors())
const chef = require("./datas/chefsData.json")


app.get('/', (req, res) => {
    res.send("Chef is running")
  })
app.get('/chef', (req, res) => {
    res.send(chef)
  })
  app.get('/chef/:id', (req, res) => {
    const id =  req.params.id;
    const chefDetails = chef.find(c => c.id == id);
    res.send(chefDetails);
  })
  
  app.listen(port, () => {
    console.log(`Chef recipe hunter server running on port ${port}`)
  })