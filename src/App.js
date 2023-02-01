const path = require("path");
const express = require("express");
const geoCode = require("../utils/geoCode")
const foreCast = require("../utils/foreCast")

const pathOfPublicDir = path.join(__dirname , "../public");

const app = express();
app.use(express.static(pathOfPublicDir));
app.set('view engine' , 'ejs')

app.get("/" , (req , res) => {
  res.render("index" , {});
})

app.get("/weather", (req, res) => {


  geoCode( req.query.address, (error, data) => {
    if (error) {
      res.send({
        error: error
      })
    } else {
      foreCast(data, (error, datas) => {
        console.log("🚀 ~ file: App.js:26 ~ foreCast ~ datas", datas)
        if (error) {
          res.send({
            error: error
          })
        } else {
         res.send({
            data : datas
         })
        }
      });
    }
  });
});

app.listen(3000, () => {
  console.log(`server is running at port ${3000}`);
})