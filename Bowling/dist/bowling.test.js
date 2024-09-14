"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bowling_1 = require("./bowling");
describe('Bowling Game', () => {
    it('should return a score of 300 for a perfect game (12 strikes)', () => {
        const game = new bowling_1.BowlingGame();
        rollMany(game, 12, 10);
        expect(game.score()).toBe(300);
    });
    it('should return a score of 90 for a game of all 9 and misses', () => {
        const game = new bowling_1.BowlingGame();
        rollMany(game, 10, 9);
        rollMany(game, 10, 0);
        expect(game.score()).toBe(90);
    });
    it('should return a score of 150 for a game of all spares with 5 pins and a final bonus roll of 5', () => {
        const game = new bowling_1.BowlingGame();
        rollMany(game, 21, 5);
        expect(game.score()).toBe(150);
    });
});
function rollMany(game, rolls, pins) {
    for (let i = 0; i < rolls; i++) {
        game.roll(pins);
    }
}
//# sourceMappingURL=bowling.test.js.map