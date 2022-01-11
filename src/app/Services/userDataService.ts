import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { iUser, User } from '../Models/User';
import { Observable, Subject } from "rxjs";
import { map } from 'rxjs/operators';


@Injectable() export class UserDataService {
  _users: iUser[] | undefined;
  private _refreshNeeded$ = new Subject<void>();
  private configUrl = 'http://localhost:3000/users';
  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  constructor(private httpClient: HttpClient){ }

  public getAllUsers() : Observable<iUser[]>{
    return this.httpClient.get<iUser[]>(this.configUrl, { responseType: 'json' });
  }

  public createNew(user: User) {
    return this.httpClient
      .post<User>(this.configUrl, user, { responseType: 'json' })
      .pipe(map((res:User)=>{
          return res;
        })
      );
  }

  public update(user: User, id : number) {
    return this.httpClient
      .put<User>(this.configUrl + "/" + id, user)
      .pipe(map((res:User)=>{
          return res;
        })
      );
  }

  public delete(id : number) {
    return this.httpClient.delete<User>(this.configUrl + "/" + id).pipe(map((res:User)=>{
      return res;
    })
  );
  }
}

