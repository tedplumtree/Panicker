import { toggleSensor } from '../../../app/actions';
import combinedReducers from '../../../app/reducers/index';

const combinedState = {
  sensor: {
    active: false,
  },
};

describe('sensor', () => {
  const generateInitialState = sensorState => ({
    ...combinedState,
    sensor: sensorState,
  });

  describe('when toggled', () => {
    describe('when sensor is inactive', () => {
      const initialState = generateInitialState({ active: false });

      it('correctly reduces the action', () => {
        expect(
          combinedReducers(initialState, toggleSensor()),
        ).toMatchSnapshot();
      });
    });

    describe('when sensor is active', () => {
      const initialState = generateInitialState({ active: true });

      it('correctly reduces the action', () => {
        expect(
          combinedReducers(initialState, toggleSensor()),
        ).toMatchSnapshot();
      });
    });
  });

  describe('when passed a nonexistent action', () => {
    const action = { type: 'NONEXISTENT_ACTION' };

    describe('when sensor is in initial state', () => {
      const initialState = generateInitialState(undefined);

      // Since in Redux, it makes most sense for the default reduction to
      // yield the initial state, this is a reasonable pattern for actually
      // testing what the initial state is
      it("doesn't do anything", () => {
        expect(
          combinedReducers(initialState, action),
        ).toMatchSnapshot();
      });
    });

    describe('when sensor is inactive', () => {
      const initialState = generateInitialState({ active: false });

      it("doesn't do anything", () => {
        expect(
          combinedReducers(initialState, action),
        ).toMatchSnapshot();
      });
    });

    describe('when sensor is active', () => {
      const initialState = generateInitialState({ active: true });

      it("doesn't do anything", () => {
        expect(
          combinedReducers(initialState, action),
        ).toMatchSnapshot();
      });
    });
  });
});
