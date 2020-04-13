import {Inject, Injectable} from '@angular/core';
import {ICardsApiService, ICardsApiServiceToken} from '../interfaces/ICardsApi';
import {Card} from '../interfaces/Card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private cards: Card[] = [
    {
      id: 0,
      title: '0-qwe',
      description: '0-hvljbkcgvhjgfghvj'
    },
    {
      id: 1,
      title: '1-qwe',
      description: '1-hvljbkcgvhjgfghvj'
    },
    {
      id: 2,
      title: '2-qwe',
      description: '2-hvljbkcgvhjgfghvj'
    },
  ];


  constructor(@Inject(ICardsApiServiceToken)
              private cardsApiService: ICardsApiService) {
  }

  get getCards(): Card[] {
    return this.cards;
  }

  addCard(card: Card) {
    // this.cardsApiService.add(card).subscribe(() => {
    this.cards.push(card);
    // });
  }
}
