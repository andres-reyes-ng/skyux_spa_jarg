import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  AppSkyModule
} from './app-sky.module';

import {
  SkyToolbarModule
} from '@skyux/layout';

import {
  FormsModule
} from '@angular/forms';

import {
  SkyModalModule
} from '@skyux/modals';

import {
  SkyInputBoxModule
} from '@skyux/forms';

import {
  AgGridModule
} from 'ag-grid-angular';

import {
  SkySearchModule
} from '@skyux/lookup';

import { SkyDropdownModule } from '@skyux/popovers';

import { ModalNewUserComponent } from '../app/t1/User/modal-new.component';
import { GridContextMenuComponent } from '../app/t1/User/grid-context-menu.component';

@NgModule({
  imports: [
    AgGridModule.withComponents([])
  ],
  exports: [
    CommonModule,
    AppSkyModule,
    SkyToolbarModule,
    FormsModule,
    SkyModalModule,
    SkyInputBoxModule,
    AgGridModule,
    SkySearchModule,
    SkyDropdownModule
  ],
  entryComponents: [
    ModalNewUserComponent,
    GridContextMenuComponent
  ]
})
export class AppExtrasModule { }
