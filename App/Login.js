import React from 'react';
import {Text, TextInput, TouchableOpacity, View, Image} from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri:
              'https://static.toiimg.com/thumb/msid-74660252,width-1200,height-900,resizemode-4/.jpg',
          }}
          style={{
            width: 120,
            height: 120,
            marginLeft: 135,
            marginTop: 20,
            borderRadius: 30,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        />

        <TextInput
          style={{
            width: 330,
            height: 45,
            borderColor: '#F9C203',
            borderWidth: 2,
            marginTop: 30,
            marginLeft: 30,
            borderRadius: 8,
            fontSize: 17,
            paddingHorizontal: 15,
          }}
          placeholder="Username"></TextInput>
        <TextInput
          style={{
            width: 330,
            height: 45,
            borderColor: '#F9C203',
            borderWidth: 2,
            marginTop: 20,
            marginLeft: 30,
            borderRadius: 8,
            fontSize: 17,
            paddingHorizontal: 15,
          }}
          secureTextEntry={true}
          placeholder="Password"></TextInput>

        <TouchableOpacity
          style={{
            width: 180,
            height: 39,
            backgroundColor: '#F9C203',
            marginTop: 40,
            marginLeft: 100,
            borderRadius: 3,
            textAlign: 'center',
          }}
          onPress={() => this.props.navigation.navigate('Register')}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              marginTop: 6,
              fontSize: 18,
            }}>
            LOG IN
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
