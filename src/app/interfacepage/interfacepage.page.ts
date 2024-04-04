import { Component, OnInit } from '@angular/core';
import { Dairy } from './class/dairy';
import { Toy } from './class/toy';

@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
})
export class InterfacepagePage implements OnInit {
  show: string = "";

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() { 
  }

  ras() {
    let toy = new Toy("car", 100, "Audi");
    toy.displayInfo();
    let dairy = new Dairy('Йогурт', 12, new Date(), 'Milky', 0.1);
    dairy.displayInfo();
    var discount = dairy.calculateDiscount();
    var tax = dairy.calculateTax() - ((discount * 20) / 100);
    var result = `Поточна знижка складає ${discount}%. Загальна сума з подактом - ${tax}`;
    this.show = `${dairy.getInfo()} ${result}`;
  };

}
