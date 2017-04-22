import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: 
        `
        <div>
            <h1>Upcomping Angular 2 Events</h1>
            <hr />
            <div class="row">
                <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail [event]="event"></event-thumbnail>
                </div>
            </div>
        </div>
        `
})

export class EventsListComponent {
   
}