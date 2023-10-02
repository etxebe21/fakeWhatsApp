import React, {Component} from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { FAKE_STATES } from "../data/data";
import axios from 'axios';
import ListState from "./ListState";

export default class State extends Component{

    constructor(props) {
        super(props)
        this.state = {
            stateList : [],
            loaded : false
        }
    }

    componentDidMount() {
        axios.get(FAKE_STATES)
        .then((response) => {
            const myState = {
                id: 1,
                first_name: 'Mi Estado',
                date: 'añade actualización',
                image: 'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            };

            const recent = {
                id: 2,
                first_name: 'Recientes',
            };

            const stateList = [myState,recent, ...response.data];
            
            this.setState({
                stateList,
                loaded: true
            });
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