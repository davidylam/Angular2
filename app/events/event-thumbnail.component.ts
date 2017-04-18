import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
     <div class="well hoverwell thumbnails">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}} </span>
            <span class="pad-left">
            {{event.location.city}}, {{event.location.country}}</span>
        </div>
    </div>
    `,
    styles: [`
        .pad-left {margin-left: 10px;}
        .well div {color: #bbb";}
    `]
})

export class EventThumbnailComponent{
    @Input() event: any
    someProperty: any = "David was here"

    logFoo(){
        console.log("Hello World");
    }
    displayHello(){
        return "David Lam in displayHello";
    }
}