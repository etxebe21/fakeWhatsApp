import React, {Component} from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionButton from 'react-native-action-button';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chat from './components/Chat';
import State from "./components/State";
import Call from "./components/Call";

const Tab = createMaterialTopTabNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        listType: Chat 
    };
}

setListType(type) {
    this.setState({ listType: type });
}
    render() {
    
        return(
            
            <View style= {styles.mainContainer}>

              <View style= {styles.headerContainer }>
              
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
                    <Tab.Navigator
                      tabBarOptions={{
                      style: { backgroundColor: 'rgba(7, 94 ,84) '}, 
                      labelStyle: { color: 'rgb(255,255,255) ' }, 
                      tabBarIndicatorStyle: {backgroundColor: "#ffffff",}
                    }}>
                      <Tab.Screen
                        name="CHATS"
                        component={Chat}
                        listeners={{
                            tabPress: (e) => {
                                this.setListType(Chat);
                            }
                        }}
                      />
                      <Tab.Screen
                          name="ESTADOS"
                          component={State}
                          listeners={{
                              tabPress: (e) => {
                                  this.setListType(State);
                              }
                          }}
                      />
                      <Tab.Screen
                          name="LLAMADAS"
                          component={Call}
                          listeners={{
                              tabPress: (e) => {
                                  this.setListType(Call);
                              }
                          }}
                      />
                    </Tab.Navigator>
                  </NavigationContainer>
                </View>

                <ActionButton
                   buttonColor= '#25D366' 
                    hideShadow={true}
                    useNativeFeedback={false}
                    icon={(() => {
                        if (this.state.listType === Chat) {
                            return <Icon name='message' size={20} color='white' />;
                        } else if (this.state.listType === Call) {
                            return <Icon name='call' size={20} color='white' />;
                        } else {
                            return <Icon name='camera-alt' size={20} color='white' />;
                        }
                    })()}
                    style={styles.actionButtonIcon}/>
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
    flex: 8,
    backgroundColor: "#075e54",
    color: "#ffffff",
  },
  rightHeaderContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  leftHeaderContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  logo: {
    color: "#ffffff",
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "bold"
  },
  icon: {
    padding: 5,
    
  },
  actionButtonIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  }

});