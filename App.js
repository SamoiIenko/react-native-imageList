import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ImageList from './ImageList';
import configureStore from './store';
import { Provider } from 'react-redux';
import { ADD_IMAGE } from './actions/types';
import addImage from './actions/image';
const styles = StyleSheet.create({
    app: {
        alignItems: 'center',
    }
});



const store = configureStore()



export default class App extends Component {  
        
  state = {
    imageName: '',
    images: []
  }

     constructor() {
        super();
    }

  render () {
      return (
            <Provider store = { store }>
                <View style={styles.app}>
                    <ImageList />
                </View>
            </Provider>
      );
  }

}