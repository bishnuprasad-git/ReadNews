import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native';
import { Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Spinner } from 'native-base'



export default async function comp(category_url) {
    try{
        const api = "372aa53c89e04759956347304f47947d"
    // const url = "http://newsapi.org/v2/top-headlines?country=us&apiKey=372aa53c89e04759956347304f47947d";
    // const url="http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=372aa53c89e04759956347304f47947d"
    const art_url="http://newsapi.org/v2/top-headlines"
    const country_code="in"
    let res=await fetch(`${art_url}?country=${country_code}&category=${category_url}&apiKey=${api}`)
    let res1=await res.json()
    return res1.articles
    }catch(err){
        
    }
    
}
