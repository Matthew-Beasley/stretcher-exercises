//add methods to Grid called row and col
//grid.row(3) should return the third row as an array
//grid.col(2) should return the second column.
class Cell {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

function isCoord(obj) {
  return obj.x !== undefined && obj.y !== undefined
}

class Grid {
  constructor(width, height) {
    this.height = height
    this.width = width
    this._array = Array(height * width)
  }

  _innerIdx(x, y) {
    return y * this.width + x
  }

  _xy(idx) {
    return [idx % this.width, Math.floor(idx / this.width)]
  }

  at(x, y) {
    if (isCoord(x)) ({ x, y } = x)
    return this._array[this._innerIdx(x, y)]
  }

  set(x, y, value) {
    if (isCoord(x)) (value = y, { x, y } = x)
    this._array[this._innerIdx(x, y)] = value
  }

  getCells() {
    return this._array.map((_, i) => new Cell(...this._xy(i)))
  }

  twoDim() {
    const output = []
    for (let i = 0, row = 0; row < this.height; row++) {
      const inner = []
      for (let col = 0; col < this.width; col++, i++) {
        inner.push(this._array[i])
      }
      output.push(inner)
    }
    return output
  }

  fill() {
    for (let i = 0; i < this._array.length; this._array[i] = i++);
  }

  row(_row) {
    return this.twoDim()[_row];
  }

  col(_column) {
    return this.twoDim().map(row => {
      return row[_column];
    });
  }
}

const theGrid = new Grid(5, 5)
theGrid.fill()

console.log(theGrid.row(2))
console.log(theGrid.col(3))

/*
[ 10, 11, 12, 13, 14 ]
[ 3, 8, 13, 18, 23 ]
*/
