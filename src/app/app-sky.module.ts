import {
  NgModule,
  Injectable
} from '@angular/core';

import {
  SkyAvatarModule
} from '@skyux/avatar';

import {
  SkyAlertModule,
  SkyKeyInfoModule
} from '@skyux/indicators';

import {
  SkyFluidGridModule
} from '@skyux/layout';

import {
  SkyNavbarModule
} from '@skyux/navbar';

import {
  SkyAgGridModule
} from '@skyux/ag-grid';

import {
  FormsModule
} from '@angular/forms';

import {
  SkyModalModule
} from '@skyux/modals';

@Injectable()

@NgModule({
  exports: [
    SkyAvatarModule,
    SkyAlertModule,
    SkyKeyInfoModule,
    SkyFluidGridModule,
    SkyNavbarModule,
    SkyAgGridModule,
    FormsModule,
    SkyModalModule
    ]
})
export class AppSkyModule { }
