import {CellManagerService} from '../services/cell-manager.service';
import {NextStateMethod} from './NextStateMethod';
import * as NextStateMethods from './NextStateMethods';

export const NextStateFactory = (selectedNextStateMethod: string, cms: CellManagerService): NextStateMethod => {
  const nextStateMethods = {...NextStateMethods};

  return new nextStateMethods[selectedNextStateMethod](cms);
};
