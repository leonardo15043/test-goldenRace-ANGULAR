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

    /**
     * Get the user information with the token
     * @param {string} tokenUser 
     * @returns {Observable<User[]>}
     */
    getUser( tokenUser:string ):Observable<User[]>{
        return this.http.get<User[]>(`/api/users?token=${tokenUser}`);
    }

    /**
     * Save user information
     * @param {User} user 
     * @returns {Observable<User>}
     */
    saveUser( user:User ):Observable<User>{
        return this.http.post<User>(`/api/users`, user);
    }

    /**
     * Update user information
     * @param {User} user 
     * @returns {Observable<User>}
     */
    updateUser( user:User ):Observable<User>{
        return this.http.patch<User>(`/api/users/${user.id}`, user);
    }

}