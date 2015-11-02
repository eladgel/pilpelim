/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PushNotificationIOS,
  PropTypes,
} = React;

var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var CheckBox = require('react-native-checkbox');
var localConfig = require('./local-config.json');

const PARSE_APP_ID = localConfig.PARSE_APP_ID;//"JpbyZnZrf0nrlL0093X6bk5HUBzIGRdQ6By7OrsR";
const PARSE_JS_KEY = localConfig.PARSE_JS_KEY;//"leXA88bUoh9GhvNMHFyY6MNUi2sOXsVDGjLuUA7a";
const PARSE_REST_KEY = localConfig.PARSE_REST_KEY;//"y8rkVSTxfL3RyE8dhWc97QlhYsstrTKMcMwLPS6h";

Parse.initialize(
  PARSE_APP_ID,
  PARSE_JS_KEY
);

// ParseReact.

var registerParseInstallation = require('./registerParseInstallation');

var AwesomeProject2 = React.createClass({
  getInitialState() {
    return { checked: false };
  },
  
  componentWillMount() {
    PushNotificationIOS.addEventListener('register', this._onRegisterToPushNotifications);
    PushNotificationIOS.checkPermissions((permissions) => {
      console.log('push notification permissions: ', permissions);

      if (!permissions.alert) {
        console.log('we do not have push notification permissions');
        PushNotificationIOS.requestPermissions();
      }
    });
  },

  _onRegisterToPushNotifications(deviceToken) {
    console.log('remote notifications registration successful, deviceToken - ', deviceToken, '; registering on parse!');
    var parseResponse = registerParseInstallation(deviceToken);
    console.log('parse registration response - ', parseResponse);
  },

  onChange(newState) {
    this.setState({checked: newState});
    // console.log('this is ', this);
    console.log('I am checked', newState);
    console.log('this.props.checked is: ', this.state.checked);
    // return true;
  },

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <CheckBox
  label='Label'
  checked={this.state.checked}
  onChange={this.onChange.bind(this)}


/>
      </View>
    );
  }
});




// class AwesomeProject2 extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//     this.state = { checked: false };
//   }

//   componentWillMount() {
//     PushNotificationIOS.addEventListener('register', this._onRegisterToPushNotifications);
//     PushNotificationIOS.checkPermissions((permissions) => {
//       console.log('push notification permissions: ', permissions);

//       if (!permissions.alert) {
//         console.log('we do not have push notification permissions');
//         PushNotificationIOS.requestPermissions();
//       }
//     });
//   }

//   _onRegisterToPushNotifications(deviceToken) {
//     console.log('remote notifications registration successful, deviceToken - ', deviceToken, '; registering on parse!');
//     var parseResponse = registerParseInstallation(deviceToken);
//     console.log('parse registration response - ', parseResponse);
//   }

//   onChange(newState) {
//     this.setState({checked: newState});
//     // console.log('this is ', this);
//     console.log('I am checked', newState);
//     console.log('this.props.checked is: ', this.state.checked);
//     // return true;
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//         <CheckBox
//   label='Label'
//   checked={this.state.checked}
//   onChange={this.onChange.bind(this)}


// />
//       </View>
//     );
//   }
// };


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});


AppRegistry.registerComponent('AwesomeProject2', () => AwesomeProject2);
