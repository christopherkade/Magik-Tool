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
      // if (ride.status !== 'Closed')
      allRides.push(ride);
    }
    if (allRides !== null) {
      res.status(200).json(allRides);
    }
  }, console.error(error => {
    res.status(500).send(error)
  })).catch(function() {
    console.log('Error');
  });
});

router.get('/walt-disney-studios', (req, res) => {
  let allRides = [];
  const studios = new Themeparks.Parks.DisneylandParisWaltDisneyStudios;

  // access wait times by Promise
  studios.GetWaitTimes().then(function(rides) {
    // Get wait times for Paris rides
    for (let i = 0, ride; ride = rides[i++];) {
      allRides.push(ride);
    }
    if (allRides !== null) {
      res.status(200).json(allRides);
    }
  }, console.error(error => {
    res.status(500).send(error)
  })).catch(function() {
    console.log('Error');
  });
});

router.get('/wdw-magic-kingdom', (req, res) => {
  let allRides = [];
  const magicKingdom = new Themeparks.Parks.WaltDisneyWorldMagicKingdom;

  // access wait times by Promise
  magicKingdom.GetWaitTimes().then(function(rides) {
    // Get wait times for Paris rides
    for (let i = 0, ride; ride = rides[i++];) {
      allRides.push(ride);
    }
    if (allRides !== null) {
      res.status(200).json(allRides);
    }
  }, console.error(error => {
    res.status(500).send(error)
  })).catch(function() {
    console.log('Error');
  });
});

router.get('/epcot', (req, res) => {
  let allRides = [];
  const epcot = new Themeparks.Parks.WaltDisneyWorldEpcot;

  // access wait times by Promise
  epcot.GetWaitTimes().then(function(rides) {
    // Get wait times for Paris rides
    for (let i = 0, ride; ride = rides[i++];) {
      allRides.push(ride);
    }
    if (allRides !== null) {
      res.status(200).json(allRides);
    }
  }, console.error(error => {
    res.status(500).send(error)
  })).catch(function() {
    console.log('Error');
  });
});

router.get('/animal-kingdom', (req, res) => {
  let allRides = [];
  const animalKingdom = new Themeparks.Parks.WaltDisneyWorldAnimalKingdom;

  // access wait times by Promise
  animalKingdom.GetWaitTimes().then(function(rides) {
    // Get wait times for Paris rides
    for (let i = 0, ride; ride = rides[i++];) {
      allRides.push(ride);
    }
    if (allRides !== null) {
      res.status(200).json(allRides);
    }
  }, console.error(error => {
    res.status(500).send(error)
  })).catch(function() {
    console.log('Error');
  });
});

router.get('/hollywood-studios', (req, res) => {
  let allRides = [];
  const hollywoodStudios = new Themeparks.Parks.WaltDisneyWorldHollywoodStudios;

  // access wait times by Promise
  hollywoodStudios.GetWaitTimes().then(function(rides) {
    // Get wait times for Paris rides
    for (let i = 0, ride; ride = rides[i++];) {
      allRides.push(ride);
    }
    if (allRides !== null) {
      res.status(200).json(allRides);
    }
  }, console.error(error => {
    res.status(500).send(error)
  })).catch(function() {
    console.log('Error');
  });
});

router.get('/dr-magic-kingdom', (req, res) => {
  let allRides = [];
  const magicKingdom = new Themeparks.Parks.DisneylandResortMagicKingdom;

  // access wait times by Promise
  magicKingdom.GetWaitTimes().then(function(rides) {
    // Get wait times for Paris rides
    for (let i = 0, ride; ride = rides[i++];) {
      allRides.push(ride);
    }
    if (allRides !== null) {
      res.status(200).json(allRides);
    }
  }, console.error(error => {
    res.status(500).send(error)
  })).catch(function() {
    console.log('Error');
  });
});

router.get('/california-adventure', (req, res) => {
  let allRides = [];
  const caliAdventure = new Themeparks.Parks.DisneylandResortCaliforniaAdventure;

  // access wait times by Promise
  caliAdventure.GetWaitTimes().then(function(rides) {
    // Get wait times for Paris rides
    for (let i = 0, ride; ride = rides[i++];) {
      allRides.push(ride);
    }
    if (allRides !== null) {
      res.status(200).json(allRides);
    }
  }, console.error(error => {
    res.status(500).send(error)
  })).catch(function() {
    console.log('Error');
  });
});

router.get('/sdr-magic-kingdom', (req, res) => {
  let allRides = [];
  const caliAdventure = new Themeparks.Parks.ShanghaiDisneyResortMagicKingdom;

  // access wait times by Promise
  caliAdventure.GetWaitTimes().then(function(rides) {
    // Get wait times for Paris rides
    for (let i = 0, ride; ride = rides[i++];) {
      allRides.push(ride);
    }
    if (allRides !== null) {
      res.status(200).json(allRides);
    }
  }, console.error(error => {
    res.status(500).send(error)
  })).catch(function() {
    console.log('Error');
  });
});

router.get('/tdr-magic-kingdom', (req, res) => {
  let allRides = [];
  const caliAdventure = new Themeparks.Parks.TokyoDisneyResortMagicKingdom;

  // access wait times by Promise
  caliAdventure.GetWaitTimes().then(function(rides) {
    // Get wait times for Paris rides
    for (let i = 0, ride; ride = rides[i++];) {
      allRides.push(ride);
    }
    if (allRides !== null) {
      res.status(200).json(allRides);
    }
  }, console.error(error => {
    res.status(500).send(error)
  })).catch(function() {
    console.log('Error');
  });
});

router.get('/tdr-disney-sea', (req, res) => {
  let allRides = [];
  const caliAdventure = new Themeparks.Parks.TokyoDisneyResortDisneySea;

  // access wait times by Promise
  caliAdventure.GetWaitTimes().then(function(rides) {
    // Get wait times for Paris rides
    for (let i = 0, ride; ride = rides[i++];) {
      allRides.push(ride);
    }
    if (allRides !== null) {
      res.status(200).json(allRides);
    }
  }, console.error(error => {
    res.status(500).send(error)
  })).catch(function() {
    console.log('Error');
  });
});

router.get('/hk-disneyland', (req, res) => {
  let allRides = [];
  const caliAdventure = new Themeparks.Parks.HongKongDisneyland;

  // access wait times by Promise
  caliAdventure.GetWaitTimes().then(function(rides) {
    // Get wait times for Paris rides
    for (let i = 0, ride; ride = rides[i++];) {
      allRides.push(ride);
    }
    if (allRides !== null) {
      res.status(200).json(allRides);
    }
  }, console.error(error => {
    res.status(500).send(error)
  })).catch(function() {
    console.log('Error');
  });
});

module.exports = router;
