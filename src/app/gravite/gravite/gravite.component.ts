import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-gravite',
  templateUrl: './gravite.component.html',
  styleUrls: ['./gravite.component.css']
})
export class GraviteComponent implements OnInit {
textDemo:string;
new:Array<any>
  constructor() { }

  ngOnInit(): void {
    this.new=[
      {
          bouton:"SEVERES"
      },
      {
          bouton:"SERIEUSES"
        },
      {
          bouton:"MODEREES"
      },
      {
        bouton:"LEGERES"
    }
  ]
  }

}
