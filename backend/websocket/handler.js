'use strict';
const bdd = require('./src/database');
const socket = require('./src/websocketclient');

const PLAYERS_TABLE = 'cardgames-players';
const GAMES_TABLE   = 'cardgames-games';
const successfullResponse={
  statusCode: 200,
  body: "everything is alright"
};

module.exports.onConnect = (event, context, callback) => {
    bdd.addConnection(event.requestContext.connectionId)
        .then(()=>{
           callback(null, successfullResponse);
        })
        .catch(err=>{
                console.log(err);
                callback(null, JSON.stringify(err));
        });
};

module.exports.onDisconnect = (event, context, callback) => {
  bdd.deleteConnection(event.requestContext.connectionId)
    .then(()=>{
      callback(null, successfullResponse);
    })
    .catch(err=>{
      console.log(err);
      callback(null, JSON.stringify(err));
    });
};

module.exports.defaultHandler = (event, context, callback) => {
  console.log('defaultHandler was called'),
  console.log(event); 
  callback(null, {
    statusCode: 200,
    body: 'defaultHandler'
  });
};

module.exports.setNickname = (event, context, callback) => {
    console.log(event.body);
    const body = JSON.parse(event.body);
    let data= JSON.parse(body.data);
    bdd.rename(event.requestContext.connectionId, data.username, data.emoji)
            .then(()=> {
                    callback(null, successfullResponse);
            })
            .catch(err=>{
                    console.log(err);
                    callback(null, JSON.stringify(err));
            });
};

module.exports.getGames = (event, context, callback) => {
    bdd.getGamesByTime().then(async (result) => {
        console.log(result);
        await socket.send(event, event.requestContext.connectionId,
                    {action:'games',
                     data: result.Items});
        callback(null, successfullResponse);
    }).catch(err=>{
        console.log(err);
        callback(null, JSON.stringify(err));
    });
};

module.exports.createGame = (event, context, callback) => {
    console.log(event.body);
    const body = JSON.parse(event.body);
    let data= JSON.parse(body.data);
  bdd.createGame(event.requestContext.connectionId, data.name, data.nbrPlayer)
        .then( async (gameInfo)=>{
            await bdd.updatePlayerGame(event.requestContext.connectionId, gameInfo.gameId, 0);
      await socket.send(event, event.requestContext.connectionId,
                   {action:'myid',
                    data: event.requestContext.connectionId});
            await socket.sendToAllConnected(event,
                                           {action: 'game',
                                            data : gameInfo});
            callback(null, successfullResponse);
        })
        .catch(err=>{
                console.log(err);
                callback(null, JSON.stringify(err));
        });
};

module.exports.joinGame = (event, context, callback) => {
  console.log(event.body);
    const body = JSON.parse(event.body);
    let data= JSON.parse(body.data);
  bdd.updatePlayerGame(event.requestContext.connectionId, data.gameId, 0)
    .then( async() =>{
      await socket.send(event, event.requestContext.connectionId,
                   {action:'info',
                    data: {myid: event.requestContext.connectionId,
               game: await bdd.getGameById(data.gameId),
               players: (await bdd.getPlayerBydGameId(data.gameId)).Items
           }});
      await socket.sendToAllGameConnected(event, data.gameId,
           {action: 'joingame',
          data : await bdd.getPlayerBydId(event.requestContext.connectionId)});
      callback(null, successfullResponse);
    })
    .catch(err=>{
      console.log(err);
      callback(null, JSON.stringify(err));
    });
};

module.exports.startGame = (event, context, callback) => {
  callback(null, successfullResponse);
};

module.exports.drawCard = (event, context, callback) => {
  callback(null, successfullResponse);
  console.log(event.body);
    const body = JSON.parse(event.body);
    let data= JSON.parse(body.data);
  bdd.updatePlayerGame(event.requestContext.connectionId, data.gameId, data.nbrCards)
    .then( async() =>{
      console.log("sendToAllGameConnected");
      await socket.sendToAllGameConnected(event, data.gameId,
           {action: 'drawCard',
          data : {playerId: event.requestContext.connectionId,
              nbrCards: data.nbrCards,
              cardFrom: data.cardFrom,
              cardIndex: data.cardIndex
           }});
      console.log("getGameById");
      var gameInfo = await bdd.getGameById(data.gameId);
      if(data.cardfrom==="deck"){
        gameInfo.body.deck.splice(data.cardIndex, 1)
      }else{
        gameInfo.body.pickaxe.splice(data.cardIndex, 1)
      }
      console.log("updateGameData");
      await bdd.updateGameData(data.gameId, gameInfo.body);
      callback(null, successfullResponse);
      console.log("end drawCard");
    })
    .catch(err=>{
      console.log(err);
      callback(null, JSON.stringify(err));
    });
};

module.exports.playCard = (event, context, callback) => {
  console.log(event.body);
    const body = JSON.parse(event.body);
    let data= JSON.parse(body.data);
  bdd.updatePlayerGame(event.requestContext.connectionId, data.gameId, data.nbrCards)
    .then( async() =>{
      console.log("sendToAllGameConnected");
      await socket.sendToAllGameConnected(event, data.gameId,
           {action: 'playCard',
          data : {playerId: event.requestContext.connectionId,
              nbrCards: data.nbrCards,
              cardFrom: data.cardFrom,
              cardIndex: data.cardIndex,
              card: data.card
          }});
      console.log("getGameById");    
      var gameInfo = await bdd.getGameById(data.gameId);
      if(data.cardfrom==="deck"){
        gameInfo.body.deck.splice(data.cardIndex, 1)
      }
      gameInfo.body.pickaxe.push(data.card);
      console.log("updateGameData");
      await bdd.updateGameData(data.gameId, gameInfo.body);
      callback(null, successfullResponse);
      console.log("end playCard");
    })
    .catch(err=>{
      console.log(err);
      callback(null, JSON.stringify(err));
    });
};








