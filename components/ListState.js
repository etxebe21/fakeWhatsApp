import React, {Component} from 'react';
import { StyleSheet, View, Text, Image } from "react-native";

export default class ListState extends Component {
        
    render() {
        const recentState = this.props.first_name === 'Recientes';
        return (
            
            <View style = {[styles.listItemContainer, recentState ? styles.recentContainer : null]}>
                <View style = {styles.avatarContainer}>
                    <Image 
                        style = {styles.avatar}
                        source = {{uri: this.props.image}}
                        />
                </View>

            <View style = {styles.chatDetailsContainer}>
                <View style = {[styles.chatDetailsContainerWrap, recentState ? styles.recentContainer : null]}>
                    <View style = {styles.nameContainer}>
                    <Text style={[styles.nameText, recentState ? styles.recentWord : null]}>
                                {this.props.first_name}
                            </Text>
                        </View>
                    </View>
                <View style = {styles.chatDetailsContainerWrap}>
                    <View style = {styles.dateContainer}>
                            <Text style = {styles.dateText}>{this.props.date}    {this.props.time}</Text>
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
        padding: 10,
        position: 'relative',
    },
    stateContainer: {
        position: 'absolute',
        zIndex: 1,
        padding: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        width: '100%', 
      },
      stateText: {
        fontWeight: 'bold',
        fontSize: 16,
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
        flex: 1,   
    },
    dateContainer: {
        justifyContent: "flex-start",
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
    },
    recentContainer: {
        backgroundColor: '#fdf5e6', 
        width: '100%', 
        padding: 10, 
        height: 20,
        borderBottomColor: '#fdf5e6', 
        borderBottomWidth: 10
    },
  
});