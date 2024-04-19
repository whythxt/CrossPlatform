import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Reader } from '../myform/classes/reader';
import { NumberValidator } from '../myform/validators/number-validator';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss'],
})
export class UpdateformComponent  implements OnInit {
  @Input() reader!: Reader;
  @Input() show = true;
  
  @Output() readerChange = new EventEmitter<Reader>();
  @Output() showChange = new EventEmitter();

  constructor() { }
  ngOnInit() { }

  save(name: any, addr: any, phn: any, mail: any) {
    this.show = false;
  
    const phoneControl = new FormControl(phn);
    const emailControl = new FormControl(mail);
  
    if (NumberValidator.isValidEmail(emailControl) == null && NumberValidator.isValidPhone(phoneControl) == null) {
      this.reader = new Reader(this.reader.id, name, addr, phn, mail, this.reader.books);
      this.readerChange.emit(this.reader);
      this.showChange.emit(this.show); 
    } else {
      throw Error("Validator error");
    }
  }
  

}
