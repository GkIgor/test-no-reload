import { CommonModule } from "@angular/common";
import { Component, HostListener } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [CommonModule, RouterOutlet],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	title = "test-no-reload";

	@HostListener("window:beforeunload", ["$event"])
	handleBeforeUnload(event: BeforeUnloadEvent) {
		event.preventDefault();
	}
}
