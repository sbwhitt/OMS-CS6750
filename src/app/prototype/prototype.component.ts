import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

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

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape': {
        this.settingsOpen = false;
        this.infoOpen = false;
        this.captionsOpen = false;
        break;
      }
      case 'i': {
        if (!this.settingsOpen) this.toggleInfo();
        break;
      }
      case 'c': {
        if (!this.settingsOpen && !this.infoOpen) this.toggleCaptionMenu();
        break;
      }
      case ' ': {
        if (!this.settingsOpen && !this.infoOpen) this.togglePlay();
        break;
      }
    }
  }

  toggleInfo () {
    this.infoOpen = !this.infoOpen;
    this.playing = false;
  }

  toggleCaptionMenu () {
    this.captionsOpen = !this.captionsOpen;
  }

  toggleSettings () {
    this.settingsOpen = !this.settingsOpen;
  }

  openSettings () {
    this.toggleSettings();
    this.toggleCaptionMenu();
    this.playing = false;
  }

  toggleFullscreen() {}

  togglePlay() {
    this.playing = !this.playing;
  }
}
