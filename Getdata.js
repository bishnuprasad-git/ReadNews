import React, { Component } from 'react'
import { Alert, View} from 'react-native'
import { Container, List, ListItem,Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Spinner, Item } from 'native-base'
import Gen from './Gen'
import comp from './General'
import Shownews from './Shownews'

export default class Getdata extends Component{

constructor(props){
    super(props)
    this.state={
        isLoading:true,
        data:null,
        setModalVisible:false,
        modalArticleData:{}
    }
}

handleItemDataOnPress=(articleData)=>{
    this.setState({
        setModalVisible:true,
        modalArticleData:articleData
    })
}


handleModalClose=()=>{
    this.setState({
        setModalVisible:false,
        modalArticleData:{}
    })
}

componentDidMount(){
    comp('general').then(d=>{
        this.setState({
            isLoading:false,
            data:d
        }),error=>{
            Alert.alert("something is wrong")
        }
    })
}

    render(){
        let view= this.state.isLoading ? 
        <View>
            <Spinner color='orange' animating={this.state.isLoading}/>
            <Text style={{color:"red",textAlign:"center"}}>Please wait...</Text>
        </View>
        : (<List dataArray={this.state.data} renderRow={(item)=>{return <Gen onPress={this.handleItemDataOnPress}  data={item} />}}/>)
        return(
            <Container>
                <Content>
                    {view}
                    {/* <Gen /> */}
                </Content>
                <Shownews 
                    showModal={this.state.setModalVisible}
                    articleData={this.state.modalArticleData}
                    onClose={this.handleModalClose}
                />
            </Container>
        )
    }
}
