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
  ListView,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

class SubmitPage extends Component {
   constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'Steet 1', 'Avenue 1', 'Temp', 'whatever'
      ])
    };
  }
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
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ListView
          contentContainerStyle={{flex: 1, justifyContent: 'center', alignItems: 'center' }}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
  gotoNext() {
    this.props.navigator.push({
      id: 'MainPage',
      name: 'Home Page',
    });
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
     <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
        <Text style={{color: 'white', margin: 10,}}>
          return
        </Text>
      </TouchableOpacity>
      );
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

module.exports = SubmitPage;