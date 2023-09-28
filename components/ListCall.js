import React, {Component} from 'react';
import { StyleSheet, View, Text, Image } from "react-native";


export default class ListCall extends Component {
    render() {
        return (

            // <View><Text>ListChats</Text></View>
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
                        <View style = {styles.dateContainer}>
                            <Text style = {styles.dateText}>{this.props.date}{this.props.time}</Text>
                        </View>
                    </View>
                <View style = {styles.chatDetailsContainerWrap}>
                    <View style = {styles.missedContainer}>
                        <Text style = {styles.missedText}></Text>
                    </View>
                </View>
                </View>
            </View>


            
        );
    }
}