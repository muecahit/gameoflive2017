import {Component, OnInit} from '@angular/core';
import {CellManagerService} from '../services/cell-manager.service';

@Component({
  selector: 'app-cell-block',
  templateUrl: './cell-block.component.html',
  styleUrls: ['./cell-block.component.css']
})
export class CellBlockComponent implements OnInit {

  constructor(public cms: CellManagerService) {
  }

  ngOnInit() {
    // this.arr[5][5] = 10

  }


}
