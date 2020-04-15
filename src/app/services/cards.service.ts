import {Inject, Injectable} from '@angular/core';
import {ICardsApiService, ICardsApiServiceToken} from '../interfaces/ICardsApi';
import {Card} from '../interfaces/Card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private cards: Card[] = [];


  constructor(@Inject(ICardsApiServiceToken)
              private cardsApiService: ICardsApiService) {
  }

  get getCards(): Card[] {
    return this.cards;
  }

  addCard(card: Card) {
    this.cardsApiService.add(card).subscribe(() => {
      this.cards.push(card);
    });
  }

  iniitalize() {
    this.cardsApiService.getAll().subscribe(data => {
      this.setCards(data);
    });
  }

  setCards(cards: Card[]) {
    this.cards = cards;
  }


  deleteCard(index) {
    const id = this.cards[index].id;

    this.cardsApiService.delete(id).subscribe(() => {
      this.cards.splice(index, 1);
    });
  }
}
