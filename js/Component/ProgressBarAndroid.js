'use strict';


var ProgressBar = require('ProgressBarAndroid');
var React = require('React');

var TimerMixin = require('react-timer-mixin');

const ReactNative = require('react-native');
const {
    KeyboardAvoidingView,
    Modal,
    SegmentedControlIOS,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    ScrollView,
    View,
} = ReactNative;
class UIExplorerBlock extends React.Component {
    props: {
        title?: string,
        description?: string,
    };

    static propTypes = {
        title: React.PropTypes.string,
        description: React.PropTypes.string,
    };

    state = {description: (null: ?string)};

    render() {
        var description;
        if (this.props.description) {
            description =
                <Text style={styles.descriptionText}>
                    {this.props.description}
                </Text>;
        }

        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>
                        {this.props.title}
                    </Text>
                    {description}
                </View>
                <View style={styles.children}>
                    {
                        // $FlowFixMe found when converting React.createClass to ES6
                        this.props.children}
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        backgroundColor: '#ffffff',
        margin: 10,
        marginVertical: 5,
        overflow: 'hidden',
    },
    titleContainer: {
        borderBottomWidth: 0.5,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 2.5,
        borderBottomColor: '#d6d7da',
        backgroundColor: '#f6f7f8',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    titleText: {
        fontSize: 14,
        fontWeight: '500',
    },
    descriptionText: {
        fontSize: 14,
    },
    disclosure: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 10,
    },
    disclosureIcon: {
        width: 12,
        height: 8,
    },
    children: {
        margin: 10,
    }
});




var MovingBar = React.createClass({
    mixins: [TimerMixin],

    getInitialState: function() {
        return {
            progress: 0
        };
    },

    componentDidMount: function() {
        this.setInterval(
            () => {
                var progress = (this.state.progress + 0.02) % 1;
                this.setState({progress: progress});
            }, 50
        );
    },

    render: function() {
        return <ProgressBar progress={this.state.progress} {...this.props} />;
    },
});

var ProgressBarAndroidExample = React.createClass({

    statics: {
        title: '<ProgressBarAndroid>',
        description: 'Visual indicator of progress of some operation. ' +
        'Shows either a cyclic animation or a horizontal bar.',
    },

    render: function() {
        return (
        <ScrollView>


            <View title="ProgressBar Examples">
                <UIExplorerBlock title="Default ProgressBar">
                    <ProgressBar />
                </UIExplorerBlock>

                <UIExplorerBlock title="Small ProgressBar">
                    <ProgressBar styleAttr="Small" />
                </UIExplorerBlock>

                <UIExplorerBlock title="Large ProgressBar">
                    <ProgressBar styleAttr="Large" />
                </UIExplorerBlock>

                <UIExplorerBlock title="Inverse ProgressBar">
                    <ProgressBar styleAttr="Inverse" />
                </UIExplorerBlock>

                <UIExplorerBlock title="Small Inverse ProgressBar">
                    <ProgressBar styleAttr="SmallInverse" />
                </UIExplorerBlock>

                <UIExplorerBlock title="Large Inverse ProgressBar">
                    <ProgressBar styleAttr="LargeInverse" />
                </UIExplorerBlock>

                <UIExplorerBlock title="Horizontal Indeterminate ProgressBar">
                    <ProgressBar styleAttr="Horizontal" />
                </UIExplorerBlock>

                <UIExplorerBlock title="Horizontal ProgressBar">
                    <MovingBar styleAttr="Horizontal" indeterminate={false} />
                </UIExplorerBlock>

                <UIExplorerBlock title="Large Red ProgressBar">
                    <ProgressBar styleAttr="Large" color="red" />
                </UIExplorerBlock>

                <UIExplorerBlock title="Horizontal Black Indeterminate ProgressBar">
                    <ProgressBar styleAttr="Horizontal" color="black" />
                </UIExplorerBlock>

                <UIExplorerBlock title="Horizontal Blue ProgressBar">
                    <MovingBar styleAttr="Horizontal" indeterminate={false} color="blue" />
                </UIExplorerBlock>
            </View>

        </ScrollView>
        );
    },
});

module.exports = ProgressBarAndroidExample;