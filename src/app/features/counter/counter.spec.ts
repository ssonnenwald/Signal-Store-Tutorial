import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { CounterStore } from './counter.store';

describe('CounterStore', () => {
  let store: InstanceType<typeof CounterStore>;

  beforeEach(() => {
    store = TestBed.inject(CounterStore);
  });

  describe('initial state', () => {
    it('starts at zero', () => {
      expect(store.count()).toBe(0);
    });

    it('starts with step of 1', () => {
      expect(store.step()).toBe(1);
    });

    it('starts with empty history', () => {
      expect(store.history()).toEqual([]);
    });
  });

  describe('computed signals', () => {
    it('isPositive reflects count > 0', () => {
      expect(store.isPositive()).toBe(false);
      store.increment();
      expect(store.isPositive()).toBe(true);
    });

    it('isNegative reflects count < 0', () => {
      expect(store.isNegative()).toBe(false);
      store.decrement();
      expect(store.isNegative()).toBe(true);
    });

    it('doubled returns count * 2', () => {
      expect(store.doubled()).toBe(0);
      store.increment();
      store.increment();
      expect(store.doubled()).toBe(4);
    });

    it('canUndo is false when history is empty', () => {
      expect(store.canUndo()).toBe(false);
    });

    it('canUndo is true once there is history', () => {
      store.increment();
      expect(store.canUndo()).toBe(true);
    });

    it('historyCount tracks history length', () => {
      expect(store.historyCount()).toBe(0);
      store.increment();
      store.increment();
      expect(store.historyCount()).toBe(2);
    });
  });

  describe('increment', () => {
    it('increases count by step', () => {
      store.increment();
      expect(store.count()).toBe(1);
    });

    it('respects custom step', () => {
      store.setStep(5);
      store.increment();
      expect(store.count()).toBe(5);
    });

    it('pushes previous value to history', () => {
      store.increment();
      store.increment();
      expect(store.history()).toEqual([0, 1]);
    });
  });

  describe('decrement', () => {
    it('decreases count by step', () => {
      store.decrement();
      expect(store.count()).toBe(-1);
    });

    it('can cross zero', () => {
      store.increment();
      store.decrement();
      store.decrement();
      expect(store.count()).toBe(-1);
      expect(store.isNegative()).toBe(true);
    });
  });

  describe('setStep', () => {
    it('updates the step value', () => {
      store.setStep(10);
      expect(store.step()).toBe(10);
    });

    it('does not reset the count', () => {
      store.increment();
      store.setStep(10);
      expect(store.count()).toBe(1);
    });
  });

  describe('undo', () => {
    it('reverts count to the previous value', () => {
      store.increment();
      store.increment();
      store.increment();
      expect(store.count()).toBe(3);
      store.undo();
      expect(store.count()).toBe(2);
    });

    it('removes the last history entry', () => {
      store.increment();
      store.increment();
      store.undo();
      expect(store.history()).toEqual([0]); // was [], should be [0]
    });

    it('empties history after undoing every action', () => {
      store.increment();
      store.increment();
      store.undo();
      store.undo();
      expect(store.history()).toEqual([]);
    });

    it('is a no-op when history is empty', () => {
      store.undo();
      expect(store.count()).toBe(0);
      expect(store.history()).toEqual([]);
    });

    it('can chain multiple undos', () => {
      store.increment();
      store.increment();
      store.increment();
      store.undo();
      store.undo();
      expect(store.count()).toBe(1);
    });
  });

  describe('reset', () => {
    it('returns all state to initial values', () => {
      store.setStep(5);
      store.increment();
      store.increment();
      store.reset();
      expect(store.count()).toBe(0);
      expect(store.step()).toBe(1);
      expect(store.history()).toEqual([]);
    });
  });
});
