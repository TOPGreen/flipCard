import {Injectable} from '@angular/core';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';
import {Card} from '../interfaces/Card';

@Injectable({
  providedIn: 'root'
})
export class CardListStateService {

  private flippedCards = {};

  constructor() {
  }

  get getFlippedCards() {
    return this.flippedCards;
  }

  flip(card: Card) {
    const key = `${card.title}|${card.description}`;
    if (this.flippedCards[key]) {
      this.flippedCards[key] = false;
    } else {
      this.flippedCards[key] = true;
    }

    this.saveState();

    console.log(this.flippedCards);
  }

  initialize() {
    this.flippedCards = JSON.parse(localStorage.getItem('flippedCards')) ? JSON.parse(localStorage.getItem('flippedCards')) : {};
    console.log('init', this.flippedCards);
    console.log(localStorage);
  }

  delete(card: Card) {
    const key = `${card.title}|${card.description}`;
    delete this.flippedCards[key];
    this.saveState();
  }

  saveState(){
    localStorage.setItem('flippedCards', JSON.stringify(this.flippedCards));
  }

}
