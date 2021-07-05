import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SGA';

  public token;
  public identity;
  constructor() {
  }

  ngOnInit() {

    
    // console.log("las vaibles del Storage");
    // console.log(this.identity + this.token);

  }
}
