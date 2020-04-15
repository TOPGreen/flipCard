import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from '../../interfaces/Card';
import {debounce} from '../../helpers/debounce';
import {CardListStateService} from '../../services/card-list-state.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, AfterViewInit {

  @Input()
  card: Card;

  @Input()
  isFlipped: boolean;

  @Output()
  delete = new EventEmitter<void>();

  @Output()
  flip = new EventEmitter<void>();

  cardClick = null;

  toggleElement;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.cardClick = debounce(this.onCardClicked, 1000);
    this.toggleElement = this.elementRef.nativeElement.querySelector('.flip-card-inner');
  }

  onCardClicked() {
    this.toggleElement.classList.toggle('is-flipped');
    this.flip.emit();
  }

  onCardDelete(event: MouseEvent) {
    event.stopPropagation();
    this.delete.emit();
  }

  ngAfterViewInit() {
    if (this.isFlipped) {
      this.toggleElement.classList.toggle('is-flipped');;
    }
  }
}
