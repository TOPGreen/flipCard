import {Component, OnInit} from '@angular/core';
import {Card} from '../../interfaces/Card';
import {CardsService} from '../../services/cards.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private cardService: CardsService) {
  }

  ngOnInit(): void {
  }

  onCardAdd(card: Card) {
    this.cardService.addCard(card);
  }

}
