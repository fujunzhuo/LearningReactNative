'use strict';

import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

/**
 * Optional Flowtype state and timer types definition
 */
type State = { animating: boolean; };
type Timer = number;

class ToggleAnimatingActivityIndicator extends Component {
    /**
     * Optional Flowtype state and timer types
     */
    state: State;
    _timer: Timer;

    constructor(props) {
        super(props);
        this.state = {
            animating: true,
        };
    }

    componentDidMount() {
        this.setToggleTimeout();
    }

    componentWillUnmount() {
        clearTimeout(this._timer);
    }

    setToggleTimeout() {
        this._timer = setTimeout(() => {
            this.setState({animating: !this.state.animating});
            this.setToggleTimeout();
        }, 2000);
    }

    render() {
        return (
            <ActivityIndicator
                animating={this.state.animating}
                style={[styles.centering, {height: 80}]}
                size="large"
            />
        );
    }
}

export default class ActivityIndicator1 extends Component {
    render(){
        return(
        <View>
{/*
            {exports.examples[0].render()}
            {exports.examples[1].render()}
            {exports.examples[2].render()}
            {exports.examples[3].render()}
            {exports.examples[4].render()}
            {exports.examples[5].render()}
            {exports.examples[6].render()}
            {exports.examples[7].render()}
*/}
            <ToggleAnimatingActivityIndicator />
        </View>
        );
    }
}

exports.displayName = (undefined: ? string);
exports.framework = 'React';
exports.title = '<ActivityIndicator>';
exports.description = 'Animated loading indicators.';

exports.examples = [
    {
        title: 'Default (small, white)',
        render() {
            return (
                <ActivityIndicator
                    style={[styles.centering, styles.gray]}
                    color="white"
                />
            );
        }
    },
    {
        title: 'Gray',
        render() {
            return (
                <View>
                    <ActivityIndicator
                        style={[styles.centering]}
                    />
                    <ActivityIndicator
                        style={[styles.centering, {backgroundColor: '#eeeeee'}]}
                    />
                </View>
            );
        }
    },
    {
        title: 'Custom colors',
        render() {
            return (
                <View style={styles.horizontal}>
                    <ActivityIndicator color="#0000ff" />
                    <ActivityIndicator color="#aa00aa" />
                    <ActivityIndicator color="#aa3300" />
                    <ActivityIndicator color="#00aa00" />
                </View>
            );
        }
    },
    {
        title: 'Large',
        render() {
            return (
                <ActivityIndicator
                    style={[styles.centering, styles.gray]}
                    size="large"
                    color="white"
                />
            );
        }
    },
    {
        title: 'Large, custom colors',
        render() {
            return (
                <View style={styles.horizontal}>
                    <ActivityIndicator
                        size="large"
                        color="#0000ff"
                    />
                    <ActivityIndicator
                        size="large"
                        color="#aa00aa"
                    />
                    <ActivityIndicator
                        size="large"
                        color="#aa3300"
                    />
                    <ActivityIndicator
                        size="large"
                        color="#00aa00"
                    />
                </View>
            );
        }
    },
    {
        title: 'Start/stop',
        render() {
            return <ToggleAnimatingActivityIndicator />;
        }
    },
    {
        title: 'Custom size',
        render() {
            return (
                <ActivityIndicator
                    style={[styles.centering, {transform: [{scale: 2}]}]}
                    size="large"
                />
            );
        }
    },
    {
        platform: 'android',
        title: 'Custom size (size: 75)',
        render() {
            return (
                <ActivityIndicator
                    style={styles.centering}
                    size={120}
                    color="red"
                />
            );
        }
    },
];


const styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    gray: {
        backgroundColor: '#cccccc',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
    },
});