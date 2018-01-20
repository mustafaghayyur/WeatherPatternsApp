import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {

	render(){
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Preasure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
			)
	}

	renderWeather(cityData){
		if(cityData == null){
			return true;
		}

		const tempsArr = cityData.list.map(weather => weather.main.temp);
		const pressArr = cityData.list.map(weather => weather.main.pressure);
		const humArr = cityData.list.map(weather => weather.main.humidity);

		return (
			<tr key={cityData.city.name}>
				<td>
					<GoogleMap lon={cityData.city.coord.lon} lat={cityData.city.coord.lat} />
				</td>
				<td>
					<Chart data={tempsArr} color="orange" height={120} width={180} />
					<div>
						Average: {_.round(_.sum(tempsArr)/tempsArr.length)}K
					</div>
				</td>
				<td>
					<Chart data={pressArr} color="red" height={120} width={180} />
					<div>
						Average: {_.round(_.sum(pressArr)/pressArr.length)}hPa
					</div>					
				</td>
				<td>
					<Chart data={humArr} color="grey" height={120} width={180} />
					<div>
						Average: {_.round(_.sum(humArr)/humArr.length)}%
					</div>
				</td>
			</tr>
		);
	}

}

// the state.weather arg could be replaced with { weather }
function mapStateToProps({weather}){
	return { weather }

}

export default connect(mapStateToProps)(WeatherList);