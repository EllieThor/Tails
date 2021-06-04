import { Component, OnInit } from '@angular/core';
import { ManufacturersService } from 'src/app/services/manufacturers.service';

@Component({
  selector: 'app-mfr-nav',
  templateUrl: './mfr-nav.component.html',
  styleUrls: ['./mfr-nav.component.css'],
})
export class MfrNavComponent implements OnInit {
  constructor(public manufacturersService: ManufacturersService) {}

  ngOnInit(): void {}
}
