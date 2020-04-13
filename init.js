// Import Modules
import { DND5E } from "./scripts/config.js";
import { registerSystemSettings } from "./scripts/registerSystemSettings.js";
import { preloadTemplates } from "./scripts/templates.js";
import { measureDistance, registerStatusIcons } from "./scripts/canvas.js";

Hooks.once("init", async function () {
    // Change the status effect conditions
    registerStatusIcons();

    // Load the constant names
    CONFIG.DND5E = DND5E;

    // create and register the settings for the game system
    registerSystemSettings();

    // preload the html templates for sheets
    await preloadTemplates();

    Actors.unregisterSheet("core", ActorSheet);
    Items.unregisterSheet("core", ItemsSheet);


});

Hooks.on("canvasInit", function () {
    canvas.grid.diagonalRule = game.settings.get("magnesium", "diagonalMovement");
    SquareGrid.prototype.measureDistance = measureDistance;
});