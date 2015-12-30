var behaviors = require('behaviors');
var overseer = require('overseer');

module.exports.loop = function () {

    overseer.overseer();

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];

        behaviors.behavior[creep.memory.role](creep)
    }
}