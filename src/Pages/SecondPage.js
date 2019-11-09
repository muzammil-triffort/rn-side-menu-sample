import React, { Component } from 'react';
import {View, Text } from 'react-native';

import styles from '../Styles/AppStyle'

export default class SecondPage extends Component {

  static navigationOptions = ({ navigation, props }) => ({
    
    title: "Second Page",
    headerStyle: {
        backgroundColor: '#34eba8',
    },
    headerTintColor: '#fff',
   });

  render() {
    return (
      <View style={styles.MainContainer}>

      </View>
    );
  }
}