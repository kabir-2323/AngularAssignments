import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public dropDownValue="";
  setDropDownValue(drpValue:any)
  {
    this.dropDownValue=drpValue.target.value;
  }

}
