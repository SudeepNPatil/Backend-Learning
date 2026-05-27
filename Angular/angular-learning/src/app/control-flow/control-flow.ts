import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  selectedOption: string = '';
  otherOption: string = '';

  isstudentActive = signal<boolean>(false);

  cityList : string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];


  studentList = [
    { name: 'Alice', age: 20, city: 'New York' },
    { name: 'Bob', age: 22, city: 'Los Angeles' },
    { name: 'Charlie', age: 19, city: 'Chicago' },
    { name: 'David', age: 21, city: 'Houston' },
    { name: 'Eve', age: 23, city: 'Phoenix' }
  ]
}
