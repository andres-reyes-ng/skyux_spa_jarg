import {
  Component, NgModule
} from '@angular/core';

import {
  SkyModalInstance
} from '@skyux/modals';

import { iUser, User } from '../../Models/User';
import { UserDataService } from '../../Services/userDataService'
import { ModalNewContext } from './modal-new.context'

@Component({
  selector: 'app-modal-new',
  templateUrl: './modal-new.component.html',
  styleUrls: ['./modal-new.component.scss']
})

@NgModule({
  providers: [
    SkyModalInstance,
    UserDataService,
    ModalNewContext
  ]
})

export class ModalNewUserComponent{
  userModel : iUser = new User(0,"","","","","","");

  constructor(
    public instance: SkyModalInstance,
    public context : ModalNewContext
  ) { }

  public ngOnInit(): void {
    this.userModel = this.context.userModel;
  }

}
