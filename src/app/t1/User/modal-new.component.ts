import {
  Component, NgModule, OnInit
} from '@angular/core';

import {
  SkyModalInstance
} from '@skyux/modals';

import { Users, User } from '../../Models/User';
import { UserDataService } from '../../Services/userDataService';
import { ModalNewContextComponent } from './modal-new.context';

@Component({
  selector: 'app-modal-new',
  templateUrl: './modal-new.component.html',
  styleUrls: ['./modal-new.component.scss']
})

@NgModule({
  providers: [
    SkyModalInstance,
    UserDataService,
    ModalNewContextComponent
  ]
})

export class ModalNewUserComponent implements OnInit {
  public userModel: Users = new User(0, '', '', '', '', '', '');

  constructor(
    public instance: SkyModalInstance,
    public context: ModalNewContextComponent
  ) { }

  public ngOnInit(): void {
    this.userModel = this.context.userModel;
  }

}
