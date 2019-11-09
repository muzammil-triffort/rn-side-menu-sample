import React, { Component } from 'react';
import {View, Text } from 'react-native';

import styles from '../Styles/AppStyle'

export default class Page5 extends Component {

  static navigationOptions = ({ navigation, props }) => ({
    title: "Page 5",
   });

  render() {
    return (
      <View style={styles.MainContainer}>

      </View>
    );
  }
}