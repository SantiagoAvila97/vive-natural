import { Component } from '@angular/core';
import { Footer } from '@shared/components/layout/footer/footer';
import { Header } from '@shared/components/layout/header/header';

@Component({
  selector: 'app-home',
  imports: [Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
