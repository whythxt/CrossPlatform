import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DerivativeCalculatorService } from '../derivative-calculator.service';
import { DerivativeResult } from '../modul-one/interface/derivRes';

@Component({
  selector: 'app-derivative-input',
  templateUrl: './derivative-input.component.html',
  styleUrls: ['./derivative-input.component.scss']
})
export class DerivativeInputComponent implements OnInit {
  @Output() derivativeCalculated = new EventEmitter<DerivativeResult>();
  derivativeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private derivativeService: DerivativeCalculatorService) { 
    this.derivativeForm = this.formBuilder.group({
      fx: ['', Validators.required],
      x0: ['', Validators.required],
      h: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.derivativeForm.valid) {
      const fx = this.derivativeForm.value.fx;
      const x0 = this.derivativeForm.value.x0;
      const h = this.derivativeForm.value.h;
      
      const derivative = this.derivativeService.calculateDerivative(fx, x0, h);
      this.derivativeCalculated.emit({ value: derivative });
    } else {
      console.error('Недійсна форма');
    }
  }
}
