import configureStore from 'redux-mock-store';
import {
  mapStateToProps,
  mapDispatchToProps,
} from '../../../app/containers/SensorActionButton';

const mockStore = configureStore([]);

describe('mapStateToProps', () => {
  const dummyOwnProps = {
    activateIcon: 'dummy-activate-icon',
    deactivateIcon: 'dummy-deactivate-icon',
  };

  describe('when sensor is active', () => {
    const fakeStore = mockStore({ sensor: { active: true } });

    it('passes the correct props', () => {
      const props = mapStateToProps(fakeStore.getState(), dummyOwnProps);

      expect(props).toMatchSnapshot();
    });
  });

  describe('when sensor is inactive', () => {
    const fakeStore = mockStore({ sensor: { active: false } });

    it('passes the correct props', () => {
      const props = mapStateToProps(fakeStore.getState(), dummyOwnProps);

      expect(props).toMatchSnapshot();
    });
  });
});

describe('mapDispatchToProps', () => {
  it('passes correct props to connected component', () => {
    const props = mapDispatchToProps(mockStore().dispatch);

    expect(props).toMatchSnapshot();
  });

  it('passes prop onPress that dispatches correct action', () => {
    const fakeStore = mockStore();
    const props = mapDispatchToProps(fakeStore.dispatch);

    props.onPress();

    expect(fakeStore.getActions()).toMatchSnapshot();
  });
});
