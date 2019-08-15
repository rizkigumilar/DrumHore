import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import store from './src/publics/redux/store'
import Splash from './src/screens/Splash';

import MainNavigator from './src/publics/navigators/MainNavigator'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      iduser: '',
      token: '',
      view: <Splash />
    }

    AsyncStorage.getItem('token', (error, result) => {
      if (result) {
        this.setState({
          token: result
        })
      }
    })

    AsyncStorage.getItem('iduser', (error, result) => {
      if (result) {
        this.setState({
          iduser: result
        })
      }
    })

  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        view: <MainNavigator />
      })
    }, 2000)
  }
  render() {
    return (
      <Provider store={store}>
        {this.state.view}
      </Provider>
    )
  }
}

export default App