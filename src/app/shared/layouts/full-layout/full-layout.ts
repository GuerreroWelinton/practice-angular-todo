import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'shared-full-layout',
  imports: [RouterOutlet],
  templateUrl: './full-layout.html',
  styleUrl: './full-layout.css',
})
export class FullLayout {}
