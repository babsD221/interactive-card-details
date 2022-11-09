import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CardData } from 'src/app/card-data.model';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.css']
})
export class CardInputComponent implements OnInit {

  @Output() formEvent = new EventEmitter<CardData>();
  @Output() cardNumberChange = new EventEmitter<String>();


  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.maxLength(26)]),
    number: new FormControl('',[Validators.required, Validators.minLength(16)]),
    expiryMonth: new FormControl('', [Validators.required,Validators.maxLength(2)]),
    expiryYear: new FormControl('', [Validators.required,Validators.maxLength(2)]),
    cvc: new FormControl('', [Validators.required, Validators.maxLength(3)])
  });


  constructor() { }

  ngOnInit(): void {
    this.cardForm.valueChanges.subscribe(()=> {
      const card: CardData = new CardData(this.cardForm.value.name!,this.cardForm.value.number!,this.cardForm.value.expiryMonth!
        ,this.cardForm.value.expiryYear!,this.cardForm.value.cvc!);
      this.formEvent.emit(card);
    })
      ;
  }

  cardNumberValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if(control.value.match(/^[0-9]+$/)) {
        return {invalidInput: true}
      }
      return null;
    };
  }

  onSubmit() {
    const card = new CardData(this.cardForm.value.name!,this.cardForm.value.number!,this.cardForm.value.expiryMonth!,
      this.cardForm.value.expiryYear!,this.cardForm.value.cvc!);
      this.formEvent.emit(card);
  }

  /*onCardNumberChange() {
    console.log('card number changed');
    this.cardNumberChange.emit(this.cardForm.value.number!);
  }*/

}
