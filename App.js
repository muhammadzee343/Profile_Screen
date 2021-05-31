import React, {PureComponent} from 'react';
import ProfileScreen from './src/Screens/ProfileScreen/ProfileScreen';

class App extends PureComponent {
  
  render() {
    // const windowWidth = Dimensions.get('window').width;
    // console.log('this.isLandscape', this.state.orientation);
    return (
      <ProfileScreen/>
    );
  }
}

export default App;
