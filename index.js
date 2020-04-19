//#region Perimeter
module.exports.square_perimeter = (height, width) => height * 2 + width * 2;

module.exports.circle_perimeter = (radius) => Math.PI * 2 * radius;
//#endregion

//#region Area
module.exports.square_area = (height, width) => height * width;

module.exports.circle_area = (radius) => Math.PI * radius * radius;

module.exports.rectangularprism_area = (height, width, length) => 2 * width * length + 2 * length * height + 2 * height * width;

module.exports.cone_area = (radius, slant_height) =>  Math.PI * Math.pow(radius, 2) + Math.PI * radius * slant_height;

module.exports.cylinder_area = (radius, heigth) => 2 * Math.PI * radius * heigth;

module.exports.sphere_area = () => 4 * Math.PI * Math.pow(radius, 2);
//#endregion

//#region Volume
module.exports.rectangularprism_volume = (height, width, length) => height * width * length;

module.exports.cone_volume = (radius, height) => (1/3) * Math.PI * radius * 2 * height;

module.exports.cylinder_volume = (radius, height) => Math.PI * Math.pow(radius, 2) * height;

module.exports.sphere_volume = (radius) => (4/3) * Math.PI * Math.pow(radius, 3);
//#endregion