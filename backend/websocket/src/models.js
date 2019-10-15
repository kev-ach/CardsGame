const colors = ["hearts", "diamonds", "clubs", "spades"];

const initCards = () => {
    var cards =[];
    for(var i in colors){
        for(var j=2; j<=14; j++){
            cards.push({color: colors[i], value: j});
        }
    }
    cards.sort(() => Math.random() - 0.5);
    return  cards;
};

module.exports.initGameData = () => {
	return { deck: initCards(),
	         pickaxe: []
		   }
};

