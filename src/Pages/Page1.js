import React, { Component } from 'react';
import {View, Button } from 'react-native';

import styles from '../Styles/AppStyle'

export default class Page1 extends Component {

  static navigationOptions = ({ navigation, props }) => ({
    title: "Page 1",
   });

  render() {

    const {navigate} = this.props.navigation;

    return (

      <View style={styles.MainContainer}>

        <Button
        title="Go To Second Page"
        onPress={() => navigate('Second')}
        />

      </View>
    );
  }
}