import { TOGGLE_SENSOR } from '../actions';

const sensor = (state = { active: false }, action) => {
  switch (action.type) {
    case TOGGLE_SENSOR:
      return {
        ...state,
        active: !state.active,
      };
    default:
      return state;
  }
};

export default sensor;
