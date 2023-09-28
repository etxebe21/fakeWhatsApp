import React, {Component} from 'react';
import { StyleSheet, View, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class ListCall extends Component {

    render() {

        const video_call = this.props.video_call;
        const missed = this.props.missed;
       
        return (
  
<View style = {styles.listItemContainer}>
    <View style = {styles.avatarContainer}>
      <Image 
          style = {styles.avatar}
          source = {{uri: this.props.image}}
          />
    </View>

    <View style={styles.chatDetailsContainer}>
             <View style={styles.chatDetailsContainerWrap}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameText}>{this.props.first_name}</Text>
                    </View>
       
                    <View style={styles.iconContainer}>
                            {video_call ? (
                                <Icon name="phone" size={33} color="green" />
                            ) : (
                                <Icon name="video" size={33} color="green" />
                            )}
                    </View>
            </View>

            <View style={styles.chatDetailsContainerWrap}>
                <View style={styles.missedContainer}>
                    {missed ? (
                        <Icon name="phone-missed" size={15} color="red" /> 
                    ) : (
                        <Icon name="phone" size={15} color="green" /> 
                    )}
                
                    <Text style={styles.dateText}  marginLeft= {6}>
                        {this.props.date}   {this.props.time}
                    </Text>
                </View>
            </View>
    </View>
</View>
        );
    }
}

const styles = StyleSheet.create({
    listItemContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
    avatarContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    chatDetailsContainer: {
        flex: 4,
        borderBottomColor: 'rgba(92,94,94,0.5)',
        borderBottomWidth: 0.25,
    },
    chatDetailsContainerWrap: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: 5,
    },
    nameContainer: {
        flex: 1,
    },
    dateContainer: {
        justifyContent: 'flex-start',
    },
    iconContainer: {
        width: 40, 
        alignItems: 'flex-end', 
        marginBottom: -20,
        flexDirection: 'row',
    },
    missedContainer: {
        width: 150, 
        alignItems: 'flex-end', 
        flexDirection: 'row',
        padding: 1
    },
    nameText: {
        fontWeight: 'bold',
        color: '#000',
    },
    dateText: {
        fontSize: 12,
    },
    avatar: {
        borderRadius: 30,
        width: 60,
        height: 60,
    },
});