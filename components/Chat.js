import React, {Component} from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import axios from 'axios';
import { FAKE_CHATS } from "../data/data";
import ListChat from "./ListChat";


export default class Chat extends Component{

    // render() {
    //     return (
    // //         <View><Text>Chats</Text></View>
    // //     );
    

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
            console.log(response);
            this.setState({
                chatList: response.data,
                loaded: true
            })
        })
        .catch(function(error) {
            console.log(error);
        });
    }
//     fetch(FAKE_CHATS)
//     .then((response) => response.json())
//     .then((data) => {
//       this.setState({ chatList: data });
//     })
//     .catch((error) => {
//       console.error("Error fetching chats data: ", error);
//     });
// }

    render() {
        if(this.state.loaded) {
            return(
                <FlatList
                    data = {this.state.chatList}
                    renderItem ={({item})=> (
                        <ListChat 
                            first_name= {item.first_name}
                            message = {item.message}
                            image = {item.image}
                            date = {item.date}
                            time = {item.time}
                            />

                    ) }
                    keyExtractor = {item => item.id}
                    />
            )
        } else {
            return(
                <ActivityIndicator size = "Large" />
            )
        }
    }
// return(    
// <View>

//     <Text>Fake Chats Data:</Text>
//     <Text>{JSON.stringify(this.state.chatList)}</Text>
    
//   </View>
// );
// }
}
