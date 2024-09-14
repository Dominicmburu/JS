// bowling.ts
export class BowlingGame {
    private rolls: number[] = [];
    
    // Roll a ball, recording the number of pins knocked down
    roll(pins: number): void {
        this.rolls.push(pins);
    }

    // Calculate and return the total score of the game
    score(): number {
        let score = 0;
        let frameIndex = 0;

        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(frameIndex)) { // strike
                score += 10 + this.strikeBonus(frameIndex);
                frameIndex += 1;  // A strike consumes 1 roll
            } else if (this.isSpare(frameIndex)) { // spare
                score += 10 + this.spareBonus(frameIndex);
                frameIndex += 2;  // A spare consumes 2 rolls
            } else {
                score += this.sumOfPinsInFrame(frameIndex);
                frameIndex += 2;  // A normal frame consumes 2 rolls
            }
        }

        return score;
    }

    // Check if the current roll is a strike
    private isStrike(frameIndex: number): boolean {
        return this.rolls[frameIndex] === 10;
    }

    // Check if the current frame is a spare
    private isSpare(frameIndex: number): boolean {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
    }

    // Get the bonus for a strike
    private strikeBonus(frameIndex: number): number {
        return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
    }

    // Get the bonus for a spare
    private spareBonus(frameIndex: number): number {
        return this.rolls[frameIndex + 2];
    }

    // Get the total pins knocked down in a frame
    private sumOfPinsInFrame(frameIndex: number): number {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
    }
}
