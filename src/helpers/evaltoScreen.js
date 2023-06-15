/**
 * Replace the dot with a comma and the multiplication sign with an x
 *
 * @param {string} compute The string to be converted
 * @return {string} The converted string
 */
function evaltoScreen(compute) {
    return compute.replace('.', ',').replace('*', 'x');
}

export default evaltoScreen;