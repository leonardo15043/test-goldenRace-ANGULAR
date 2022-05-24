import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ball, ConfigurationGame } from '../models/game.interface';

@Injectable({
    providedIn: 'root'
})

export class GameService {

    /**
     * @param {HttpClient} http - Object for creating HTTP request
     */
    constructor(
        private http: HttpClient
    ) { }

    /**
     * General settings of the entire game
     * @returns {Observable<ConfigurationGame>}
     */
    configurationGame():Observable<ConfigurationGame>{
        return this.http.get<ConfigurationGame>('/api/game');
    }

    /**
     * Get the list of game balls
     * @returns {Observable<Ball[]>}
     */
    getBalls():Observable<Ball[]>{
        return this.http.get<Ball[]>('/api/balls');
    }

    /**
     * Get the data of a ball
     * @param {number} idBall
     * @returns {Observable<Ball[]>}
     */
    getBall( idBall:number ):Observable<Ball>{
        return this.http.get<Ball>(`/api/balls/${idBall}`);
    }

}