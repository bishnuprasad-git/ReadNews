import React, { Component } from 'react'
import { Dimensions, Modal, Share } from 'react-native'
import { WebView } from 'react-native-webview';
import { Container, Header, Content, Body, Left, Icon, Right, Title, Button } from 'native-base'

const webHeight=Dimensions.get('window').height-100;

export default class Shownews extends Component {

    constructor(props) {
        super(props)

    }



    handleClose = () => {
        return this.props.onClose();
    }

    handleShare = () => {
        const {url,title}=this.props.articleData
        message=`${title}\n\nRead More.. click here ${url} \n\nShared via Read News App`
        return Share.share(
            {title,message,url:message},
            {dialogTitle:`Share ${title}`}
        )
    }


    render() {

        const { showModal, articleData, onClose } = this.props
        const { url } = articleData

        if (url != undefined) 
        {
            return (
                <Modal
                    animationType="slide"
                    transparent
                    visible={showModal}
                    onRequestClose={this.handleClose}
                >
                    <Container style={{ margin: 15, marginBottom: 0, backgroundColor: "white" }}>
                        <Header >
                            <Left>
                                <Button onPress={this.handleClose} transparent>
                                    <Icon name="close" style={{ color: "white", fontSize: 20 }} />
                                </Button>
                            </Left>
                            <Body>
                                <Title children={articleData.title} style={{ color: "white" }}></Title>
                            </Body>
                            <Right>
                                <Button onPress={this.handleShare} transparent>
                                    <Icon name="share" style={{ color: "white", fontSize: 20 }} />
                                </Button>
                            </Right>
                        </Header>
                        <Content contentContainerStyle={{height:webHeight}}>
                            <WebView source={{ uri: url }} style={{ flex: 1 }} scrollEnabled={false} javaScriptEnabled={true}  onError={this.handleClose} startInLoadingState scalesPageToFit automaticallyAdjustContentInsets/>




                        </Content>
                    </Container>
                </Modal>
            );
        }
        else
        {
            return null;
        }

    }
}
