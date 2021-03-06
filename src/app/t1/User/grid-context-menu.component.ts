import {
  Component, NgModule
} from '@angular/core';

import {
  ICellRendererAngularComp
} from 'ag-grid-angular';

import {
  ICellRendererParams
} from 'ag-grid-community';

import { UserDataService } from '../../Services/userDataService';

@Component({
  selector: 'app-grid-context-menu',
  templateUrl: './grid-context-menu.component.html',
  styleUrls: ['./grid-context-menu.component.scss']
})

@NgModule({
  providers: [
    UserDataService
  ]
})

export class GridContextMenuComponent implements ICellRendererAngularComp {
  private params: ICellRendererParams | undefined;

  constructor(
    private _userDataService: UserDataService
    ) { }

  public agInit(params: ICellRendererParams): void {
    this.params = params;

  }

  public refresh(): boolean {
    return false;
  }

  public actionClicked(action: string): void {
    if (action === 'Delete') {
      console.log('Delete Item');
      this.deleteAction(this.params?.value);
    } else if (action === 'Edit') {
      console.log('Edition starts!');
    }
  }

  private deleteAction(id: number): void {
    this._userDataService.delete(id).subscribe(
      response => {
        console.log(response);
      }
      , error => alert(JSON.stringify(error))
    );
  }
}
