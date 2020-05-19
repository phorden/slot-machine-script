/*
This script is intended to simulate a 6 row/6slot slot-machine & the win odds.
This will allow adjusting of the occurance of specific symbols so the 
win/payout rate can be tweaked.
*/
const symbols = [
    {name: 'mainpic', value: 50, match: ['mainpic', 'wild']},
    {name: 'secondarypic1', value: 30, match: ['secondaryPic1', 'wild']},
    {name: 'secondarypic2', value: 30, match: ['secondaryPic2', 'wild']},
    {name: 'altpic1', value: 25, match: ['altpic1', 'wild']},
    {name: 'altpic2', value: 25, match: ['altpic2', 'wild']},
    {name: 'altpic3', value: 25, match: ['altpic3', 'wild']},
    {name: 'ace', value: 15, match: ['ace', 'wild']},
    {name: 'king', value: 15, match: ['king', 'wild']},
    {name: 'queen', value: 10, match: ['queen', 'wild']},
    {name: 'jack', value: 10, match: ['jack', 'wild']},
    {name: 'ten', value: 10, match: ['ten', 'wild']},
    {name: 'wild', value: 2, match: ['wild']}
];

let reels = {
    reelOne: [],
    reelTwo: [],
    reelThree: [],
    reelFour: [],
    reelFive: []
};

let winCount = 0;
let totalPulls = 0;

const populateReels = () => {
    //populate each reel
    symbols.forEach((symbol) => {
        switch(symbol.name) {
            case 'mainPic':
                reels.reelOne.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFive.push(symbol);
            break;
            case 'secondarypic1':
                reels.reelOne.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFive.push(symbol);
            break;
            case 'secondarypic2':
                reels.reelOne.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFive.push(symbol);
            break;
            case 'altpic1':
                reels.reelOne.push(symbol);
                reels.reelOne.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFive.push(symbol);
            break;
            case 'altpic2':
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
            break;
            case 'altpic3':
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
            break;
            case 'ace':
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
            break;
            case 'king':
                reels.reelOne.push(symbol);
                reels.reelOne.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelFive.push(symbol);
            break;
            case 'queen':
                reels.reelOne.push(symbol);
                reels.reelOne.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelFive.push(symbol);
            break;
            case 'jack':
                reels.reelOne.push(symbol);
                reels.reelOne.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelFive.push(symbol);
            break;
            case 'ten':
                reels.reelOne.push(symbol);
                reels.reelOne.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFive.push(symbol);
                reels.reelFive.push(symbol);
            break;
            case 'wild':
                reels.reelOne.push(symbol);
                reels.reelTwo.push(symbol);
                reels.reelThree.push(symbol);
                reels.reelFour.push(symbol);
                reels.reelFive.push(symbol);
        }
    })
}

populateReels();

const pullSlotMachine = () => {
    let rows = {
        rowOne: [],
        rowTwo: [],
        rowThree: []
    };

    totalPulls += 1;
    // select a random position from each array
    for (const [key, value] of Object.entries(reels)) {
        rows.rowOne.push(value[Math.floor(Math.random() * value.length)]);
        rows.rowTwo.push(value[Math.floor(Math.random() * value.length)]);
        rows.rowThree.push(value[Math.floor(Math.random() * value.length)]);
    }

    checkForWin(rows);
};

const checkForWin = (rows) => {
    // need to go through & check (starting at position 1) if the current
    // symbol matches the previous symbol
    for (let [key, row] of Object.entries(rows)) {
        let matchNumber = 0;
        for (let i = 1; i < row.length; i++) {
            for (let j = 0; j < row[i].match.length; j++) {
                if (row[i].match[j] !== row[i - 1].name) {
                    continue;
                } else {
                    matchNumber += 1;
                    break;
                }
            }
        }

        if (matchNumber === 5) {
            winCount += 1;
            console.log("5 match");
        } else if (matchNumber === 4) {
            winCount += 1;
            console.log("4 match");
        } else if (matchNumber === 3) {
            winCount += 1;
            console.log("3 match");
        }
    }
};

for (let i = 0; i < 100000; i++) {
    pullSlotMachine();
} 

console.log(`Total # wins: ${winCount}`);
console.log(`Total # pulls: ${totalPulls}`);
console.log(`Win %: ${winCount / totalPulls * 100}%`);


