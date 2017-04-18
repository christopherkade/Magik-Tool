const express = require('express');
const router = express.Router();

let Themeparks = require("themeparks");

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/disneyland-paris', (req, res) => {
  let allRides = [];
  const disneylandParis = new Themeparks.Parks.DisneylandParisMagicKingdom();

  // access wait times by Promise
  disneylandParis.GetWaitTimes().then(function(rides) {
    // Get wait times for Paris rides
    for (let i = 0, ride; ride = rides[i++];) {
      allRides.push(ride);
    }
    if (allRides !== null) {
      res.status(200).json(allRides);
    }
  }, console.error(error => {
    res.status(500).send(error)
  }));
});

module.exports = router;
