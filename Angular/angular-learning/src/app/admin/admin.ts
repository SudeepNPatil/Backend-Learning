import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit, AfterViewInit, OnDestroy {
  constructor() {
    console.log('Admin component initialized');

    // this is for initialization logic that needs to run when the component is created,
    //  but before the view is fully initialized. It's a good place to set up any necessary data or state for the component. 
  }

  ngOnInit() {
    console.log('Admin component ngOnInit called');

    // this is a lifecycle hook that is called after the component's view has been fully initialized.
    // it is for APi calls, data fetching, or any logic that requires the component's view to be ready.
  }

  ngAfterViewInit() {
    console.log('Admin component ngAfterViewInit called');

    // this is a lifecycle hook that is called after the component's view and its child views have been fully initialized.
    // it is for logic that needs to interact with the component's view or child views, such as DOM manipulation or accessing view elements.
  }

  ngOnDestroy() {
    console.log('Admin component ngOnDestroy called');

    // this is a lifecycle hook that is called just before the component is destroyed.
    // it is for cleanup logic, such as unsubscribing from observables, clearing timers, or releasing any resources that the component may have acquired during its lifecycle.
  }
}
