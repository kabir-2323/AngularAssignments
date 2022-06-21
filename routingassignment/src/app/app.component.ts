import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public dropDownValue="";
  setDropDownValue(drpValue:any){this.dropDownValue=drpValue.target.value;}
  title = 'Assignment1';
}