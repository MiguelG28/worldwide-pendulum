import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import { Subject } from "rxjs";
import { AppState, User } from './appstate/index';

@Injectable()
export class UserService {

    currentUser: Subject<User>
    
    constructor(private store: Store<AppState>, 
                private http: Http) { }

    getCurrentUser(): Observable<string> {
        return this.store.select(appState => appState.current_user.id).filter(Boolean);
    }
    getAll() {
        return this.http.get('/api/', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/api/', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('/api/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
