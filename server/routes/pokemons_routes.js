let router = require('express').Router();
const pokemons = require('../database/database').getPokemons()
fs = require('fs');

function getStats() {
  let maxHP = 0;
  let maxAttack = 0;
  let maxDefense = 0;
  let maxSpAttack = 0;
  let maxSpDefense = 0;
  let maxSpeed = 0;

  let minHP = 10000;
  let minAttack = 10000;
  let minDefense = 10000;
  let minSpAttack = 10000;
  let minSpDefense = 10000;
  let minSpeed = 10000;

  pokemons.forEach((item, index) => {
    if (item.base.HP > maxHP) {
      maxHP = item.base.HP;
    } else if (item.base.HP < minHP) {
      minHP = item.base.HP;
    }
    if (item.base.Attack > maxAttack) {
      maxAttack = item.base.Attack;
    } else if (item.base.Attack < minAttack) {
      minAttack = item.base.Attack;
    }
    if (item.base.Defense > maxDefense) {
      maxDefense = item.base.Defense;
    } else if (item.base.Defense < minDefense) {
      minDefense = item.base.Defense;
    }
    if (item.base['Sp. Attack'] > maxSpAttack) {
      maxSpAttack = item.base['Sp. Attack'];
    } else if (item.base['Sp. Attack'] < minSpAttack) {
      minSpAttack = item.base['Sp. Attack'];
    }
    if (item.base['Sp. Defense'] > maxSpDefense) {
      maxSpDefense = item.base['Sp. Defense'];
    } else if (item.base['Sp. Defense'] < minSpDefense) {
      minSpDefense = item.base['Sp. Defense'];
    }
    if (item.base.Speed > maxSpeed) {
      maxSpeed = item.base.Speed;
    } else if (item.base.Speed < minSpeed) {
      minSpeed = item.base.Speed;
    }
  });
  return {
    "max": {
      maxHP, maxAttack, maxDefense, maxSpAttack, maxSpDefense, maxSpeed
    },
    "min": {
      minHP, minAttack, minDefense, minSpAttack, minSpDefense, minSpeed
    }
  };
}


router.get('/', function (req, res) {
  res.send({pokemons, stats: getStats()});
});

router.get('/stats', function (req, res) {
  res.send(getStats())
});

module.exports = router;