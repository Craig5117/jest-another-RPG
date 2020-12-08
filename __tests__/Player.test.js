const Player = require('../lib/Player');

const Potion = require('../lib/Potion')

jest.mock('../lib/Potion')

test('Creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});

test("Gets player's stats as an object", () => {
    const player = new Player ('Max');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test('Gets inventory from player or returns false', () => {
    const player = new Player ('Bill');

    expect(player.getInventory()).toEqual(expect.any(Array));
    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});

test("Get's player's health value", () => {
    const player = new Player('Tom');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

test('Checks if player is alive or not', () => {
    const player = new Player('Lilly');

    expect(player.isAlive()).toBeTruthy();

    player.health = 0;

    expect(player.isAlive()).toBeFalsy();
});

test("Subtracts from player's health", () => {
    const player = new Player('Fred');
    const oldHealth = player.health;
    
    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);

    player.reduceHealth(99999);

    expect(player.health).toBe(0);
});