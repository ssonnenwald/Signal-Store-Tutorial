import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

type CounterState = {
  count: number;
  step: number;
  history: number[];
};

const initialState: CounterState = {
  count: 0,
  step: 1,
  history: [],
};

export const CounterStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ count, history }) => ({
    isPositive: computed(() => count() > 0),
    isNegative: computed(() => count() < 0),
    doubled: computed(() => count() * 2),
    historyCount: computed(() => history().length),
    canUndo: computed(() => history().length > 0),
  })),
  withMethods((store) => ({
    increment(): void {
      patchState(store, (state) => ({
        count: state.count + state.step,
        history: [...state.history, state.count],
      }));
    },
    decrement(): void {
      patchState(store, (state) => ({
        count: state.count - state.step,
        history: [...state.history, state.count],
      }));
    },
    setStep(step: number): void {
      patchState(store, { step });
    },
    undo(): void {
      patchState(store, (state) => {
        if (state.history.length === 0) return state;
        const previous = state.history[state.history.length - 1];
        return {
          count: previous,
          history: state.history.slice(0, -1),
        };
      });
    },
    reset(): void {
      patchState(store, initialState);
    },
  })),
);
