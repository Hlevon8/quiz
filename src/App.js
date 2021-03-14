
import React, { Component } from 'react';
import { Route,BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import Quiz from './containers/Question/questionList';
import Header from './components/header';
import store from './store';
import './App.css';


class App extends Component {
  render() {
    return (
      <div  className='App'>
        <Provider store={store}>
          <BrowserRouter>
        <Header />
        <Route path="/" component={Quiz} />
        </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;