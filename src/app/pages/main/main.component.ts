import { Component, OnInit } from '@angular/core';
import { ManufacturersService } from 'src/app/services/manufacturers.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(public manufacturersService: ManufacturersService) {
    this.manufacturersService.AddMfr();
    this.manufacturersService.AddProdToMfr();
    this.manufacturersService.MfrClicked(-1);
  }

  ngOnInit(): void {}
}
