import { toggleSensor } from '../../app/actions';

describe('toggle sensor action', () => {
  it('generates the action', () => {
    expect(toggleSensor()).toMatchSnapshot();
  });
});
