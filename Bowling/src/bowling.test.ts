// bowling.test.ts
import { BowlingGame } from './bowling';

describe('Bowling Game', () => {

    it('should return a score of 300 for a perfect game (12 strikes)', () => {
        const game = new BowlingGame();
        rollMany(game, 12, 10);  // 12 rolls, all strikes
        expect(game.score()).toBe(300);
    });

    it('should return a score of 90 for a game of all 9 and misses', () => {
        const game = new BowlingGame();
        rollMany(game, 10, 9);  // 10 frames, each roll knocks down 9 pins
        rollMany(game, 10, 0);  // 10 misses
        expect(game.score()).toBe(90);
    });

    it('should return a score of 150 for a game of all spares with 5 pins and a final bonus roll of 5', () => {
        const game = new BowlingGame();
        rollMany(game, 21, 5);  // 10 frames, all spares, and a bonus roll of 5
        expect(game.score()).toBe(150);
    });

});

// Utility function to roll multiple times
function rollMany(game: BowlingGame, rolls: number, pins: number) {
    for (let i = 0; i < rolls; i++) {
        game.roll(pins);
    }
}
