function gameObject() {
  const obj = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
  return obj;
}
//returns points given a name
function numPointsScored(playerName) {
  debugger
  const playerObj = returnPlayerObject(playerName)
 
  //check if player's object is empty
  if (Object.keys(playerObj).length) {
    //grab the points
    return playerObj['points'];
  } 
  return 0;
}
//returns shoeSize
function shoeSize(playerName) {
  const playerObject = returnPlayerObject(playerName)
  //check if player's object is empty
  if (Object.keys(playerObject).length) {
    //grab the points
    return playerObject['shoe'];
  } 
  return 0;  
}

function teamColors(teamName){
  
  const safeTeamName = capitalizeEachWord(teamName)
  const awayTeam = gameObject()['away']
  const homeTeam = gameObject()['home']

  if(awayTeam['teamName'] === safeTeamName){
    return awayTeam['colors']

  }else if(homeTeam['teamName'] === safeTeamName){
    return homeTeam['colors']
  }
  return []

}
function teamNames(){
  
  const hometeam = gameObject()['home'].teamName
  const awayteam = gameObject()['away'].teamName

  return [hometeam,awayteam]
}

//that takes in an argument of a team name and returns an array of the jersey number's for that team.
//returns an empty array if team isnt found
function playerNumbers(teamName){
  const safeTeamName = capitalizeEachWord(teamName)
  const homeTeamPlayers = gameObject()['home']['players']
  const awayTeamPlayers = gameObject()['away']['players']
  
  if(gameObject()['home']['teamName'] === safeTeamName) {
    return collectShirtNumbers(homeTeamPlayers)
  }else if(gameObject()['away']['teamName'] === safeTeamName){
    return collectShirtNumbers(homeTeamPlayers)
  }
  return []

}

function collectShirtNumbers(players){
  let shirtNumber = []
  for(const player in players){
    shirtNumber.push(player['number'])
  }
  return shirtNumber
}

//that takes in an argument of a player's name and returns a object of that player's stats.
function playerStats(playerName){
  return returnPlayerObject(playerName)
}
// that will return the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps:
// First, find the player with the largest shoe size
// Then, return that player's number of rebounds
function bigShoeRebounds(){
  const homeTeamPlayerbiggestAttr = findLargestAttribute(gameObject()['home']['players'])
  const awayTeamPlayerbiggestAttr = findLargestAttribute(gameObject()['away']['players'])
  
  if(homeTeamPlayerbiggestAttr.shoe <= awayTeamPlayerbiggestAttr.shoe){
    return awayTeamPlayerbiggestAttr.rebounds
  }
  return homeTeamPlayerbiggestAttr.rebounds  

}
//returns the player obj with the largest attr size
function findLargestAttribute(players,attr='shoe'){
  
  let biggestAttr = 0
  let biggestAttrPlayer = {}
  for(const player in players){
    if(players[player][attr] > biggestAttr){
      biggestAttr = players[player][attr]
      biggestAttrPlayer = Object.assign({name: player},players[player])
    }else{
      continue
    }
    
  }
  return biggestAttrPlayer

}

//returns a player's object or an empty object if the player doesnt exist
function returnPlayerObject(playerName) {

  const awayTeamPlayers = gameObject()["home"]["players"];
  const homeTeamPlayers = gameObject()["away"]["players"];
  const safePlayerName = capitalizeEachWord(playerName);

  if (safePlayerName in awayTeamPlayers) {
    //grab all the points
    return awayTeamPlayers[safePlayerName];
  } else if (safePlayerName in homeTeamPlayers) {
    //grab all the points
    return homeTeamPlayers[safePlayerName];
  }
  return {}
}

//capitalize two words
function capitalizeEachWord(arrayOfNames) {
  return arrayOfNames.split(" ")
    .map((name) => {
      const newName = name.toLowerCase();
      return `${newName[0].toUpperCase()}${newName.slice(1)}`;
    })
    .join(" ");
}
// returns points most scored
function mostPointsScored(){
  const awayTeamPoints = calcPoints(gameObject().away.players)
  const homeTeamPoints = calcPoints(gameObject().home.players)
  return awayTeamPoints > homeTeamPoints ? awayTeamPoints : homeTeamPoints
}
//team that won
function winningTeam(){
  
  const awayTeamPoints = calcPoints(gameObject().away.players)
  const homeTeamPoints = calcPoints(gameObject().home.players)
  
  if(awayTeamPoints > homeTeamPoints){
    return `${gameObject().away.teamName} won with ${awayTeamPoints}`
  }
  else if(awayTeamPoints < homeTeamPoints){
    return `${gameObject().home.teamName} won with ${homeTeamPoints}`
  }
  return `It was a draw\n ${gameObject().home.teamName} vs ${gameObject().away.teamName}\n\n ${homeTeamPoints}  - ${awayTeamPoints}`

}

//calculates total points given a set of players
function calcPoints(players){
  const arrayPlayers = Object.values(players)
  return totalPoints = arrayPlayers.reduce((acc,currentVal) => acc + currentVal.points, 0)  
}

//returns player with the longest name
function playerWithLongestName(){
  const awayPlayersList = Object.keys(gameObject().away.players)
  const homePlayersList = Object.keys(gameObject().away.players)
  const nameLengthAway = awayPlayersList.map(name=> name.length)
  const nameLengthHome = homePlayersList.map(name=> name.length)
  const longestNameAway = Math.max(...nameLengthAway)
  const longestNameHome = Math.max(...nameLengthHome)

  return longestNameAway < longestNameHome ? homePlayersList[nameLengthHome.indexOf(longestNameHome)] : awayPlayersList[nameLengthAway.indexOf(longestNameAway)]
}

function doesLongNameStealATon(){
  const playerLongestName = playerWithLongestName()
  const combinedPlayers = Object.assign(gameObject().away.players,gameObject().home.players)
  const playerWithMostSteals = findLargestAttribute(combinedPlayers,'steals')
  console.log(`player with longest name ${playerLongestName}`)
  console.log(`player with most steals ${playerWithMostSteals.name} with ${playerWithMostSteals.steals}`)
  
  return playerWithMostSteals.name === playerLongestName ? true : false

}

