// Function Definition
/**
 * calculates area of a given geometric shape
 *
 * @param {String} shape - type of shape (e.g., "rectangle", "circle", "right-triangle")
 * @param {Array} dimensions - array containing the necessary dimensions for calculating the area
 * @returns {Number} The area of the given geometric shape
 */
function calculateArea(shape, dimensions) {
  // Validating dimensions
  if (
    !Array.isArray(dimensions) ||
    !dimensions.every((dim) => typeof dim === 'number')
  ) {
    console.log('Invalid dimensions! Please provide an array of numbers.')
    return
  }
  // Area Calculation based on Shape
  if (shape === 'rectangle') {
    const area = dimensions[0] * dimensions[1]
    console.log(`The area of the rectangle: ${area} square units`)
  } else if (shape === 'circle') {
    const area = 3.14 * dimensions[0] ** 2
    console.log(`The area of the circle: ${area} square units`)
  } else if (shape === 'right-triangle') {
    const area = (dimensions[0] * dimensions[1]) / 2
    console.log(`The area of the right-triangle: ${area} square units`)
  } else if (shape === 'square') {
    const area = dimensions[0] ** 2
    console.log(`The area of the square: ${area} square units`)
  } else {
    console.log('Invalid Shape! Please enter a valid shape!')
  }
}

calculateArea('circle', [10])
// calculateArea('square', [100])
// calculateArea('rectangle', [50, 20])
// calculateArea('right-triangle', [20, 40])
// calculateArea('parallelogram', [(50, 20)])
// calculateArea('parallelogram', [50, 20])
