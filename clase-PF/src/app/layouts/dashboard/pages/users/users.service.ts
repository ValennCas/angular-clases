import { Injectable } from '@angular/core';
import { CreateUserPayload, IUser } from './models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private httpClient: HttpClient){}
  
  getUsers(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(`${environment.baseAPIURL}/users`);
  }

  updateUser(user: IUser): Observable<IUser> {
    return this.httpClient.put<IUser>(
    `${environment.baseAPIURL}/users/${user.id}`,
    user
  );
  }

  deleteUser(id: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${environment.baseAPIURL}/users/${id}`
    );
  }

  getUserById(id:number): Observable<IUser | undefined>{
    return this.httpClient.get<IUser>(`${environment.baseAPIURL}/users/${id}`);
  }

  createUser(payload: CreateUserPayload): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.baseAPIURL}/users`, payload);
  }

  // createUserAndGetUsers(payload: CreateUserPayload):Observable<any>{
  //   return this.getUsers().pipe(
  //     concatMap((usuarios) => {
  //       return this.createUser({});
  //     })
  //   )
  //   return forkJoin([this.getUsers(), this.createUser({})])
  // }
}
