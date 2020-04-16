import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Card} from '../../interfaces/Card';
import {debounce} from '../../helpers/debounce';
import {CardListStateService} from '../../services/card-list-state.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, AfterViewInit {//OnChanges {

  @Input()
  card: Card;

  @Input()
  isFlipped: boolean;

  @Input()
  isAllFlipped: boolean;

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
    if (this.isFlipped) {
      this.toggleElement.classList.toggle('is-flipped');
    }
  }

  onCardClicked() {
    this.toggleElement.classList.toggle('is-flipped');
    this.flip.emit();
  }

  onCardDelete(event: MouseEvent) {
    event.stopPropagation();
    this.delete.emit();
  }

  ngAfterViewInit(): void {
    if (!this.isFlipped && this.isAllFlipped) {
      setTimeout(() => {
        if (!this.toggleElement.classList.contains('is-flipped')) {
          this.cardClick();
        }
      }, 100);
    }
  }
}
