import {Component, ViewEncapsulation} from '@angular/core';
import {CellManagerService} from '../services/cell-manager.service';
import {EvolutionFactory} from '../evolution/evolution-factory';
import * as Evolutions from '../evolution/Evolutions';
import * as NextStepMethodNames from '../next-state/NextStateMethods';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsComponent {
  panelStyle = {
    width: '440px',
  };

  constructor(public cms: CellManagerService) {
  }

  onCellAmountChange(sizeInput: HTMLInputElement, axis: string): void {
    switch (axis) {
      case 'x':
        this.changeXSizes(+sizeInput.value);
        break;

      case 'y':
        this.changeYSize(+sizeInput.value);
        break;
    }
    this.cms.dummyCellArr = new Array(this.cms.amountCellsHorizontal * this.cms.amountCellsVertical);
  }

  // Add or Remove a horizontal Cell
  changeXSizes(newSize: number): void {
    if (this.cms.amountCellsHorizontal < newSize) {
      const difference = newSize - this.cms.amountCellsVertical;

      for (let y = 0; y < this.cms.amountCellsVertical; y++) {

        for (let i = 0; i < difference; i++) {

          const newRandomState = this.cms.getInitialCellState();
          this.cms.cellStates[y].push(newRandomState);

        }
      }
    } else {
      const difference = this.cms.amountCellsVertical - newSize;


      for (let y = 0; y < this.cms.amountCellsVertical; y++) {
        const rowMaxIndex = this.cms.cellStates[y].length - 1;
        this.cms.cellStates[y].splice(rowMaxIndex - difference, difference);
      }
    }
    this.cms.amountCellsHorizontal = newSize;
  }

  // Add or Remove a Row
  changeYSize(newSize: number): void {
    if (this.cms.amountCellsVertical < newSize) {
      const difference = newSize - this.cms.amountCellsVertical;

      for (let i = 0; i < difference; i++) {
        const newRow = [];

        for (let x = 0; x < this.cms.amountCellsHorizontal; x++) {
          newRow.push(this.cms.getInitialCellState());
        }
        this.cms.cellStates.push(newRow);
      }

    } else {
      const difference = this.cms.amountCellsVertical - newSize;
      const rowMaxIndex = this.cms.cellStates.length - 1;

      this.cms.cellStates.splice(rowMaxIndex - difference, difference);
    }
    this.cms.amountCellsVertical = newSize;
  }

  // Gets the selected updating-pattern via factory pattern and start updating the cell states or kills the interval
  startEvolution(): void {
    if (!this.cms.running) {
      const generation = EvolutionFactory(this.cms.selectedGenerationUpdatingPatternName, this.cms);
      this.cms.running = setInterval(() => generation.nextStep(), 1000);
    } else {
      clearInterval(this.cms.running);
      this.cms.running = null;
    }
  }

  getElolutionNames(): string[] {
    return Object.keys({...Evolutions});
  }

  getNextStepMethodNames(): string[] {
    return Object.keys({...NextStepMethodNames});
  }
}
