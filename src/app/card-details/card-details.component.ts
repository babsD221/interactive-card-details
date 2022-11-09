import { Component, OnInit } from '@angular/core';
import { CardData } from '../card-data.model';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  cardNumber: String = '0000 0000 0000 0000';
  cardHolderName: String = '';
  cvc: String = '000';
  expirationDate: String = '';
  constructor() { }

  ngOnInit(): void {
  }
  onCardChange(card: CardData) {
    console.log('DEDANS');
    this.cardNumber = card.cardNumber;
    this.cardHolderName = card.cardHolderName;
    this.cvc = card.cvc;
    this.expirationDate = card.expireM + '/' + card.expireYear;
  }
}
