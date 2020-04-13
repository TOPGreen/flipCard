import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Card} from '../../interfaces/Card';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css']
})
export class CardAddComponent implements OnInit {

  @Output()
  addCard = new EventEmitter<Card>();

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      this.addCard.emit((this.form.value));
    }
  }

}
