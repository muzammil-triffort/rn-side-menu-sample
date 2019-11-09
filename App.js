/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
 
const { width, height } = Dimensions.get('window');

//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Page1 from './src/Pages/Page1';
import Page2 from './src/Pages/Page2';
import Page3 from './src/Pages/Page3';
import Page4 from './src/Pages/Page4';
import Page5 from './src/Pages/Page5';
import SecondPage from './src/Pages/SecondPage'

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./src/Assets/Images/menu.png')}
            style={{ width: 28, height: 25, marginLeft: 8 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

// To Add Header on top of side Menu
const DrawerTopView = (props) => (
  <ScrollView 
    contentContainerStyle={{flexGrow: 1,  flexDirection: 'column', justifyContent: 'flex-start'}} 
    style = {{backgroundColor: '#f7f6f2', height: height}}
    >
      <View style={styles.item}>
        <View style={styles.iconContainer}>
          <Image source={require('./src/Assets/Images/logo.png')} style={styles.icon}></Image>
        </View>
        <Text style={styles.label}>Muzammil Test</Text>
      </View>
    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never', }}>
      <DrawerItems {...props} />
    </SafeAreaView>

      <View style={styles.bottom}>
      <Text style={styles.version}>Version 1.0</Text>
      <Text style={styles.copyright}>Copyright Triffort Technologies. All Rights Reserved</Text>

      </View>

  </ScrollView>
);

// Common navigation style for all Pages
const navigations = ({ navigation }) => ({
  headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
  headerStyle: {
        backgroundColor: '#feb808',
  },
  headerTintColor: '#fff',
  
});

const Page1_Stack = createStackNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: navigations,
  },
  Second: {
    screen: SecondPage,
  },
});

const Page2_Stack = createStackNavigator({
  Page2: {
    screen: Page2,
    navigationOptions: navigations,
  }
});
 
const Page3_Stack = createStackNavigator({
  Page3: {
    screen: Page3,
    navigationOptions: navigations,
  }
});

const Page4_Stack = createStackNavigator({
  Page4: {
    screen: Page4,
    navigationOptions: navigations,
  }
});

const Page5_Stack = createStackNavigator({
  Page5: {
    screen: Page5,
    navigationOptions: navigations,
  }
});

const DrawerNavigator = createDrawerNavigator({
  
  Page1: {
    screen: Page1_Stack,
    navigationOptions: {
      drawerLabel: 'Page One',
    },
  },
  Page2: {
    screen: Page2_Stack,
    navigationOptions: {
      drawerLabel: 'Page Two',
    },
  },
  Page3: {
    screen: Page3_Stack,
    navigationOptions: {
      drawerLabel: 'Page Three',
    },
  },
  Page4: {
    screen: Page4_Stack,
    navigationOptions: {
      drawerLabel: 'Page Four',
    },
  },
  Page5: {
    screen: Page5_Stack,
    navigationOptions: {
      drawerLabel: 'Page Five',
    },
  },
}, 
{
  contentComponent: DrawerTopView,
});

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 165,
    backgroundColor: '#fff'
  },
  label: {
    fontSize: 18,
    marginTop: 0,
    marginBottom: 0,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .87)',
  },
  iconContainer: {
    //marginLeft: 15,
    marginTop: 45,
    backgroundColor: 'transparent'
  },
  icon: {
    width: 50,
    height: 50,
  },
  bottom: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
    height: 70,
    backgroundColor: '#feb808', 
  },
  version: {
    fontSize: 13,
    fontWeight: '500',
    color: '#000',
    marginTop: -10,
  },
  copyright: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    marginTop: 5,
    textAlign: 'center'
  },
});

export default createAppContainer(DrawerNavigator);