import { CHANGE_PROFILE_NAME, TOGGLE_PROFILE_VISIBLE } from './actions';

export interface ToggleProfileVisible {
  type: typeof TOGGLE_PROFILE_VISIBLE;
}
export interface ChangeProfileName {
  type: typeof CHANGE_PROFILE_NAME;
  name: string;
}

export type ProfileActions = ToggleProfileVisible | ChangeProfileName;
