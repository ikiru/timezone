import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  time = new Date();
  lastTimeZoneSelected = null;

  getDateByzone(timezone) {
    this.time = new Date();
    if (timezone === "MST") {
      this.time.setHours(this.time.getHours() - 1);
    } else if (timezone === "CST") {
      this.time.setHours(this.time.getHours());
    } else if (timezone === "EST") {
      this.time.setHours(this.time.getHours() + 1);
    } else if (timezone === "PST") {
      this.time.setHours(this.time.getHours() - 2);
    }

    this.lastTimeZoneSelected = timezone;
  }
}
