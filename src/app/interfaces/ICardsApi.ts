import {Observable} from 'rxjs';
import {Card} from './Card';
import {InjectionToken} from '@angular/core';

export const ICardsApiServiceToken = new InjectionToken('ICardsApiServiceToken');

export interface ICardsApiService {
  getAll(): Observable<Card[]>;

  add(entity: Card): Observable<void>;

  delete(id: number): Observable<void>;

  editByid(id: number, entity: Card): Observable<void>;
}
