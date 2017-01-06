'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Navigator,
  Picker,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

class InitialPage extends Component {
  state = {
    pickerValue: 'public',
    color: 'red',
    mode: Picker.MODE_DIALOG,
  };
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#246dd5', alignItems: 'center'}}
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }
  renderScene(route, navigator) {
    return (
      <ScrollView
        contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20}}>
        <TextInput
          style={{ height: 40, width: 200, borderWidth: 1, textAlign: 'center'}}
          placeholder="Address of focus" // TODO: center placeholder text
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={{ height: 40, width: 200, borderWidth: 1, textAlign: 'center'}}
          placeholder="Minutes to travel?" 
          onChangeText={(text) => this.setState({text})}
        /> 
        
            
       </View>
        <Picker /* TODO: Figure out why this does and doesn't work */
          style={styles.picker}
          selectedValue={this.state.pickerValue}
          onValueChange={(value) => this.setState({pickerValue: value})}
          mode="dropdown">
          <Picker.Item label="Car" value="car" />
          <Picker.Item label="Public" value="public" />
          <Picker.Item label="Bike" value="bike" />
        </Picker>
          <TouchableHighlight
            onPress={this.gotoNext.bind(this)}
          style={{padding: 40}} >
          <Text style={{color: 'red'}}>submit</Text>
        </TouchableHighlight>  
         </ScrollView>     
              
            
    );
  }
  gotoNext() {
    this.props.navigator.push({
      id: 'SubmitPage',
      name: 'Submit Page',
    });
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          My Neighborhood
        </Text>
      </TouchableOpacity>
    );
  }
};

var styles = StyleSheet.create({
  picker: {
    width: 100,
    height: 40,
    flex: 1,
  },
});

module.exports = InitialPage;