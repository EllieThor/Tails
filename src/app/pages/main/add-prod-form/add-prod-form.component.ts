import { Component, OnInit } from '@angular/core';
import { ManufacturersService } from 'src/app/services/manufacturers.service';

@Component({
  selector: 'app-add-prod-form',
  templateUrl: './add-prod-form.component.html',
  styleUrls: ['./add-prod-form.component.css'],
})
export class AddProdFormComponent implements OnInit {
  constructor(public manufacturersService: ManufacturersService) {}

  ngOnInit(): void {}
}
