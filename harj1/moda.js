module.exports = function(min, max) {
    if (typeof min === 'number' && typeof max === 'number' && min < max) {
        return Math.floor(min + Math.random() * ((max - min) + 1));
    } else {
        return null;
    }
}
