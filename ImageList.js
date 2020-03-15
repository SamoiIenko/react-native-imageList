import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import ImageView from './ImageView';
import configureStore from './store';


const store = configureStore();

class ImageList extends Component {
    constructor() {
        super();
		
		this.state = {images: []};
    }

	
	componentDidMount() {
        const url = 'https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';
        
        fetch(url)
          .then( response => response.json() )
          .then( jsonData => {
            this.setState({images: jsonData});
          })
        .catch( error => console.log('Fetch error ' + error));     
  }


  
/* 
    Redux storage
*/
  // componentWillMount() {
  //   const url = 'https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';
        
  //   fetch(url)
  //     .then( response => response.json() )
  //     .then( jsonData => {
  //         store.dispatch(this.state, {type: 'ADD_IMAGE', payload: jsonData});
  //     })
  //     .then(() => {
  // 
  //     })
  //   .catch( error => console.log('Fetch error ' + error));  
  // }
    

    render() {

		  console.log(this.state);
        return(
            <ScrollView style={{position: 'relative', width: '100%'}} centerContent={true}>          
            {			
              this.state.images.map((image, index) => {
                return <View style={{width: '100%', alignItems: 'center', justifyContent: 'center'}} key={image.id}>
                  <ImageView 
                    url={image.urls.regular}
                    description={image.alt_description} 
                    author={image.user.username}
                    download={image.links.download} 
                  />
                </View>
                        			
              })
			      }
            </ScrollView>     
        );
    }
}

export default ImageList;