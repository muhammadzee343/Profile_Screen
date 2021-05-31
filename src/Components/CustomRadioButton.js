import React, {PureComponent} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

class CustomRadioButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      radioButtonStatus: false,
    };
  }
  toggleRadioStatus() {
    this.setState({radioButtonStatus: !this.state.radioButtonStatus});
    console.log('status', this.state.radioButtonStatus);
  }
  render() {
    return (
      <TouchableOpacity
      style={{ height: 20, width: 25,  justifyContent: 'center'}}
        onPress={() => {
          this.toggleRadioStatus();
        }}>
        <View
          style={
            this.state.radioButtonStatus
              ? styles.selectedRadioButton
              : styles.unselectedRadioButton
          }></View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  selectedRadioButton: {
    height: 15,
    width: 15,
    borderColor: '#275cc4',
    borderWidth: 0.5,
    borderRadius: 7,
    backgroundColor: '#275cc4',
  },
  unselectedRadioButton: {
    height: 15,
    width: 15,
    borderColor: '#275cc4',
    borderWidth: 0.5,
    borderRadius: 7,
  },
});

export default CustomRadioButton;
