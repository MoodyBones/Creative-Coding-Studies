const canvasSketch = require('canvas-sketch')
// requiring with node js

const settings = {
  dimensions: [2048, 2048],
  // orientation: 'landscape', // portrait
  // units: 'cm', // 'cm', 'mm', 'in', 'px', 'pt', 'ft'
  // pixelsPerInch: 300,
}

const sketch = () => {
  return ({ context, width, height }) => {
    console.log(width, height) // to test the dimensions
    context.fillStyle = 'lightblue'
    context.fillRect(0, 0, width, height) // x, y , width, height

    context.beginPath()
    context.arc(width / 2, height / 2, 2, 0, Math.PI * 2, false)
    // arc(x, y, radius, startAngle, endAngle [, counterclockwise]);
    // think that you are drawing a circle with a compass
    // arc(x, y, radius, startAngle, endAngle [, counterclockwise]);
    // Math.Pi is half a circle/arc, so * 2 is a full circle
    // angles are in radius

    // context.fill() // but we won't see anything until we update the fill style

    context.fillStyle = 'orange'
    context.fill()

    context.lineWidth = width * 0.05
    context.strokeStyle = 'red'
    context.stroke() // default is black 1px
  }
}
// you should enscapulate each animation in its own function, so they can be reused
// try to declarative
// context is the canvas api context

canvasSketch(sketch, settings)
