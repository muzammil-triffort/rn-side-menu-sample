import React, { Component } from 'react';
import {View, Text } from 'react-native';

import styles from '../Styles/AppStyle'

export default class Page4 extends Component {

  static navigationOptions = ({ navigation, props }) => ({
    title: "Page 4",
   });

  render() {
    return (
      <View style={styles.MainContainer}>

      </View>
    );
  }
}