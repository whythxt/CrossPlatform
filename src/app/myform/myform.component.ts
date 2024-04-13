import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Form } from '@angular/forms';
import { Reader } from './classes/reader';
import { Validators } from '@angular/forms';
import { NumberValidator } from './validators/number-validator';
import { emailValidator } from './validators/email-validator';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent  implements OnInit {
  readerForm!: FormGroup;
  reader!: Reader;

  constructor(private fb: FormBuilder) {
    this.readerForm = this.fb.group({
      readerID: ['', Validators.required],
      readerName: ['', Validators.required],
      readerAddress: ['', Validators.required],
      readerPhone: ['', NumberValidator.isValidPhone],
      readerEmail: ['', emailValidator()],
      books: new FormArray([new FormControl()])
    })
   }

   addBook() {
    console.log("add");
    (this.readerForm.controls['books'] as FormArray).push(
      new FormControl()
    )
   }

   deleteBook(i: any) {
    console.log("Delete");
    (this.readerForm.controls['books'] as FormArray).removeAt(i);
   }

   getControls() {
    return (this.readerForm.get('books') as FormArray).controls;
   }

   onSubmit() {
    console.log("Submit"); 

    this.reader = new Reader(
      this.readerForm.value.readerID,
      this.readerForm.value.readerName,
      this.readerForm.value.readerAddress,
      this.readerForm.value.readerPhone,
      this.readerForm.value.readerEmail,
      this.readerForm.value.books
    );
    
    console.log(this.reader);
  }
  

  ngOnInit() {}

}
