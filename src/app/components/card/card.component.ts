import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../interfaces/Card';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    @Input()
    card: Card;

    constructor() {
    }

    ngOnInit(): void {
    }

    onCardClicked(event) {
        event.target.parentElement.parentElement.classList.toggle('is-flipped');
    }
}
