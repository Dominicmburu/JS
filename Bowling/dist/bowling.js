"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BowlingGame = void 0;
class BowlingGame {
    constructor() {
        this.rolls = [];
    }
    roll(pins) {
        this.rolls.push(pins);
    }
    score() {
        let score = 0;
        let frameIndex = 0;
        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(frameIndex)) {
                score += 10 + this.strikeBonus(frameIndex);
                frameIndex += 1;
            }
            else if (this.isSpare(frameIndex)) {
                score += 10 + this.spareBonus(frameIndex);
                frameIndex += 2;
            }
            else {
                score += this.sumOfPinsInFrame(frameIndex);
                frameIndex += 2;
            }
        }
        return score;
    }
    isStrike(frameIndex) {
        return this.rolls[frameIndex] === 10;
    }
    isSpare(frameIndex) {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
    }
    strikeBonus(frameIndex) {
        return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
    }
    spareBonus(frameIndex) {
        return this.rolls[frameIndex + 2];
    }
    sumOfPinsInFrame(frameIndex) {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
    }
}
exports.BowlingGame = BowlingGame;
//# sourceMappingURL=bowling.js.map