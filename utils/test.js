const request = require("postman-request");
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=23.7957&lon=86.4304&appid=5620a2ee0b5de5ed096aa48ade4810e2`
request({
  url : URL,
  json : true,
}, (error , res) => {
  console.log(res.body);
})