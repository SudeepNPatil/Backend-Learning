import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  sudeep :string = "Sudeep";
  age : number = 25;
  isLoggedIn : boolean = true;
  date : Date = new Date();
  rollnumber : number = 12345;
  course : string = "Angular";
  maritalstatus : string = "Single";
  demotextcolor : string = "secondary-color";

  constructor() { 
    setTimeout(() => {
      console.log("Updating the marital status after 1 second");
    this.maritalstatus = "Married";
    }, 1000);
  }

  handleclick(){
   alert("Button Clicked");
  }

}


