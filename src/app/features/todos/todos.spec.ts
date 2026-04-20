import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { TodosStore } from './todos.store';

describe('TodosStore', () => {
  let store: InstanceType<typeof TodosStore>;

  beforeEach(() => {
    store = TestBed.inject(TodosStore);
  });

  describe('initial state', () => {
    it('starts with no entities', () => {
      expect(store.entities()).toEqual([]);
    });

    it('starts with filter set to "all"', () => {
      expect(store.filter()).toBe('all');
    });

    it('starts with zero counts', () => {
      expect(store.totalCount()).toBe(0);
      expect(store.activeCount()).toBe(0);
      expect(store.completedCount()).toBe(0);
    });

    it('allCompleted is false when there are no todos', () => {
      expect(store.allCompleted()).toBe(false);
    });
  });

  describe('addTodo', () => {
    it('adds a todo with the given title', () => {
      store.addTodo('Buy milk');
      expect(store.entities().length).toBe(1);
      expect(store.entities()[0].title).toBe('Buy milk');
    });

    it('creates todos as incomplete by default', () => {
      store.addTodo('Buy milk');
      expect(store.entities()[0].completed).toBe(false);
    });

    it('assigns a unique id', () => {
      store.addTodo('First');
      store.addTodo('Second');
      const [first, second] = store.entities();
      expect(first.id).not.toBe(second.id);
    });

    it('assigns a createdAt timestamp', () => {
      const before = Date.now();
      store.addTodo('Buy milk');
      const after = Date.now();
      const todo = store.entities()[0];
      expect(todo.createdAt).toBeGreaterThanOrEqual(before);
      expect(todo.createdAt).toBeLessThanOrEqual(after);
    });

    it('trims whitespace from the title', () => {
      store.addTodo('  Buy milk  ');
      expect(store.entities()[0].title).toBe('Buy milk');
    });

    it('ignores empty or whitespace-only titles', () => {
      store.addTodo('');
      store.addTodo('   ');
      expect(store.entities()).toEqual([]);
    });
  });

  describe('toggleTodo', () => {
    it('toggles an incomplete todo to complete', () => {
      store.addTodo('Buy milk');
      const id = store.entities()[0].id;
      store.toggleTodo(id);
      expect(store.entities()[0].completed).toBe(true);
    });

    it('toggles a complete todo back to incomplete', () => {
      store.addTodo('Buy milk');
      const id = store.entities()[0].id;
      store.toggleTodo(id);
      store.toggleTodo(id);
      expect(store.entities()[0].completed).toBe(false);
    });

    it('is a no-op for unknown ids', () => {
      store.addTodo('Buy milk');
      store.toggleTodo('nonexistent-id');
      expect(store.entities()[0].completed).toBe(false);
    });
  });

  describe('removeTodo', () => {
    it('removes the todo by id', () => {
      store.addTodo('First');
      store.addTodo('Second');
      const idToRemove = store.entities()[0].id;
      store.removeTodo(idToRemove);
      expect(store.entities().length).toBe(1);
      expect(store.entities()[0].title).toBe('Second');
    });

    it('is a no-op for unknown ids', () => {
      store.addTodo('Buy milk');
      store.removeTodo('nonexistent-id');
      expect(store.entities().length).toBe(1);
    });
  });

  describe('clearCompleted', () => {
    it('removes only completed todos', () => {
      store.addTodo('First');
      store.addTodo('Second');
      store.addTodo('Third');
      const firstId = store.entities()[0].id;
      const thirdId = store.entities()[2].id;
      store.toggleTodo(firstId);
      store.toggleTodo(thirdId);

      store.clearCompleted();

      expect(store.entities().length).toBe(1);
      expect(store.entities()[0].title).toBe('Second');
    });

    it('is a no-op when nothing is completed', () => {
      store.addTodo('First');
      store.addTodo('Second');
      store.clearCompleted();
      expect(store.entities().length).toBe(2);
    });
  });

  describe('setFilter', () => {
    it('updates the filter value', () => {
      store.setFilter('active');
      expect(store.filter()).toBe('active');
    });
  });

  describe('filteredTodos', () => {
    beforeEach(() => {
      store.addTodo('Active 1');
      store.addTodo('Completed 1');
      store.addTodo('Active 2');
      const completedId = store.entities()[1].id;
      store.toggleTodo(completedId);
    });

    it('returns all todos when filter is "all"', () => {
      store.setFilter('all');
      expect(store.filteredTodos().length).toBe(3);
    });

    it('returns only incomplete todos when filter is "active"', () => {
      store.setFilter('active');
      expect(store.filteredTodos().length).toBe(2);
      expect(store.filteredTodos().every((t) => !t.completed)).toBe(true);
    });

    it('returns only completed todos when filter is "completed"', () => {
      store.setFilter('completed');
      expect(store.filteredTodos().length).toBe(1);
      expect(store.filteredTodos()[0].title).toBe('Completed 1');
    });

    it('reacts to new todos being added', () => {
      store.setFilter('active');
      const initialCount = store.filteredTodos().length;
      store.addTodo('Active 3');
      expect(store.filteredTodos().length).toBe(initialCount + 1);
    });
  });

  describe('counts', () => {
    it('tracks active count correctly', () => {
      store.addTodo('First');
      store.addTodo('Second');
      store.toggleTodo(store.entities()[0].id);
      expect(store.activeCount()).toBe(1);
    });

    it('tracks completed count correctly', () => {
      store.addTodo('First');
      store.addTodo('Second');
      store.toggleTodo(store.entities()[0].id);
      expect(store.completedCount()).toBe(1);
    });
  });

  describe('allCompleted', () => {
    it('is true when all todos are complete', () => {
      store.addTodo('First');
      store.addTodo('Second');
      store.toggleTodo(store.entities()[0].id);
      store.toggleTodo(store.entities()[1].id);
      expect(store.allCompleted()).toBe(true);
    });

    it('is false when some todos are incomplete', () => {
      store.addTodo('First');
      store.addTodo('Second');
      store.toggleTodo(store.entities()[0].id);
      expect(store.allCompleted()).toBe(false);
    });
  });
});
