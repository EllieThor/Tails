import { Component, OnInit } from '@angular/core';
import { ManufacturersService } from 'src/app/services/manufacturers.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css'],
})
export class DisplayProductsComponent implements OnInit {
  constructor(public manufacturersService: ManufacturersService) {}

  ngOnInit(): void {}
}
