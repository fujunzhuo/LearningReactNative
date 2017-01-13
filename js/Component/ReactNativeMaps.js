'use strict';

import React,{ Component } from 'react';
var ReactNative = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    Image

} = ReactNative;

var ReactNativeMaps = require('react-native-maps');

export default class ReactNativeMapsExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        };
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    render() {
        return (
            <ReactNativeMaps
                region={this.state.region}
                onRegionChange={this.onRegionChange}>
                    {this.state.markers.map(marker => (
                        <ReactNativeMaps.Marker
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={marker.description}
                        />
                    ))}
            </ReactNativeMaps>
        );
    }

}
