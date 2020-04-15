import { Injectable } from '@angular/core';
import {ICardsApiService} from '../interfaces/ICardsApi';
import {Card} from '../interfaces/Card';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsApiMockService implements ICardsApiService{

  constructor() { }

  add(entity: Card): Observable<void> {
    return undefined;
  }

  delete(id: number): Observable<void> {
    return undefined;
  }

  getAll(): Observable<Card[]> {
    return undefined;
  }
}
