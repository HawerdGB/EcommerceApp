import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ButtonsModule} from '@app/shared/buttons'
import {ControlsModule} from '@app/shared/controls';
import { ReactiveFormsModule } from '@angular/forms';
import { IndicatorsModule } from '@app/shared';




@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ButtonsModule,
    ControlsModule,
    ReactiveFormsModule,
    IndicatorsModule
  ]
})
export class SharedModule { }
