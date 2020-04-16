import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Card} from '../../interfaces/Card';
import {CardsService} from '../../services/cards.service';
import {CardListStateService} from '../../services/card-list-state.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  get cards(): Card[] {
    return this.cardsService.getCards;
  }

  flippedCards = {};
  isAllFlippedBtnClicked = false;

  constructor(private cardsService: CardsService,
              private cardListStateService: CardListStateService) {
  }

  ngOnInit(): void {
    this.cardsService.iniitalize();
    this.cardListStateService.initialize();
    this.flippedCards = this.cardListStateService.getFlippedCards;
  }


  onCardDelete(index: number) {
    const card = this.cards[index];
    this.cardListStateService.delete(card);
    this.cardsService.deleteCard(index);
  }

  onCardFlip(card: Card) {
    this.cardListStateService.flip(card);
  }

  flipAll() {
    // this.cardListStateService.flipAll();
    this.isAllFlippedBtnClicked = true;
    this.ngOnInit();
  }

}
