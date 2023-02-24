// So you do this first step only once, when developing your app
const getMapJSON = require('dotted-map').getMapJSON;

// This function accepts the same arguments as DottedMap in the example above.
const mapJsonString = getMapJSON({ height: 60, grid: 'diagonal' });
console.log(mapJsonString);
const MyMapString =  mapJsonString 

// This string will contain everything about the grid. You will need to copy
// and include it in your front.

export {MyMapString}