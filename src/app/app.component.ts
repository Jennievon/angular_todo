import { animate, animateChild, group, query, stagger, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { bounceOutLeftAnimation, fade, fadeInAnimation, slide } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // fade,
    // slide
    trigger('todosAnimation', [
      transition(':enter', [
        group([
          query('h1', [
            style({ transform: 'translateY(-20px)' }),
            animate(1000)
          ]),
          query('@todoAnimation',stagger(200, animateChild()))
        ])
      ])
    ]),

    trigger('todoAnimation', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          params: {
            duration: '500ms'
          }
        })
      ]),
      transition(':leave', [
        style({ color: 'white', backgroundColor: 'red' }),
        animate(300),
        useAnimation(bounceOutLeftAnimation)
      ])
    ])
  ]
})
export class AppComponent {
  todos: any[] = [
    {
      id: 1,
      title: "Do the dishes"
    },
    {
      id: 2,
      title: "Wash the car"
    },
    {
      id: 3,
      title: "Code"
    },
  ]

  createTodo(todo: HTMLInputElement) {
    let newTodo = {
      id: this.todos.length + 1,
      title: todo.value
    }
    this.todos.unshift(newTodo);
    todo.value = ''
  }

  deleteTodo(todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  animationStarted(animation) {
    console.log(animation);
  }

  animationDone(animation) {
    console.log(animation);
  }
}
