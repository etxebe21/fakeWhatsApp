import React, {Component} from 'react';
import { StyleSheet, View, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class ListCall extends Component {

    render() {

        const video_call = this.props.video_call;
       
        return (
  
<View style = {styles.listItemContainer}>
  <View style = {styles.avatarContainer}>
      <Image 
          style = {styles.avatar}
          source = {{uri: this.props.image}}
          />
</View>

<View style = {styles.chatDetailsContainer}>
  <View style = {styles.chatDetailsContainerWrap}>
      <View style = {styles.nameContainer}>
              <Text style = {styles.nameText}>{this.props.first_name}</Text>
          </View>
      </View>
  <View style = {styles.chatDetailsContainerWrap}>
      <View style = {styles.dateContainer}>
              <Text style = {styles.dateText}>{this.props.date}    {this.props.time}</Text>
      </View>   
  </View>
    
        <View style={styles.chatDetailsContainerWrap}>
            <View style={styles.dateContainer}>
            {video_call ? (
                        <Icon name="phone" size={20} color="green" /> 
                    ) : (
                        <Icon name="video" size={20} color="green" /> 
                    )}
            </View>
        </View>
    
  </View>
</View>          
            
        );
    }
}

const styles = StyleSheet.create ({
    listItemContainer: {
        flex: 1,
        flexDirection: "row",
        padding: 10
    },
    avatarContainer: {
        flex: 1,
        alignItems: "flex-start"
    },
    chatDetailsContainer: {
        flex: 4,
        borderBottomColor: "rgba(92,94,94,0.5)",
        borderBottomWidth: 0.25
    },
    chatDetailsContainerWrap: {
        flex: 1,
        flexDirection: "row",
        padding: 5
    },
    nameContainer: {
        alignItems: "flex-start",
        flex: 1
    },
    dateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    msgContainer: {
        flex:1
    },
    nameText: {
        fontWeight: "bold",
        color: "#000"

    },
    dateText: {
        fontSize: 12
    },
    avatar: {
        borderRadius: 30,
        width: 60,
        height: 60
    }

});