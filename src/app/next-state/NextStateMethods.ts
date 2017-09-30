import {NextStateMethod} from './NextStateMethod';
import {CellManagerService} from '../services/cell-manager.service';

export class NextStateMethod1 implements NextStateMethod {
  constructor(private cms: CellManagerService) {
  }

  nextState(x: number, y: number): number {
    const neighborCoordinates = this.cms.getNeighborCoordinates(x, y);
    const selfState = this.cms.cellStates[y][x];
    let neighborsAlive = 0;

    for (const neighborCoordinate of neighborCoordinates) {
      if (this.cms.cellStates[neighborCoordinate.y][neighborCoordinate.x]) neighborsAlive++;
    }

    // Rules of Game of Life
    if (selfState && neighborsAlive < 2) {
      return 0;
    } else if (selfState && neighborsAlive === 2 || neighborsAlive === 3) {
      return 1;
    } else if (selfState && neighborsAlive > 3) {
      return 0;
    } else if (!selfState && neighborsAlive === 3) {
      return 1;
    }
  }
}
