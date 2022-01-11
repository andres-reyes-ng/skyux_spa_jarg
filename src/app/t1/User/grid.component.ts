import {
  Component, NgModule, OnInit
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import { SkyAgGridService } from '@skyux/ag-grid';
import { GridApi,  GridReadyEvent,  GridOptions } from 'ag-grid-community';
import { SkyModalCloseArgs, SkyModalService } from '@skyux/modals';
import { SkyPageModule } from '@skyux/layout';

import { ModalNewUserComponent } from '../User/modal-new.component';
import { UserDataService } from '../../Services/userDataService';
import { User, iUser } from '../../Models/User';
import { ModalNewContext } from './modal-new.context';
import { GridContextMenuComponent } from './grid-context-menu.component';

@Component({
  selector: 'app-user-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

@NgModule({

  imports: [
    CommonModule
  ],
  exports:[
    SkyPageModule
  ],
  providers: [
    UserDataService
  ]
})

export class GridComponent implements OnInit {
  private getAll(){
    this._userDataService.getAllUsers().subscribe(
      response => {
        this.gridData = response;
      }
      ,error => alert(JSON.stringify(error))
    );
  }

  private saveUser(user: User){
    this._userDataService.createNew(user).subscribe(
      response => {
        console.log(response);
      }
      ,error => alert(JSON.stringify(error))
      );
  }

  constructor(
    private agGridService: SkyAgGridService,
    private modalService: SkyModalService,
    private _userDataService: UserDataService
    ) { }

  ngOnInit(): void {
    this.gridOptions = {
      columnDefs: this.columnDefs,
      onGridReady: gridReadyEvent => this.onGridReady(gridReadyEvent)
    };
    this.gridOptions = this.agGridService.getGridOptions({ gridOptions: this.gridOptions });
    this.getAll();
  }

  public gridData = [] as Array<iUser>;
  public columnDefs = [
    {
      field: 'firstName',
      headerName: 'First Name',
      sort: 'asc'
    },
    {
      field: 'lastName',
      headerName: 'Last Name'
    },
    {
      field: 'contactNo',
      headerName: 'Contact Number'
    },
    {
      field: 'birthDay',
      headerName: 'Birthday'
    },
    {
      field: 'email',
      headerName: 'Email'
    },
    {
      field: 'address',
      headerName: 'Address'
    },
    {
      colId: 'context',
      headerName: '',
      maxWidth: 50,
      sortable: false,
      field: 'id',
      cellRendererFramework: GridContextMenuComponent
    }
  ];
  public gridApi!: GridApi;
  public gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    onGridReady: gridReadyEvent => this.onGridReady(gridReadyEvent)
  };
  public searchText: string = "";
  public modalSize: string = 'large';
  public onGridReady(gridReadyEvent: GridReadyEvent): void {
    this.gridApi = gridReadyEvent.api;
    this.gridApi.sizeColumnsToFit();
  }

  public onOpenModalClick(): void {
    const modalInstanceType: any = ModalNewUserComponent;
    const context = new ModalNewContext();
    context.userModel = new User(0,"","","","","","");

    const options = {
      providers: [{ provide: ModalNewContext, useValue: context }],
      data: new User(0,"","","","","",""),
      size: this.modalSize
    };

    const modalInstance = this.modalService.open(modalInstanceType, options);

    modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
      if (result.reason === 'cancel' || result.reason === 'close') {
        console.log('Edits canceled!');
      } else {
        this.saveUser(modalInstance.componentInstance.userModel);
        this.getAll();
        this.gridApi.refreshCells();
      }
    });
  }

  public searchApplied(searchText: string): void {
    this.searchText = searchText;
    this.gridApi.setQuickFilter(searchText);
  }

  public gridUpdate(): void {
    alert("gridupate");
  }
}
