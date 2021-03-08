import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Alert } from 'react-native'
import { Container, List, ListItem, Header, Content, Card, CardItem, Thumbnail,Text, Button, Icon, Left, Body, Right, Spinner, Item } from 'native-base'
import moment from 'moment'



export default class Gen extends Component {

  constructor(props) {
    super(props)
    this.da = props.data

  }

  handlePress = () => {
    const { url, title } = this.da
    this.props.onPress({ url, title })
  }



  render() {
    const time = moment(this.da.publishedAt || moment.now()).fromNow()
    return (
      <View>
           
            <Card>
            <CardItem style={{color:"red",backgroundColor:"aqua"}}>
              <Left>
                <Thumbnail source={{uri:this.da.urlToImage !=null ? this.da.urlToImage:"https://images.unsplash.com/photo-1602338038343-2c61288bbeea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" }} />
                <Body>
                  <Text>{this.da.source.name}</Text>
                  <Text note>{this.da.author}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: this.da.urlToImage !=null ? this.da.urlToImage:"https://images.unsplash.com/photo-1602338038343-2c61288bbeea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" }} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
              <Button transparent onPress={this.handlePress}>
                        <Text>Read Here</Text>
                      </Button>
              </Left>
              
              <Right>
              <Text note style={{color:"green",fontStyle:"italic"}}>{time}</Text>
              </Right>
            </CardItem>
            </Card>
            </View>

        )
  }
}
