import {Injectable} from '@angular/core';

@Injectable()
export class CellManagerService {

  amountCellsHorizontal = 10;
  amountCellsVertical = 10;
  // Dummy Array for Iteration in HTML
  dummyCellArr = new Array(this.amountCellsVertical * this.amountCellsHorizontal);
  cellColorAlive = '#2cd412';
  cellColorDead = '#ef0b0b';
  running;  // null or return value of setInterval
  onHoverChangeTo = 1; // kill or revive the Ctrl + Hovered Cell
  cellStates: number[][] = [];  // all cell states are here
  selectedGenerationUpdatingPatternName = 'EvolutionType1';
  selectedNextStateMethodName = 'NextStateMethod1';

  constructor() {
    this.initializeCellStates();
  }

  initializeCellStates(): void {
    const cellStates = [];
    for (let y = 0; y < this.amountCellsVertical; y++) {
      const newLine: number[] = [];
      for (let x = 0; x < this.amountCellsHorizontal; x++) {
        newLine.push(this.getInitialCellState());
      }
      cellStates.push(newLine);
    }
    this.cellStates = cellStates;
  }

  // Returns 0 for dead or 1 for alive
  getInitialCellState(): number {
    const min = 0;
    const max = 2;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getStatusOfCell(index: number): number {
    return this.cellStates[this.getCellPositionY(index)][this.getCellPositionX(index)];
  }

  getCellPositionX(index: number): number {
    return index % this.amountCellsHorizontal;
  }

  getCellPositionY(index: number): number {
    return Math.floor(index / this.amountCellsHorizontal);
  }

  getCellHeight(): number {
    const cWHeight = +document.getElementsByClassName('cell-wrapper').item(0).clientHeight;
    return (cWHeight / this.amountCellsVertical) - 1;
  }

  // If the x or y is higher or lover then the max or 0, then get the next possible number
  tryXCoordinate(x: number): number {
    if (x >= this.amountCellsHorizontal) {

      return 0;

    } else if (x <= -1) {

      return this.amountCellsHorizontal - 1;

    } else {
      return x;
    }
  }

  tryYCoordinate(y: number): number {
    if (y >= this.amountCellsVertical) {

      return 0;

    } else if (y <= -1) {

      return this.amountCellsVertical - 1;

    } else {
      return y;
    }
  }

  // Coordinates around the targeted Cell. From top left corner clockwise around the cell.
  getNeighborCoordinates(x: number, y: number): { x: number, y: number }[] {
    return [
      {x: this.tryXCoordinate(x - 1), y: this.tryYCoordinate(y + 1)},
      {x: this.tryXCoordinate(x), y: this.tryYCoordinate(y + 1)},
      {x: this.tryXCoordinate(x + 1), y: this.tryYCoordinate(y + 1)},
      {x: this.tryXCoordinate(x - 1), y: this.tryYCoordinate(y)},
      {x: this.tryXCoordinate(x + 1), y: this.tryYCoordinate(y)},
      {x: this.tryXCoordinate(x - 1), y: this.tryYCoordinate(y - 1)},
      {x: this.tryXCoordinate(x), y: this.tryYCoordinate(y - 1)},
      {x: this.tryXCoordinate(x + 1), y: this.tryYCoordinate(y - 1)}
    ];
  }
}
