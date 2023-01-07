import './App.css';
import SearchInput from './components/SearchInput';
import ImageList from './components/ImageList';
import React, { Component } from 'react'
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = { images: [] };
  }

  onSearchSubmit = async (entry) => {
    const response = await axios.get(`https://pixabay.com/api/?key=32659337-65bfd8a6a0cedd70ed21a70c9&q=${entry}&image_type=photo`)
    this.setState({ images: response.data.hits });
  }

  render() {
    return (
      <div className='container py-5 border-l-2 border-r-2 border-sky-900 h-full min-h-screen'>
        <h1 className='font-bold text-center text-xl text-white'>You can search for any image you want.</h1>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}
