import {Component, OnInit} from '@angular/core';
import {Card} from '../../interfaces/Card';
import {CardsService} from '../../services/cards.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards: Card[];


  constructor(private cardsService: CardsService) {
    this.cards = this.cardsService.getCards;
  }

  ngOnInit(): void {
  }

}
