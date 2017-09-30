import * as Evolutions from './Evolutions';
import {Evolution} from './Evolution';
import {CellManagerService} from '../services/cell-manager.service';

export const EvolutionFactory = (selectedEvolutionType: string, cms: CellManagerService): Evolution => {
  const evolutions = {...Evolutions};

  return new evolutions[selectedEvolutionType](cms);
};
