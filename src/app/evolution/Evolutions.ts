import {Evolution} from './Evolution';
import {CellManagerService} from '../services/cell-manager.service';
import {NextStateFactory} from '../next-state/NextStateFactory';

export class EvolutionType1 implements Evolution {
  constructor(private cms: CellManagerService) {
  }

  nextStep() {
    for (let y = 0; y < this.cms.amountCellsVertical; y++) {
      for (let x = 0; x < this.cms.amountCellsHorizontal; x++) {
        const nextState = NextStateFactory(this.cms.selectedNextStateMethodName, this.cms).nextState(x, y);

        if (nextState !== this.cms.cellStates[y][x]) {
          this.cms.cellStates[y][x] = nextState;
        }
      }
    }
  }
}

// export class EvolutionType2 implements Evolution {
//   constructor(private cms: CellManagerService) {
//   }
//
//   nextStep() {
//
//   }
// }
