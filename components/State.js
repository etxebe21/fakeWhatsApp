import React, {Component} from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { FAKE_STATES } from "../data/data";


export default class State extends Component{

    constructor(props) {
        super(props)
        this.state = {
            stateList : [],
            loaded : false
        }
    }

    componentDimount() {
        axios.get(FAKE_STATES)
        .then((response) => {
            this.setState({
                stateList: response.data,
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
                    data = {this.state.stateList}
                    renderItem ={({item})=> (
                        <ListState
                            first_name= {item.first_name}
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
}