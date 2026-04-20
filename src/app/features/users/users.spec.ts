import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { User } from './user.model';
import { UserService } from './user.service';
import { UsersStore } from './users.store';

describe('UsersStore', () => {
  let store: InstanceType<typeof UsersStore>;
  let userServiceMock: { getUsers: ReturnType<typeof vi.fn> };

  const fixtureUsers: User[] = [
    {
      id: 1,
      name: 'Alice Johnson',
      username: 'alicej',
      email: 'alice@example.com',
      phone: '555-0001',
      website: 'alice.dev',
      company: { name: 'Acme', catchPhrase: 'Build fast', bs: 'synergy' },
      address: { street: '1 Main', suite: 'A', city: 'Springfield', zipcode: '00001' },
    },
    {
      id: 2,
      name: 'Bob Smith',
      username: 'bobsmith',
      email: 'bob@example.com',
      phone: '555-0002',
      website: 'bob.dev',
      company: { name: 'Globex', catchPhrase: 'Think big', bs: 'leverage' },
      address: { street: '2 Oak', suite: 'B', city: 'Shelbyville', zipcode: '00002' },
    },
    {
      id: 3,
      name: 'Carol Davis',
      username: 'caroldavis',
      email: 'carol@example.com',
      phone: '555-0003',
      website: 'carol.dev',
      company: { name: 'Initech', catchPhrase: 'Flair forever', bs: 'ideate' },
      address: { street: '3 Pine', suite: 'C', city: 'Ogdenville', zipcode: '00003' },
    },
  ];

  beforeEach(() => {
    userServiceMock = {
      getUsers: vi.fn().mockReturnValue(of(fixtureUsers)),
    };

    TestBed.configureTestingModule({
      providers: [{ provide: UserService, useValue: userServiceMock }],
    });

    store = TestBed.inject(UsersStore);
  });

  describe('initial state', () => {
    it('starts with no users', () => {
      expect(store.users()).toEqual([]);
    });

    it('starts with no selected user', () => {
      expect(store.selectedUserId()).toBe(null);
      expect(store.selectedUser()).toBe(null);
    });

    it('starts with empty search term', () => {
      expect(store.searchTerm()).toBe('');
    });

    it('starts with loading false and error null', () => {
      expect(store.loading()).toBe(false);
      expect(store.error()).toBe(null);
    });

    it('hasUsers is false initially', () => {
      expect(store.hasUsers()).toBe(false);
    });
  });

  describe('loadUsers (success)', () => {
    it('populates users on successful fetch', () => {
      store.loadUsers();
      expect(store.users().length).toBe(3);
      expect(store.users()[0].name).toBe('Alice Johnson');
    });

    it('sets loading to false after completion', () => {
      store.loadUsers();
      expect(store.loading()).toBe(false);
    });

    it('clears any previous error', () => {
      userServiceMock.getUsers.mockReturnValueOnce(throwError(() => new Error('Network error')));
      store.loadUsers();
      expect(store.error()).toBe('Network error');

      userServiceMock.getUsers.mockReturnValueOnce(of(fixtureUsers));
      store.loadUsers();
      expect(store.error()).toBe(null);
    });

    it('calls the service', () => {
      store.loadUsers();
      expect(userServiceMock.getUsers).toHaveBeenCalledTimes(1);
    });
  });

  describe('loadUsers (failure)', () => {
    beforeEach(() => {
      userServiceMock.getUsers.mockReturnValue(throwError(() => new Error('Service unavailable')));
    });

    it('sets the error message', () => {
      store.loadUsers();
      expect(store.error()).toBe('Service unavailable');
    });

    it('sets loading to false', () => {
      store.loadUsers();
      expect(store.loading()).toBe(false);
    });

    it('leaves users empty', () => {
      store.loadUsers();
      expect(store.users()).toEqual([]);
    });
  });

  describe('selectUser', () => {
    beforeEach(() => {
      store.loadUsers();
    });

    it('sets the selected user id', () => {
      store.selectUser(2);
      expect(store.selectedUserId()).toBe(2);
    });

    it('computes the selected user object', () => {
      store.selectUser(2);
      expect(store.selectedUser()?.name).toBe('Bob Smith');
    });

    it('returns null when id does not match any user', () => {
      store.selectUser(999);
      expect(store.selectedUser()).toBe(null);
    });

    it('clears the selection when passed null', () => {
      store.selectUser(1);
      store.selectUser(null);
      expect(store.selectedUserId()).toBe(null);
      expect(store.selectedUser()).toBe(null);
    });
  });

  describe('setSearchTerm', () => {
    beforeEach(() => {
      store.loadUsers();
    });

    it('updates the search term', () => {
      store.setSearchTerm('alice');
      expect(store.searchTerm()).toBe('alice');
    });
  });

  describe('filteredUsers', () => {
    beforeEach(() => {
      store.loadUsers();
    });

    it('returns all users when search term is empty', () => {
      expect(store.filteredUsers().length).toBe(3);
    });

    it('filters by name case-insensitively', () => {
      store.setSearchTerm('alice');
      expect(store.filteredUsers().length).toBe(1);
      expect(store.filteredUsers()[0].name).toBe('Alice Johnson');
    });

    it('filters by username', () => {
      store.setSearchTerm('bobsmith');
      expect(store.filteredUsers().length).toBe(1);
      expect(store.filteredUsers()[0].name).toBe('Bob Smith');
    });

    it('filters by email', () => {
      store.setSearchTerm('carol@');
      expect(store.filteredUsers().length).toBe(1);
      expect(store.filteredUsers()[0].name).toBe('Carol Davis');
    });

    it('returns empty array when no users match', () => {
      store.setSearchTerm('nobody');
      expect(store.filteredUsers()).toEqual([]);
    });

    it('ignores leading/trailing whitespace in search', () => {
      store.setSearchTerm('   alice   ');
      expect(store.filteredUsers().length).toBe(1);
    });
  });

  describe('clearError', () => {
    it('clears the error state', () => {
      userServiceMock.getUsers.mockReturnValue(throwError(() => new Error('Network error')));
      store.loadUsers();
      expect(store.error()).toBe('Network error');

      store.clearError();
      expect(store.error()).toBe(null);
    });
  });

  describe('resultCount and hasUsers', () => {
    it('resultCount reflects users loaded', () => {
      store.loadUsers();
      expect(store.resultCount()).toBe(3);
    });

    it('hasUsers becomes true after loading', () => {
      store.loadUsers();
      expect(store.hasUsers()).toBe(true);
    });
  });
});
