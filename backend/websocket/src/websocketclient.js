const bdd = require('./database');
const AWS = require('aws-sdk');


const send = (event, connectionId, msg) => {
	// If passed msg is object, it's parsed to JSON
    let parsed = typeof msg === 'string' ? msg : JSON.stringify(msg);
	const endpoint = event.requestContext.domainName+"/"+event.requestContext.stage;
	
	const apigwManagementApi= new AWS.ApiGatewayManagementApi({
		apiVersion:"2018-11-29",
		endpoint: endpoint
	});
	
	const params = {
		ConnectionId: connectionId,
		Data: parsed
	};
	return apigwManagementApi.postToConnection(params).promise();
};

module.exports.sendToAllConnected = (event, msg) => {
	return bdd.getConnectionIds().then(playersData => {
		return playersData.Items.map(player => {
			return send(event, player.connectionId, msg);
		});
	});
};

module.exports.sendToAllGameConnected = (event, gameId, msg) => {
	return bdd.getPlayerBydGameId(gameId).then(playersData => {
		return playersData.Items.map(player => {
			return send(event, player.connectionId, msg);
		});
	});
};

module.exports.send = send;
