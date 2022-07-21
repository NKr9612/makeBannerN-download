import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
@Input() colors = [];
@Input() percentColor1;
@Input() percentColor2;
@Input() width;
@Input() height;
@Input() fontSize;
@Input() color1;
@Input() color2;

}
