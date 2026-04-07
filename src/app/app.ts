import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Todo } from './todo/todo';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Todo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {


}



