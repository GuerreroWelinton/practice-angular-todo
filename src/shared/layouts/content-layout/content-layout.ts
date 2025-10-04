import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from '@shared/components/header/header';

@Component({
  selector: 'shared-content-layout',
  imports: [RouterOutlet, Header],
  templateUrl: './content-layout.html',
  styleUrl: './content-layout.css',
})
export class ContentLayout {}
