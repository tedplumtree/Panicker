import { ActionButton } from 'react-native-material-ui';
import { connect } from 'react-redux';
import { toggleSensor } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  icon: (state.sensor.active ? ownProps.deactivateIcon : ownProps.activateIcon),
});

const mapDispatchToProps = dispatch => ({
  onPress: () => {
    dispatch(toggleSensor());
  },
});

export { mapStateToProps, mapDispatchToProps }; // For unit tests

const SensorActionButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActionButton);

export default SensorActionButton;
