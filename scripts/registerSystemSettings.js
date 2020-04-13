export const registerSystemSettings = function () {

    // setting for diagonal movement
    game.settings.register("magnesium", "diagonalMovement", {
        name: "Diagonal Movement Rule",
        hint: "Configure which diagonal movement rule should be used for games within this system.",
        scope: "world",
        config: true,
        default: "555",
        type: String,
        choices: {
            "555": "Player's Handbook (5/5/5)",
            "5105": "Dungeon Master's Guide (5/10/5)"
        },
        onChange: rule => canvas.grid.diagonalRule = rule
    });

    // setting for disabling xp bars
    game.settings.register("magnesium", "milestoneLeveling", {
        name: "Milestone Leveling",
        hint: "Removes experience bars from character sheets in favor of milestone leveling.",
        scope: "world",
        config: true,
        default: true,
        type: Boolean
    });

    // setting for maximizing critical damage die
    game.settings.register("magnesium", "maximizeCriticalDice", {
        name: "Maximize Critcal Dice",
        hint: "All critical dice rolled are automatically set to their maximum value. (NOT YET IMPLEMENTED)",
        scope: "world",
        config: true,
        default: true,
        type: Boolean
    });

    // setting for disabling users from token mouse movement, restricting to keyboard movement only
    game.settings.register("magnesium", "disableMouseMovement", {
        name: "Disable Mouse Movement",
        hint: "Restricts token movement for players to Arrow Key navigation. (NOT YET IMPLEMENTED)",
        scope: "world",
        config: true,
        default: false,
        type: Boolean
    });

    // setting specifying if the dexterity value should be used as a decimal place tie breaker
    game.settings.register("magnesium", "initiativeTiebreaker", {
        name: "Initiative Dexterity Tiebreaker",
        hint: "Append the Dexterity ability score to break ties in Initiative",
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
        onChange: tiebreakerEnabled => setInitiativeTiebreaker(tiebreakerEnabled)
    });

    // enables or disables the tiebreaker decimal places
    function setInitiativeTiebreaker(tiebreakerEnabled) {
        CONFIG.initiative.tiebreaker = tiebreakerEnabled;
        CONFIG.initiative.decimals = tiebreakerEnabled ? 2 : 0;

        if (ui.combat && ui.combat._rendered) {
            ui.combat.render();
        }
    };

    game.settings.register("magnesium", "showStandardActions", {
        name: "Show Standard Actions",
        hint: "Display standard actions in player character sheets (NOT YET IMPLEMENTED)",
        scope: "world",
        config: true,
        default: true,
        type: Boolean
    });

    // setting specifies if coins have weight that count towards encumberance
    game.settings.register("magnesium", "currencyWeight", {
        name: "Apply Currency Weight",
        hint: "Carried currency affects character encumberance following the rules on PGB pg. 143.",
        scope: "world",
        config: true,
        default: false,
        type: Boolean
    });
};