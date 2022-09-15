import { CHANGE_PROFILE_NAME, TOGGLE_PROFILE_VISIBLE } from './actions';
import { ProfileActions } from './types';

export interface ProfileState {
  name: string;
  visible: boolean;
}

const initialState: ProfileState = {
  name: 'User',
  visible: true,
};

export const profileReducer = (
  state = initialState,
  action: ProfileActions
) => {
  switch (action.type) {
    case TOGGLE_PROFILE_VISIBLE: {
      return {
        ...state,
        visible: !state.visible,
      };
    }
    case CHANGE_PROFILE_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }
    default:
      return state;
  }
};
