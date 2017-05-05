import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService
} from './events/index'
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'
import { JQ_TOKEN, TOASTR_TOKEN, IToastr, CollapsibleWellComponent,
  SimpleModalComponent, ModalTriggerDirective } from './common/index'

declare let toastr: IToastr
declare let jQuery : Object

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent
  ],
  providers: [
    EventService, 
    { provide: TOASTR_TOKEN, useValue: toastr},
    { provide: JQ_TOKEN, useValue: jQuery},
    EventRouteActivator,
    EventListResolver,
    VoterService,
    AuthService,
    { 
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState 
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}