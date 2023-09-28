import React, {Component} from "react";
import { StyleSheet } from "react-native";


export default class ListChat extends Component {
    render() {
        return (

            <View><Text>ListChats</Text></View>
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