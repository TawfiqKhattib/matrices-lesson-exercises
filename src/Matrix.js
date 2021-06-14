class Matrix {
    constructor(rows, cols) {
        this.matrix = this.generateMatrix(rows, cols)
    }

    generateMatrix(rows, cols) {
        let counter = 1;
        let matrix = [];
        for (let row = 0; row < rows; row++) {
            let row = [];
            for (let col = 0; col < cols; col++) {
                row.push(counter++);
            }
            matrix.push(row)
        }
        return matrix;
    }
    print() {
        for (let row = 0; row < this.matrix.length; row++) {
            let line = "";
            for (let col = 0; col < this.matrix[row].length; col++) {
                line += this.matrix[row][col] + "\t";
            }
            console.log(line);
        }
    }

    get(row, col) {
        return this.matrix[row][col];
    }

    alter(row, col, val) {
        this.matrix[row][col] = val;
    }

    printColumn(col) {
        for (let row = 0; row < this.matrix.length; row++) {
            console.log(this.matrix[row][col]);
        }
    }

    printRow(row) {
        for (let col = 0; col < this.matrix[row].length; col++) {
            console.log(this.matrix[row][col]);
        }
    }

    findCoordinate(val) {

        for (let row = 0; row < this.matrix.length; row++) {
            let col = this.matrix[row].findIndex(elem => elem == val);
            if (col > 0) {
                return { x: col, y: row };
            }
        }
    }
}

let m = new Matrix(3, 4)
    // m.print()
    //prints
    /*
    1       2       3       4
    5       6       7       8
    9       10      11      12
    */

// console.log("");
// m.alter(0, 0, m.get(1, 1))
// m.printColumn(0) //prints 6, 5, 9 (separate lines)
// console.log("");
// m.printRow(0) //prints 6, 2, 3, 4 (separate lines)

// console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
// console.log("");
// console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}
module.exports = Matrix