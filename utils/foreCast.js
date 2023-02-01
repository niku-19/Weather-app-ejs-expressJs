const request = require("postman-request");

const foreCast = ({latitude, longitude , location} , callback) => {
  const weather_URL = `http://api.weatherstack.com/current?access_key=b14b3d6026ba461cf018bacdedce9288&query=${+latitude},${+longitude}`;

  request(
    {
      url: weather_URL,
      json: true,
    },
    (error, res) => {
      if (error) {
        console.log("Unable to connect to weather service!",undefined);
      } else if (res.body.error) {
        console.log(
          "Unable to find location! please give some specified Address!"
        ,undefined);
      } else {
        callback(undefined , {
          location : res.body.location,
          current__weater : res.body.current  
        }
        );
      }
    }
  );
};

module.exports = foreCast;