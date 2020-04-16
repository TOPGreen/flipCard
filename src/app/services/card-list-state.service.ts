import {Injectable} from '@angular/core';
import {Card} from '../interfaces/Card';
import {CardsService} from './cards.service';

@Injectable({
  providedIn: 'root'
})
export class CardListStateService {

  private flippedCards = {};

  constructor(private cardsService: CardsService) {
  }

  get getFlippedCards() {
    return this.flippedCards;
  }

  flip(card: Card) {
    const key = this.getKey(card);
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
    delete this.flippedCards[this.getKey(card)];
    this.saveState();
  }

  saveState() {
    localStorage.setItem('flippedCards', JSON.stringify(this.flippedCards));
  }

  flipAll() {
    for (const card of this.cardsService.getCards) {
      this.flippedCards[this.getKey(card)] = true;
    }
    this.saveState();
  }

  private getKey(card: Card) {
    return `${card.title}|${card.description}`;
  }

}
