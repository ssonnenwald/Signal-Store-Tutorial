import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { addEntity, removeEntity, updateEntity, withEntities } from '@ngrx/signals/entities';
import { Todo, TodoFilter } from './todo.model';

type TodosState = {
  filter: TodoFilter;
};

const initialState: TodosState = {
  filter: 'all',
};

export const TodosStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withEntities<Todo>(),
  withComputed(({ entities, filter }) => ({
    filteredTodos: computed(() => {
      const all = entities();
      switch (filter()) {
        case 'active':
          return all.filter((t) => !t.completed);
        case 'completed':
          return all.filter((t) => t.completed);
        default:
          return all;
      }
    }),
    activeCount: computed(() => entities().filter((t) => !t.completed).length),
    completedCount: computed(() => entities().filter((t) => t.completed).length),
    totalCount: computed(() => entities().length),
    allCompleted: computed(() => {
      const all = entities();
      return all.length > 0 && all.every((t) => t.completed);
    }),
  })),
  withMethods((store) => ({
    addTodo(title: string): void {
      const trimmed = title.trim();
      if (!trimmed) return;
      const todo: Todo = {
        id: crypto.randomUUID(),
        title: trimmed,
        completed: false,
        createdAt: Date.now(),
      };
      patchState(store, addEntity(todo));
    },
    toggleTodo(id: string): void {
      const current = store.entityMap()[id];
      if (!current) return;
      patchState(store, updateEntity({ id, changes: { completed: !current.completed } }));
    },
    removeTodo(id: string): void {
      patchState(store, removeEntity(id));
    },
    clearCompleted(): void {
      const completedIds = store
        .entities()
        .filter((t) => t.completed)
        .map((t) => t.id);
      completedIds.forEach((id) => patchState(store, removeEntity(id)));
    },
    setFilter(filter: TodoFilter): void {
      patchState(store, { filter });
    },
  })),
);
