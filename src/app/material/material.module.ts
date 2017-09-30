import {NgModule} from '@angular/core';

import {
  MdButtonModule,
  MdExpansionModule,
  MdFormFieldModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdMenuModule,
  MdRadioModule
} from '@angular/material';

@NgModule({
  exports: [
    MdGridListModule,
    MdMenuModule,
    MdExpansionModule,
    MdIconModule,
    MdFormFieldModule,
    MdButtonModule,
    MdInputModule,
    MdRadioModule
  ]
})
export class MaterialModule {
}
