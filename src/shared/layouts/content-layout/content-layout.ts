import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer } from '@shared/components/footer/footer';
import { Header } from '@shared/components/header/header';

@Component({
  selector: 'shared-content-layout',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './content-layout.html',
  styleUrl: './content-layout.css',
})
export class ContentLayout {}
