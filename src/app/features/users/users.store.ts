import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { pipe, switchMap, tap } from 'rxjs';
import { User } from './user.model';
import { UserService } from './user.service';

type UsersState = {
  users: User[];
  selectedUserId: number | null;
  searchTerm: string;
  loading: boolean;
  error: string | null;
};

const initialState: UsersState = {
  users: [],
  selectedUserId: null,
  searchTerm: '',
  loading: false,
  error: null,
};

export const UsersStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ users, selectedUserId, searchTerm }) => ({
    filteredUsers: computed(() => {
      const term = searchTerm().toLowerCase().trim();
      if (!term) return users();
      return users().filter(
        (u) =>
          u.name.toLowerCase().includes(term) ||
          u.username.toLowerCase().includes(term) ||
          u.email.toLowerCase().includes(term),
      );
    }),
    selectedUser: computed(() => {
      const id = selectedUserId();
      if (id === null) return null;
      return users().find((u) => u.id === id) ?? null;
    }),
    hasUsers: computed(() => users().length > 0),
    resultCount: computed(() => users().length),
  })),
  withMethods((store, userService = inject(UserService)) => ({
    loadUsers: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap(() =>
          userService.getUsers().pipe(
            tapResponse({
              next: (users) => patchState(store, { users, loading: false }),
              error: (err: Error) => patchState(store, { loading: false, error: err.message }),
            }),
          ),
        ),
      ),
    ),
    selectUser(id: number | null): void {
      patchState(store, { selectedUserId: id });
    },
    setSearchTerm(term: string): void {
      patchState(store, { searchTerm: term });
    },
    clearError(): void {
      patchState(store, { error: null });
    },
  })),
);
