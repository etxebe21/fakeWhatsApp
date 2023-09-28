import React, {Component} from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { FAKE_CALLS } from "../data/data";
import ListCall from "./ListCall";


export default class Call extends Component{

    
            constructor(props) {
                super(props)
                this.state = {
                    callList : [],
                    loaded : false
                }
            }
        
            componentDimount() {
                axios.get(FAKE_CALLS)
                .then((response) => {
                    this.setState({
                        ccallList: response.data,
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
                            data = {this.state.callList}
                            renderItem ={({item})=> (
                                <ListCall
                                    first_name= {item.first_name}
                                    missed = {item.missed}
                                    image = {item.image}
                                    date = {item.date}
                                    time = {item.time}
                                    video_call = {item.video_call}
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
}