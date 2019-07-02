const express = require('express');

const app = express();

const axios = require('axios');

const cors = require('cors');

const yelp = require('yelp-fusion');

const client = yelp.client('e9c0h_ProzTzLLvzGUKgtExE14Z6v8MSsiTPsRzn-CpTE8fuB5G0BHutoLUlfsu8sLkIxS-wvdFz-CIDeRqTSWuEMauCGD2ZeipcRK-EPsOE_oV3tTg0OOdqD2UXXXYx');

app.use(cors()) 

  
app.get('/' , (req , res,next) => {
    const latitude = req.query.lat;
    const longitude = req.query.lng;

    client.search({
        term: "restaurants",
        latitude: latitude,
        longitude: longitude

      }).then(response => {
        res.status(200).json(JSON.parse(response.body));
      }).catch(e => {
        console.log(e);
      });
});


app.listen(8000 , () => {
    console.log('App is working');
})