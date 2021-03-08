import React, { Component } from 'react'
import {Text} from 'react-native'
import {Card} from 'native-base'
// import {imageSearch} from "react-native-google-image-search";

// imageSearch("cats").then(images => {
//     return images.map(image => console.log(image.link));
//   });

export default class About extends Component {
    render() {
        return (
            <Card>
            <Text>
                Developer : Bishnu Prasad Behera
                {"\n"}{"\n"}
                App Version : 1.0.0
                {"\n"}{"\n"}
                App Features : User can read the full news if internet connection is working properly and can also share the news via SMS, WhatsApp, Twitter etc.{"\n"}{"\n"}
                Stay tune and Stay Safe.
            </Text>
            </Card>
        )
    }
}
