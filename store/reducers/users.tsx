import { User } from '../../interfaces';

export interface UsersState {
  users: Array<User>;
  user: User | undefined;
}

export const defaultState: UsersState = {
  users: [],
  user: undefined,
};

export const usersReducer = (state = defaultState) => {
  return state;
};
