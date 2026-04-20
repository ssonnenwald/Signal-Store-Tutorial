import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TodoFilter } from './todo.model';
import { TodosStore } from './todos.store';

@Component({
  selector: 'app-todos',
  imports: [
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Todos {
  protected readonly store = inject(TodosStore);
  protected readonly newTodoTitle = signal('');

  onAddTodo(): void {
    const title = this.newTodoTitle();
    if (!title.trim()) return;
    this.store.addTodo(title);
    this.newTodoTitle.set('');
  }

  onFilterChange(filter: TodoFilter): void {
    this.store.setFilter(filter);
  }
}
