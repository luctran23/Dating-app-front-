import { Component, OnInit } from '@angular/core';
import { Girl } from '../../models/girl';
import { GirlService } from '../girl.service';

@Component({
  selector: 'app-girls',
  templateUrl: './girls.component.html',
  styleUrls: ['./girls.component.css']
})
export class GirlsComponent implements OnInit {
  
  public girls = [];

  constructor(private _girlService: GirlService ) { }

  ngOnInit(): void {
    this.getGirls();
  }
  getGirls() {
    this._girlService.getAllGirls().subscribe( girls => this.girls = girls );
  }
}
