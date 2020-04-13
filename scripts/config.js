export const DND5E = {};

DND5E.proficiencyLevels = {
    0: "Not Proficient",
    0.5: "Jack of all Trades",
    1: "Proficient",
    2: "Expertise"
};

DND5E.conditions = [
    "Blinded",
    "Charmed",
    "Deafened",
    "Frightened",
    "Grappled",
    "Incapacitated",
    "Invisible",
    "Paralyzed",
    "Petrified",
    "Poisoned",
    "Prone",
    "Restrained",
    "Stunned",
    "Unconscious",
    "Exhaustion",
    "Diseased"
];

DND5E.languages = [
    "Common",
    "Aarakocra",
    "Abyssal",
    "Aquan",
    "Auran",
    "Celestial",
    "Deep Speech",
    "Draconic",
    "Druidic",
    "Dwarvish",
    "Elvish",
    "Giant",
    "Gith",
    "Gnomish",
    "Goblin",
    "Gnoll",
    "Halfling",
    "Ignan",
    "Infernal",
    "Orc",
    "Primordial",
    "Sylvan",
    "Terran",
    "Thieves' Cant",
    "Undercommon"
];

DND5E.characterLevelXP = [0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000];

DND5E.crXP = [10, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000, 20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000];

DND5E.characterFlags = {
    "weaponCriticalThreashold": {
        name: "Weapon Critical Threshold",
        hint: "Allow for expanded critical range; for example Improved or Superior Critical",
        section: "Feats",
        type: Number,
        placeholder: 20
    }
};


