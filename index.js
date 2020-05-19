/*
This script is intended to simulate a 6 slot slot-machine & the win odds.
This will allow adjusting of the occurance of specific symbols so the 
win/payout rate can be tweaked.
*/

const symbols = {
    mainPic: 'mainpic',
    secondaryPicOne: 'secondarypic1',
    secondaryPicTwo: 'secondarypic2',
    altPicOne: 'altpic1',
    altPicTwo: 'altpic2',
    altPicThree: 'altpic3',
    ace: 'ace',
    king: 'king',
    queen: 'queen',
    jack: 'jack',
    ten: 'ten'
};

let reels = {
    reelOne: [],
    reelTwo: [],
    reelThree: [],
    reelFour: [],
    reelFive: [],
    reelSix: []
};

let winCount = 0;
let totalPulls = 0;

const populateReels = () => {
    //populate each reel
    for (symbol in symbols) {
        switch(symbol) {
            case 'mainPic':
                reels.reelOne.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelSix.push(symbol);
            break;
            case 'secondaryPicOne':
                reels.reelOne.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelSix.push(symbol);
            break;
            case 'secondaryPicTwo':
                reels.reelOne.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelSix.push(symbol);
            break;
            case 'altPicOne':
                reels.reelOne.push(symbol);
                reels.reelOne.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelSix.push(symbol);
                reels.reelSix.push(symbol);
            break;
            case 'altPicTwo':
                reels.reelOne.push(symbol);
                reels.reelOne.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelSix.push(symbol);
                reels.reelSix.push(symbol);
            break;
            case 'altPicThree':
                reels.reelOne.push(symbol);
                reels.reelOne.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelSix.push(symbol);
                reels.reelSix.push(symbol);
            break;
            case 'ace':
                reels.reelOne.push(symbol);
                reels.reelOne.push(symbol);
                reels.reelOne.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelSix.push(symbol);
                reels.reelSix.push(symbol);
                reels.reelSix.push(symbol);
            break;
            case 'king':
                reels.reelOne.push(symbol);
                reels.reelOne.push(symbol);
                reels.reelOne.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelSix.push(symbol);
                reels.reelSix.push(symbol);
                reels.reelSix.push(symbol);
            break;
            case 'queen':
                reels.reelOne.push(symbol);
                reels.reelOne.push(symbol);
                reels.reelOne.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelSix.push(symbol);
                reels.reelSix.push(symbol);
                reels.reelSix.push(symbol);
            break;
            case 'jack':
                reels.reelOne.push(symbol);
                reels.reelOne.push(symbol);
                reels.reelOne.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelSix.push(symbol);
                reels.reelSix.push(symbol);
                reels.reelSix.push(symbol);
            break;
            case 'ten':
                reels.reelOne.push(symbol);
                reels.reelOne.push(symbol);
                reels.reelOne.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelSix.push(symbol);
                reels.reelSix.push(symbol);
                reels.reelSix.push(symbol);
            break;
        }
    }
}

populateReels();

const pullSlotMachine = () => {
    let rolledCombination = [];
    totalPulls += 1;
    // select a random position from each array
    for (const [key, value] of Object.entries(reels)) {
        rolledCombination.push(value[Math.floor(Math.random() * value.length)]);
    }

    checkForWin(rolledCombination);
};

const checkForWin = (combo) => {
    if (combo[0] === combo[1] && 
        combo[0] === combo[2] && 
        combo[0] === combo[3] &&
        combo[0] === combo[4] &&
        combo[0] === combo[5]) {
            winCount += 1;
        } else if (
            combo[0] === combo[1] && 
            combo[0] === combo[2] && 
            combo[0] === combo[3] &&
            combo[0] === combo[4]) {
            winCount += 1;
        } else if (
            combo[0] === combo[1] && 
            combo[0] === combo[2] && 
            combo[0] === combo[3]) {
            winCount += 1;
        } else if (
            combo[0] === combo[1] && 
            combo[0] === combo[2]) {
                winCount += 1;
        }
};

for (let i = 0; i < 10000; i++) {
    pullSlotMachine();
} 

console.log(`Total # wins: ${winCount}`);
console.log(`Total # pulls: ${totalPulls}`);
console.log(`Win %: ${winCount / totalPulls * 100}%`);


