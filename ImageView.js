import React, {Component} from 'react';
import {Share, Modal, StyleSheet, View, Text, Image, Dimensions, TouchableWithoutFeedback, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
    image : {
        position: 'relative',
    },

    imageView: {
        position: 'relative',  
    },

    mainView: {
        marginTop: 30, 
        borderRadius: 10,
    },

    modalField: {
        width: '100%', 
        height: '100%',
        justifyContent: 'center', 
        
    },

    modalButton: {
        fontSize: 60,
        color: 'white',
        textAlign: 'right',
        paddingRight: 10
    },

    name: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 2
    },

    author: {
        fontSize: 13,
        fontWeight: '600',
        marginBottom: 10,
        color: '#ccc'
    },

    shadow: {
        shadowColor: 'grey',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 10,
        backgroundColor: 'white'
        
    },

    share: {
        fontSize: 20,
        color: '#3e5c9a',
        textAlign: 'right'
    }
});

class ImageView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            screenWidth: Math.floor(Dimensions.get('window').width / 1.1),
            screenHeight: Math.floor(Dimensions.get('window').height / 2),
            imagePress: false
        }

        this.imageViewer = this.imageViewer.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.onShare = this.onShare.bind(this)
    }

    imageViewer() {           
        this.setState({
            imagePress: true
        });

    }
    closeModal() {             
        this.setState({
            imagePress: false
        });
    }

    onShare = async () => {   // Share button
        try {
          const result = await Share.share({
            message: this.props.url,
          });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
    };

    render() {

        return (
           <View style={Object.assign({}, styles.mainView, styles.shadow, { width: this.state.screenWidth }) }>
               <View>
                    <View style={{padding: 10}}>
                        <Text style={styles.name}>{this.props.description ? this.props.description : 'Without Title'}</Text>
                        <Text style={styles.author}>{this.props.author}</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={this.imageViewer}>
                        <Image source={{uri: this.props.url }} style={{width: "100%", height: this.state.screenHeight}} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.onShare}>
                        <View style={{padding: 10}}>
                            <Text style={styles.share}>Share</Text>
                        </View> 
                    </TouchableWithoutFeedback>
               </View>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.imagePress}
                    presentationStyle="fullScreen"
                    onRequestClose={() => this.closeModal()}
                >
                    <View style={{backgroundColor: 'black'}}>
                        <View style={styles.modalField}>
                            <TouchableHighlight onPress={() => { this.closeModal(); }}>
                                <Text style={styles.modalButton}>&times;</Text>
                            </TouchableHighlight>
                            <Image source={{uri: this.props.url}} resizeMode='contain'
                                style={styles.modalImage, 
                                {width: Math.floor(Dimensions.get('window').width),
                                height: Math.floor(Dimensions.get('window').height - 100)}} 
                            />
                        </View>
                    </View>
                </Modal>
           </View>
                   
        ); 
    }    
}

export default ImageView;