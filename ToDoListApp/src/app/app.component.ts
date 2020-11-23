import { Component } from '@angular/core';
import { from } from 'rxjs';
import {ToDoListItem} from "./to-do-list-item"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styles: ["div{color: blue}"]
})
export class AppComponent {
  title = 'ToDoListApp';
  
  getTitle = function (): string {
    return this.title;
  }
}
