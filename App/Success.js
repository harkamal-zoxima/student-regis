import React from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

class Success extends React.Component{
    render(){
        return(
            <View >
                <Text style={{textAlign:"center",fontSize:30,marginTop:200}}>
                Registered Successfully
            </Text>
            
            </View>
        )
    }
}

export default Success;