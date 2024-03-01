import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { CaptionItemComponent } from '../caption-item/caption-item.component';

interface Option { title: string; active: boolean };

@Component({
  selector: 'app-prototype',
  standalone: true,
  imports: [NgIf, NgFor, CaptionItemComponent],
  templateUrl: './prototype.component.html',
  styleUrl: './prototype.component.css'
})
export class PrototypeComponent {
  captionsOpen = false;
  settingsOpen = false;
  infoOpen = true;
  playing = false;
  audioOptions: Option[] = [
    { title: "English", active: true },
    { title: "Spanish", active: false },
    { title: "French", active: false },
    { title: "German", active: false },
    { title: "Italian", active: false }
  ];
  captionOptions: Option[] = [
    { title: "Off", active: false },
    { title: "English", active: true },
    { title: "Spanish", active: false },
    { title: "French", active: false },
    { title: "German", active: false }
  ];
  selectedCaptionLang: number = 1;

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
        if (this.captionsEnabled()) this.selectCaption(0);
        else this.selectCaption(this.selectedCaptionLang);
        break;
      }
      case ' ': {
        if (!this.settingsOpen && !this.infoOpen) this.togglePlay();
        break;
      }
    }
  }

  captionsEnabled() {
    return !this.captionOptions[0].active;
  }

  getCaptionText() {
    switch (this.captionOptions[this.selectedCaptionLang].title) {
      case "Spanish": {
        return "El veloz zorro marrón salta sobre el perro perezoso.";
      }
      case "French": {
        return "Le renard brun rapide saute par-dessus le chien paresseux.";
      }
      case "German": {
        return "Der schnelle Braunfuchs springt über den faulen Hund.";
      }
      default: {
        return "The quick brown fox jumps over the lazy dog.";
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

  selectAudio(i: number) {
    for (let j = 0; j < this.audioOptions.length; j++) this.audioOptions[j].active = (j === i);
  }

  selectCaption(i: number) {
    for (let j = 0; j < this.captionOptions.length; j++) this.captionOptions[j].active = (j === i);
    if (i !== 0) this.selectedCaptionLang = i;
  }
}
