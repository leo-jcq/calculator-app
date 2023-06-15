/**
 * Replace the comma with a dot and the multiplication sign with an x
 *
 * @param {string} compute The string to be converted
 * @return {string} The converted string
 */
function screenToEval(compute) {
    return compute.replace(',', '.').replace('x', '*');
}

export default screenToEval;
