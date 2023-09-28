import React, {Component} from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chat from './components/Chat';
import State from "./components/State";
import Call from "./components/Call";


const Tab = createMaterialTopTabNavigator();

export default class App extends Component {
    render() {
        return(
          
          
            <View style= {styles.mainContainer}>

              <View style= {styles.headerContainer}>
              
                <View style= {styles.leftHeaderContainer}>

                  <Text style={styles.logo}>WhatsApp</Text>
                </View>
                  <View style= {styles.rightHeaderContainer}>

                    <Icon name = "search" color= "#fff" size={23} style={styles.icon} />
                    <Icon name = "more-vert" color= "#fff" size={23} style={styles.icon} />

                  </View>
                
              </View>
              <View style = {styles.contentContainer}>
                  <NavigationContainer>
                  
                    <Tab.Navigator>

                      <Tab.Screen name="CHATS" component={Chat} /> 
                      <Tab.Screen name="ESTADOS" component={State} />
                      <Tab.Screen name="LLAMADAS" component={Call} />

                  </Tab.Navigator>

                  </NavigationContainer>

                </View>
            </View>
            
        )
    }
}


const styles = StyleSheet.create({
  mainContainer: {
      flex: 1,
      backgroundColor: `#F5FCFF`
  },

  headerContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#075e54",
      alignITems: "center"
  },
  contentContainer: {
    flex: 8
  },
  rightHeaderContainer: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  leftHeaderContainer: {
    flexDirection: "row",
    alignItems: "flex-start"
  },
  logo: {
    color: "#ffffff",
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "bold"
  },
  icon: {
    padding: 5,
    
  }

});