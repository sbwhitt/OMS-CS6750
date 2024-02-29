import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-prototype',
  standalone: true,
  imports: [NgIf],
  templateUrl: './prototype.component.html',
  styleUrl: './prototype.component.css'
})
export class PrototypeComponent {
  captionsOpen = false;
  captionsEnabled = true;
  settingsOpen = false;
  infoOpen = true;
  playing = false;

  toggleInfo = () => {
    console.log("clicked info close");
    this.infoOpen = !this.infoOpen;
  }

  toggleCaptionMenu = () => {
    this.captionsOpen = !this.captionsOpen;
  }

  toggleSettings = () => {
    this.settingsOpen = !this.settingsOpen;
  }

  openSettings = () => {
    this.toggleSettings();
    this.toggleCaptionMenu();
    this.playing = false;
  }

  toggleFullscreen = () => {}

  togglePlay = () => {
    this.playing = !this.playing;
  }
}
