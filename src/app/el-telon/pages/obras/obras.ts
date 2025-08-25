import { Component } from '@angular/core';
import { TuiTitle } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-obras',
  imports: [TuiTitle, TuiHeader],
  templateUrl: './obras.html',
  styleUrls: ['./obras.scss'],
})
export class Obras {}
