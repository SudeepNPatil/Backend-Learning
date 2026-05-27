import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  name : string = 'Angular';
  angularversion = signal<any>("signals");

  array = signal(['Angular', 'React', 'Vue']);

  updateversion(){
    this.angularversion.set("Angular updated to latest version");
  }

  updatearray(){
    this.array.update(arr => [...arr,'new framework']);
  }

  angularobj = signal({name:'Angular', version: '12'});

  updateangularobj(){
    this.angularobj.update(obj => ({...obj, version: '13'}));
  }


}
