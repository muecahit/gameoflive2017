import {Component, Input} from '@angular/core';
import {CellManagerService} from '../services/cell-manager.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() state: number; // 0 or 1
  // Position
  @Input() x: number;
  @Input() y: number;

  constructor(public cms: CellManagerService) {
  }

  onHover(e: MouseEvent): void {
    if (e.ctrlKey) {
      this.cms.cellStates[this.y][this.x] = this.cms.onHoverChangeTo;
    }
  }

}
