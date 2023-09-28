import React, {Component} from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import axios from 'axios';
import { FAKE_CHATS } from "../data/data";


export default class Chat extends Component{

    render() {
        return (
            <View><Text>Chats</Text></View>
        );
    }

    constructor(props) {
        super(props)
        this.state = {
            chatList : [],
            loaded : false
        }
    }

    componentDimount() {
        axios.get(FAKE_CHATS)
        .then((response) => {
            this.setState({
                chatList: response.data,
                loaded: true
            })
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    render() {
        if(this.state.loaded) {
            return(
                <FlatList
                    data = {this.state.chatList}
                    renderItem ={({item})=> <Text>{item.first_name}</Text>}
                    keyExtractor = {item => item.id}
                    />
            )
        } else {
            return(
                <ActivityIndicator size = "Large" />
            )
        }
    }
    
}

