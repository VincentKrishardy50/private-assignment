import { archer, barbarian, bard, gunner, healer, inventor, lancer, monk, necromancer, summoner, warrior, wizard } from '../assets/images/party'


export const character =[
    {
      "class": "archer",
      "attack": 8,
      "defense": 4,
      "agility": 9,
      "accuracy": 10,
      "utility": 7,
      'image': archer
    },
    {
      "class": "barbarian",
      "attack": 10,
      "defense": 6,
      "agility": 6,
      "accuracy": 7,
      "utility": 5,
      'image': barbarian
    },
    {
      "class": "bard",
      "attack": 5,
      "defense": 5,
      "agility": 7,
      "accuracy": 8,
      "utility": 8,
      'image': bard
    },
    {
      "class": "gunner",
      "attack": 9,
      "defense": 5,
      "agility": 7,
      "accuracy": 9,
      "utility": 6,
      'image': gunner
    },
    {
      "class": "healer",
      "attack": 3,
      "defense": 7,
      "agility": 6,
      "accuracy": 8,
      "utility": 9,
      'image': healer
    },
    {
      "class": "inventor",
      "attack": 6,
      "defense": 6,
      "agility": 7,
      "accuracy": 7,
      "utility": 7,
      'image': inventor
    },
    {
      "class": "lancer",
      "attack": 9,
      "defense": 8,
      "agility": 6,
      "accuracy": 7,
      "utility": 6,
      'image': lancer
    },
    {
      "class": "monk",
      "attack": 7,
      "defense": 8,
      "agility": 9,
      "accuracy": 8,
      "utility": 7,
      'image': monk
    },
    {
      "class": "necromancer",
      "attack": 8,
      "defense": 4,
      "agility": 6,
      "accuracy": 8,
      "utility": 8,
      'image': necromancer
    },
    {
      "class": "summoner",
      "attack": 7,
      "defense": 6,
      "agility": 7,
      "accuracy": 7,
      "utility": 7,
      'image': summoner
    },
    {
      "class": "warrior",
      "attack": 9,
      "defense": 9,
      "agility": 5,
      "accuracy": 6,
      "utility": 6,
      'image': warrior
    },
    {
      "class": "wizard",
      "attack": 10,
      "defense": 5,
      "agility": 6,
      "accuracy": 9,
      "utility": 8,
      'image': wizard
    }
  ]
  

export const stage = [
    {
      "stage": "Forest of Trial",
      "minimum_stats": {
        "attack": 20,
        "defense": null,
        "agility": null,
        "accuracy": null,
        "utility": 20
      }
    },
    {
      "stage": "Caverns of Darkness",
      "minimum_stats": {
        "attack": 25,
        "defense": 22,
        "agility": null,
        "accuracy": null,
        "utility": null
      }
    },
    {
      "stage": "Volcanic Summit",
      "minimum_stats": {
        "attack": 30,
        "defense": 20,
        "agility": 20,
        "accuracy": null,
        "utility": null
      }
    },
    {
      "stage": "Abyssal Depths",
      "minimum_stats": {
        "attack": null,
        "defense": 27,
        "agility": 22,
        "accuracy": 20,
        "utility": 25
      }
    },
    {
      "stage": "Citadel of the Ancients",
      "minimum_stats": {
        "attack": 35,
        "defense": 35,
        "agility": 32,
        "accuracy": 30,
        "utility": 25
      }
    }
  ]