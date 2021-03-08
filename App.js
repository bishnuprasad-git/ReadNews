import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title,ScrollableTab } from 'native-base';
import About from './About';
import Getdata from './Getdata';
import Business from './Business'
import Tech from './Tech'
import Entertainment from './Entertainment'
import Sports from './Sports';
import Science from './Science';
import Health from './Health';

export default function App() {


  return (
    <View style={styles.container}>
      
      {/* <StatusBar style="auto" /> */}
    
    <Container style={{flex:1}}>
    <Header hasTabs style={{backgroundColor:"black"}}>
          <Left/>
          <Body>
            <Title><Entypo name="news" size={24} color="white" />    News</Title>
          </Body>
          <Right />
        </Header>
      <Tabs renderTabBar={()=> <ScrollableTab />} tabBarUnderlineStyle={{backgroundColor:"red"}}>
        <Tab heading="Breaking" tabStyle={{backgroundColor:"black"}} activeTabStyle={{backgroundColor:"black"}} textStyle={{backgroundColor:"black",color:"white"}} activeTextStyle={{color:"red"}} >
          <Getdata />
        </Tab>
        <Tab heading="Sports" tabStyle={{backgroundColor:"black"}} activeTabStyle={{backgroundColor:"black"}} textStyle={{backgroundColor:"black",color:"white"}} activeTextStyle={{color:"red"}} >
          <Sports />
        </Tab>
        <Tab heading="Health" tabStyle={{backgroundColor:"black"}} activeTabStyle={{backgroundColor:"black"}} textStyle={{backgroundColor:"black",color:"white"}} activeTextStyle={{color:"red"}} >
          <Health />
        </Tab>
        <Tab heading="Entertainment" tabStyle={{backgroundColor:"black"}} activeTabStyle={{backgroundColor:"black"}} textStyle={{backgroundColor:"black",color:"white"}} activeTextStyle={{color:"red"}} >
          <Entertainment />
        </Tab>
        <Tab heading="Business" tabStyle={{backgroundColor:"black"}} activeTabStyle={{backgroundColor:"black"}} textStyle={{backgroundColor:"black",color:"white"}} activeTextStyle={{color:"red"}} >
          <Business />
        </Tab>
        <Tab heading="Technology" tabStyle={{backgroundColor:"black"}} activeTabStyle={{backgroundColor:"black"}} textStyle={{backgroundColor:"black",color:"white"}} activeTextStyle={{color:"red"}} >
          <Tech />
        </Tab>
        <Tab heading="Science" tabStyle={{backgroundColor:"black"}} activeTabStyle={{backgroundColor:"black"}} textStyle={{backgroundColor:"black",color:"white"}} activeTextStyle={{color:"red"}} >
          <Science />
        </Tab>
        <Tab heading="About" tabStyle={{backgroundColor:"black"}} activeTabStyle={{backgroundColor:"black"}} textStyle={{backgroundColor:"black",color:"white"}} activeTextStyle={{color:"red"}} >
          <About />
        </Tab>
      </Tabs>
    </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
