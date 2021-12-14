# Notes #toProcess

## Intro

### What is Creative coding?

using coding to make something expressive rather than functional

### & Generative Art?

- a type of creative coding
- artworks created by an autonomous or rule based system
- "dancing or playing with a machine" "feed instructions to the machine, and it goes off and plays on it's own and creates the artwork along with your input"

### Examples

- Weird Type by Zach Lieberman(founder of a creative computing and coding school)
- @inconvergent Anders Hoff (mechanical pen plotter)
- Main Field by Matt DesLauriers (mechanical pen plotter, an way to bring code into a physical space)
- Sun by Phlip Schutte x Random Studio
- Paper planes by Active Theory
- Nervous System - generative puzzles, housewares etc

---

## Setup & Guidebook

### How to make art with code?

- how to create art with just javascript and frontend concepts
-

![Screen Shot 2021-12-14 at 10.59.23.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/55ed83e3-30f1-49ca-827c-5fdc3699c991/Screen_Shot_2021-12-14_at_10.59.23.png)

- built out of unicode symbols e.g +=-
-

## Tools

`[canvas-sketch](https://github.com/mattdesl/canvas-sketch/)`[[docs](https://github.com/mattdesl/canvas-sketch/tree/master/docs)]

- A development tool & framework for Generative Art
- built by Matt
- a dev environment, alternative to browser sync
- also a parser, alternative to webpack, parcel
- specificially designed for creative coding and gen art
- a set of js libraries that help you do common things like:
  - manipulating the canvas
  - working with paper sizes like A4, A3 for exporting print artwork
- has rich documentation

`[canvas-sketch-util](https://github.com/mattdesl/canvas-sketch-util/)`[[docs](https://github.com/mattdesl/canvas-sketch-util/tree/master/docs)]

- Utilities for Math & Random Number Generation
- 3rd party library that included opinionated utilities
  - `[math](https://github.com/mattdesl/canvas-sketch-util/blob/master/docs/math.md)` - Math & interpolation utilities
  - `[random](https://github.com/mattdesl/canvas-sketch-util/blob/master/docs/random.md)` - A random number generator
  - `[color](https://github.com/mattdesl/canvas-sketch-util/blob/master/docs/color.md)` - RGB and HSL color utilities
  - `[geometry](https://github.com/mattdesl/canvas-sketch-util/blob/master/docs/geometry.md)` - Geometry & shape utilities
  - `[penplot](https://github.com/mattdesl/canvas-sketch-util/blob/master/docs/penplot.md)` - Pen plotter & AxiDraw utilities
  - `[shader](https://github.com/mattdesl/canvas-sketch-util/blob/master/docs/shader.md)` - A full-screen GLSL shader utility

## Install Canvas Sketch CLI globally

```jsx
npm install canvas-sketch-cli --global
mkdir genart
cd genart
// run cmd
canvas-sketch
// error because you need to pass in a js file, e.g.

canvas-sketch sketch.js
// will also run an error because our folder is empty

// create a new js file and open
canvas-sketch sketch.js --new --open
```

![Screen Shot 2021-12-14 at 12.57.31.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ee422e81-d205-4162-a9b0-d3b940c158e0/Screen_Shot_2021-12-14_at_12.57.31.png)

- writes in folder
  ![Screen Shot 2021-12-14 at 12.57.53.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4f63d753-7d8f-481b-a81d-cf366741f75c/Screen_Shot_2021-12-14_at_12.57.53.png)
- creates a package json for dependencies
- package lock to lock down our dependencies
- writes file `sketch.js`

```jsx
const canvasSketch = require('canvas-sketch')

const settings = {
  dimensions: [2048, 2048],
}

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white'
    context.fillRect(0, 0, width, height)
  }
}

canvasSketch(sketch, settings)
```

- runs a local server
- opens the browser with a blank canvas

```jsx
const canvasSketch = require('canvas-sketch')
// requiring with node js

const settings = {
  dimensions: [2048, 2048], // pixels
}

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'rebeccaPurple'
    context.fillRect(0, 0, width, height) // x, y , width, height
  }
}
// you should enscapulate each animation in its own function, so they can be reused
// try to declarative
// context is the canvas api context

canvasSketch(sketch, settings)
```

## How to draw examples

[https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)

Circles

- got to paths, arc [https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc)

```jsx
context.beginPath()
context.arc(width / 2, height / 2, 200, 0, Math.PI * 2, false)
// think that you are drawing a circle with a compass
// arc(x, y, radius, startAngle, endAngle [, counterclockwise]);
// Math.Pi is half a circle/arc, so * 2 is a full circle
// angles are in radius

// context.fill() // but we won't see anything until we update the fill style

context.fillStyle = 'white'
context.fill()

context.lineWidth = 20
context.strokeStyle = 'blue'
context.stroke() // default is black 1px
```

### Save Canvas from browser to downloads

- click on canvas
- `ctrl+s`
- check console
  ![Screen Shot 2021-12-14 at 13.21.22.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/082bd216-9397-405f-b2a9-9e0d522de9ef/Screen_Shot_2021-12-14_at_13.21.22.png)
- check downloads
  ![2021.12.14-13.18.18.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cabcc5b0-df51-4c7a-b6ec-77efd53e4838/2021.12.14-13.18.18.png)

### Change Aspect Ratio

```jsx
const settings = {
  dimensions: [2048, 2048], // pixels
}
```

change to A4

```jsx
const settings = {
  dimensions: 'A4', // or 'letter', 'A3', 'postcard'
}
```

review in the browser

![Screen Shot 2021-12-14 at 13.24.14.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/341af03a-f605-4cb7-a7ff-b0439d52a1c6/Screen_Shot_2021-12-14_at_13.24.14.png)

export with ctrl S

![2021.12.14-13.25.49.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e889681-2146-4643-87bd-8c972187b9a8/2021.12.14-13.25.49.png)

### Resolution is for screens not print

- if we try to print this it will look blurry because the default is 72 (because its setup for digital)
- to change for print

```jsx
const settings = {
  dimensions: 'A4',
  pixelsPerInch: 300, // 300 is common for print artworks or proint design
}
```

- file is much larger!
  ![2021.12.14-13.29.09.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/78f95b31-728f-49c4-bc79-45e754698f8a/2021.12.14-13.29.09.png)
- can give it to a print shop or import in photoshop

### Motivation behind the tool

- workflow change to start doing a lot more print,
- wanted his code to work both on the web and in print

### How to stop the size of the circle changing regardless of the size?

```jsx
// we were using pixels for width
context.arc(width / 2, height / 2, 200, 0, Math.PI * 2, false)

// change and make it relative to the screen width
context.arc(width / 2, height / 2, width * 0.2, 0, Math.PI * 2, false)

// also the line width
context.lineWidth = width * 0.05
```

- now no matter the dimensions the circle should look the same

![2021.12.14-13.37.56.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0750fdcb-182b-442f-a201-1745112e7c3d/2021.12.14-13.37.56.png)

### What if we want to define in cm or inches instead of still working in pixels?

- e.g. create a 2 inch page margin

One way: Use different units in settings

```jsx
const settings = {
  dimensions: 'A4',
  units: 'in', // 'cm', 'mm', 'in', 'px', 'pt', 'ft'
  pixelsPerInch: 300,
}
```

to test

```jsx
const sketch = () => {
  return ({ context, width, height }) => {
    console.log(width, height) // to test the dimensions
    context.fillStyle = 'aqua'
    context.fillRect(0, 0, width, height) // x, y , width, height
....
	}
}

// returns in inches
8.2677 11.6929
```

& now we can change radius to 2 inches

`*context*.arc(*width* / *2*, *height* / *2*, *2*, *0*, *Math*.*PI* * *2*, *false*)`

### change the orientation

```jsx
const settings = {
  dimensions: 'A4',
  orientation: 'landscape', // portrait
  units: 'in', // 'cm', 'mm', 'in', 'px', 'pt', 'ft'
  pixelsPerInch: 300,
}
```

### specify size by cm

```jsx
const settings = {
  dimensions: [16, 10],
  orientation: 'landscape', // portrait
  units: 'cm', // 'cm', 'mm', 'in', 'px', 'pt', 'ft'
  pixelsPerInch: 300,
}
```

### Its best to start with digital sizes / a square

- and comment out the other stuffs

```jsx
const settings = {
  dimensions: [2048, 2048], // for instagram
  // orientation: 'landscape', // portrait
  // units: 'cm', // 'cm', 'mm', 'in', 'px', 'pt', 'ft'
  // pixelsPerInch: 300,
}
```

### Instagram square dimensions [2048, 2048]

- to start a gallery
