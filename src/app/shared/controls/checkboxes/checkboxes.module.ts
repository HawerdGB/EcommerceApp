import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxesComponent } from './checkboxes.component';
import { MatCheckboxModule} from '@angular/material/checkbox/'

@NgModule({
  declarations: [
    CheckboxesComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  exports:[
    CheckboxesComponent,
    MatCheckboxModule
  ]
})
export class CheckboxesModule { }
