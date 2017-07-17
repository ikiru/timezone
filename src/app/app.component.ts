import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  time = new Date();
  lastTimeZoneSelected = null;
}

getDateByzone(timezone) {
  this.time = new Date();
  if (timezone === 'MST') {
    this.time.setHour(time.setHours() + 1);
  } else if (timezone === 'CST') {
    this.time.setHour(time.setHours() + 2);
  } else if (timezone === 'EST') {
    his.time.setHour(time.setHours() + 3);
  }
  this.lastTimeZoneSelected = timezone;
}
}
