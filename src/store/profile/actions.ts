import { ChangeProfileName, ToggleProfileVisible } from './types';

export const TOGGLE_PROFILE_VISIBLE = 'PROFILE::TOGGLE_PROFILE_VISIBLE';
export const CHANGE_PROFILE_NAME = 'PROFILE::CHANGE_PROFILE_NAME';

export const toggleProfileVisible = (): ToggleProfileVisible => ({
  type: TOGGLE_PROFILE_VISIBLE,
});
export const changeProfileName = (name: string): ChangeProfileName => ({
  type: CHANGE_PROFILE_NAME,
  name,
});
