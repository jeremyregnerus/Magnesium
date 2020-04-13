export const measureDistance = function (start, end, { gridSpaces = true } = {}) {
    if (!gridSpaces) return BaseGrid.prototype.measureDistance.bind(this)(start, end, { gridSpaces });

    let canvasSize = canvas.dimensions.size,
        ray = new Ray(start, end),
        x = Math.abs(Math.ceil(ray.dx / canvasSize)),
        y = Math.abs(Math.ceil(ray.dy / canvasSize));

    let diagonal = Math.min(x, y),
        straight = Math.abs(y - x);

    if (this.parent.diagonalRule === "555") {
        return (straight + diagonal) * canvas.scene.data.gridDistance;
    }
    else {
        let distance10 = Math.floor(diagonal / 2);
        let spaces = (distance10 * 2) + (diagonal - distance10) + straight;

        return spaces * canvas.dimensions.distance;
    };
};

export const registerStatusIcons = function () {
    let path = 'systems/magnesium/graphics/conditions/'

    CONFIG.statusEffects = [
        path + "blinded.svg",
        path + "charmed.svg",
        path + "deafened.svg",
        path + "frightened.svg",
        path + "grappled.svg",
        path + "incapacitated.svg",
        path + "invisible.svg",
        path + "paralyzed.svg",
        path + "petrified.svg",
        path + "poisoned.svg",
        path + "prone.svg",
        path + "restrained.svg",
        path + "stunned.svg",
        path + "unconscious.svg",
        path + "exhaustion.svg"
    ];
};