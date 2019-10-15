const AWS = require('aws-sdk');
let dynamo = new AWS.DynamoDB.DocumentClient();
const models = require('./models');

const PLAYERS_TABLE = 'cardgames-players';
const GAMES_TABLE   = 'cardgames-games';

module.exports.addConnection = (connectionId) =>{
	const params = {
		TableName: PLAYERS_TABLE,
		Item: {
			connectionId: connectionId,
            gameId: 'none',
			joinedAt : Date.now()
		}
	};
	return dynamo.put(params).promise();
};

module.exports.deleteConnection = connectionId =>{
	const params = {
		TableName: PLAYERS_TABLE,
		Key: {
			connectionId: connectionId
		}
	};
	return dynamo.delete(params).promise();
};

module.exports.getGamesByTime = () =>{
	return dynamo
            .scan({
                TableName: GAMES_TABLE
            })
            .promise();
};

module.exports.rename = (connectionId, username, emoji) =>{
	return dynamo
			.update({
			  TableName: PLAYERS_TABLE,
			  Key: { connectionId: connectionId },
			  UpdateExpression: "set username = :username, emoji= :emoji",
			  ExpressionAttributeValues: {
				":username":  username,
				":emoji": emoji
			  }
			})
			.promise();
};

module.exports.createGame = async (authorId, name, nbrPlayer) => {
	const params = {
		TableName: GAMES_TABLE,
		Item: {
			gameId : generateHash(),
			authorId: authorId,
			gamename: name,
			maxPlayers: nbrPlayer,
			body: models.initGameData(),
			createdAt: Date.now()
		}
	};
	await dynamo.put(params).promise();
	return params.Item;
};

module.exports.updatePlayerGame = (connectionId, gameId, nbrCards) =>{
	return dynamo
			.update({
			  TableName: PLAYERS_TABLE,
			  Key: { connectionId: connectionId },
			  ExpressionAttributeNames: { "#gameId": "gameId", "#nbrCards": "nbrCards"},
			  UpdateExpression: "set #gameId = :gameId, #nbrCards = :nbrCards",
			  ExpressionAttributeValues: {
				":gameId":  gameId,
				":nbrCards": nbrCards
			  }
			})
			.promise();
};

module.exports.getPlayerBydId = async (connectionId) =>{
	let result= await dynamo
			.query({
			  TableName: PLAYERS_TABLE,
			  KeyConditionExpression: "connectionId = :connectionId",
			  ExpressionAttributeValues: {
				":connectionId": connectionId
			  }
			})
			.promise();
	return result.Items[0];
};

module.exports.updateGameData = (gameId, data) =>{
	return dynamo
			.update({
			  TableName: GAMES_TABLE,
			  Key: { gameId: gameId },
			  ExpressionAttributeNames: { "#body": "body"},
			  UpdateExpression: "set #body = :body",
			  ExpressionAttributeValues: {
				":body":  data,
			  }
			})
			.promise();
};

module.exports.getConnectionIds = () => {
	const params = {
		TableName : PLAYERS_TABLE,
		ProjectionExpression: 'connectionId'
	};
	return dynamo.scan(params).promise();
};

module.exports.getGameById = async (gameId) => {
	let result = await dynamo
						.query({
						  TableName: GAMES_TABLE,
						  KeyConditionExpression: "gameId = :gameId",
						  ExpressionAttributeValues: {
							":gameId": gameId
						  }
						})
						.promise();
	let game= result.Items[0];
	return game;
};

module.exports.getPlayerBydGameId = (gameId) =>{
	 return dynamo
			.query({
			  TableName: PLAYERS_TABLE,
			  IndexName: "gameIdGSI",
			  KeyConditionExpression: "gameId = :gameId",
			  ExpressionAttributeValues: {
				":gameId": gameId
			  }
			})
			.promise();
};


const generateHash = () =>{
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};