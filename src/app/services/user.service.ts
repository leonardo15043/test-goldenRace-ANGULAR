import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    /**
     * @param {HttpClient} http - Object for creating HTTP request
     */
    constructor(
        private http: HttpClient
    ) { }

    saveUser( user:User ):Observable<User>{
        return this.http.post<User>(`/api/users`, user);
    }

}