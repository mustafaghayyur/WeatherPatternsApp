import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      	<div className="app">
      		<div className="app-header">
	      		<h1>Waether Patterns App</h1>
	      		<h5>
	      			Search for any Canadian city below to get the weather patterns for the next 5 days!
	      		</h5>
      		</div>
      		<SearchBar />
      		<h4 className="small temp-legend">
      			Temperature in Kelvin ([K] = [°C] + 273.15)
      		</h4>
      		<WeatherList />
    	</div>
    );
  }
}
