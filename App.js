/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Slider,
  View
} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

//type Props = {};

class ColorControl extends Component {

  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 25, }}>{this.state.title}</Text>
        <Slider onValueChange={(val) => {
          this.props.onValueChanged(val);
        }}
          step={1} value={this.state.value} minimumValue={0} maximumValue={255} style={{ width: 200 }} />
        <TextInput value={`${this.props.value}`} style={{ width: 35, height: 35, borderColor: 'gray', borderWidth: 1, borderRadius: 5 }} />
      </View>
    )
  }
}
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      red: 100,
      green: 255,
      blue: 255
    }
  }

  onSliderValueChange = (color) => {
    this.setState(color);
    
  }
  renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Color Picker</Text>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>

        {this.renderHeader()}

        <View style={styles.contentContainer}>

          <View style={styles.colorPicker}>

            <View style={styles.colorPick}>
              <ColorControl onValueChanged={(val) => {
                const currentColor = this.state;
                const newColor = { ...currentColor, red: val };
                this.onSliderValueChange(newColor);
              }}
                title='R' value={this.state.red} />
              <ColorControl onValueChanged={(val) => {
                const currentColor = this.state;
                const newColor = { ...currentColor, green: val };
                this.onSliderValueChange(newColor);
              }} 
                title='G' value={this.state.green} />
              <ColorControl onValueChanged={(val) => {
                const currentColor = this.state;
                const newColor = { ...currentColor, blue: val };
                this.onSliderValueChange(newColor);
              }} 
                title='B' value={this.state.blue} />
            </View>

            <View style={{ flex: 1, backgroundColor: `rgb(${this.state.red},${this.state.green},${this.state.blue})` }}>

            </View>

          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    height: 65,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    elevation: 5
  },
  headerText: {
    fontSize: 20,
    color: 'white'
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',

  },
  colorPicker: {

    width: 300,
    height: 400,
    backgroundColor: 'white',
    elevation: 5
  },
  colorPick: {
    flex: 1,
  }
  // colorView: {
  //   flex: 1,
  //   backgroundColor: `rgb(${this.state.red},${this.state.red},${this.state.red})`
  // }
});
