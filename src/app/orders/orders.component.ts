import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  readonly coffees: Array<string> =
      [
        "Americano",
        "Flat White",
        "Cappuccino",
        "Latte",
        "Espresso",
        "Machiato",
        "Mocha",
        "Hot Chocolate",
        "Tea"
      ];

  coffeeOrder = [];

  constructor(public ordersService: OrdersService)
  {

  }

  ngOnInit() {
  }



  addCoffee = coffee => this.coffeeOrder.push(coffee);

  removeCoffee = coffee => {
    const index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) {
      this.coffeeOrder.splice(index, 1);
    }
  };

  onSubmit = () => {
      this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
      const data = this.ordersService.form.value;

      this.ordersService.createCoffeeOrder(data)
          .then(res => {
              console.log('created');
          });
  }


}
