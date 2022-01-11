import {
  Component
} from '@angular/core';

import {
  User
} from '../../Models/User';

@Component({
  selector: 'app-modal-new',
  templateUrl: './modal-new.component.html',
  styleUrls: ['./modal-new.component.scss']
})

export class ModalNewContext {
  userModel = new User(0,"","","","","","");
}
