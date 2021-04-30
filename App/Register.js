import React, {Component, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Picker,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Register = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [datePicker, setDatePicker] = useState();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  return (
    <View>
      <View style={{display:"flex",flexDirection:"row"}}>

      <Image
          source={{
            uri:
              'https://static.toiimg.com/thumb/msid-74660252,width-1200,height-900,resizemode-4/.jpg',
          }}
          style={{width: 50, height: 50, marginLeft:25,marginTop: 20,marginBottom:0,marginRight:0,borderRadius:30,borderBottomLeftRadius:10,borderBottomRightRadius:10}}
        />

        <Text
          style={{
            textAlign: 'center',
            marginTop: 25,
            fontSize: 28,
            color: '#9A9A9A',
            marginLeft: 10,
          }}>
          Student Registration
        </Text>

        
      </View>

      <View style={{width: 270, height: 30}}>
        <TextInput
          style={{
            width: 270,
            height: 45,
            borderColor: '#F9C203',
            borderWidth: 2,
            marginTop: 30,
            marginLeft: 30,
            borderRadius: 8,
            fontSize: 17,
            color: '#9A9A9A',
            paddingHorizontal: 15,
          }}
          placeholder="Date"
          value={datePicker}></TextInput>
      </View>

      <View style={{width: 270, height: 40, marginLeft: 320}}>
        <TouchableOpacity onPress={showDatePicker}>
          <Image
            source={{
              uri:
                'data:image/png;base64,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',
            }}
            style={{width: 45, height: 45}}
          />
        </TouchableOpacity>


        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={e => setDatePicker(e.target)}
          onCancel={hideDatePicker}
        />

        
      </View>

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
          color: '#9A9A9A',
          paddingHorizontal: 15,
        }}
        placeholder="RollNo"
        keyboardType="numeric"></TextInput>
      {/* <TextInput style={{width:330,height:45,borderColor:"#F9C203",borderWidth: 2,marginTop:30,marginLeft:30,borderRadius:4, fontSize:17,color:"#9A9A9A",paddingHorizontal: 15,}} placeholder="Name" ></TextInput> */}

      <View
        style={{
          borderWidth: 2,
          borderColor: '#F9C203',
          width: 330,
          textAlign: 'center',
          marginLeft: 30,
          marginTop: 20,
          borderRadius: 8,
          height: 45,
          color: '#9A9A9A',
        }}>
        <Picker
          style={{marginTop: -5, marginLeft: 5, color: '#9A9A9A'}}
          selectedValue="Department">
          <Picker.Item label="Department"></Picker.Item>
          <Picker.Item label="Engineering"></Picker.Item>
          <Picker.Item label="Medical"></Picker.Item>
          <Picker.Item label="Arts"></Picker.Item>
          <Picker.Item label="Management"></Picker.Item>
        </Picker>
      </View>

      <View
        style={{
          borderWidth: 2,
          borderColor: '#F9C203',
          width: 330,
          textAlign: 'center',
          marginLeft: 30,
          marginTop: 20,
          borderRadius: 8,
          height: 45,
          color: '#9A9A9A',
        }}>
        <Picker
          style={{marginTop: -5, marginLeft: 5, color: '#9A9A9A'}}
          selectedValue="Course">
          <Picker.Item label="Course"></Picker.Item>
          <Picker.Item label="B.TECH"></Picker.Item>
          <Picker.Item label="BCA"></Picker.Item>
          <Picker.Item label="MCA"></Picker.Item>
          <Picker.Item label="MBBS"></Picker.Item>
          <Picker.Item label="DENTAL"></Picker.Item>
          <Picker.Item label="PHYSIOTHERAPY"></Picker.Item>
          <Picker.Item label="BA"></Picker.Item>
          <Picker.Item label="BBA"></Picker.Item>
          <Picker.Item label="MBA"></Picker.Item>
          <Picker.Item label="M.TECH"></Picker.Item>
        </Picker>
      </View>

      <TextInput
        style={{
          width: 330,
          height: 45,
          borderColor: '#F9C203',
          borderWidth: 2,
          marginTop: 20,
          marginLeft: 30,
          borderRadius:8,
          fontSize: 17,
          color: '#9A9A9A',
          paddingHorizontal: 15,
        }}
        placeholder="Enter First Name"></TextInput>
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
          color: '#9A9A9A',
          paddingHorizontal: 15,
        }}
        placeholder="Enter Last Name"></TextInput>
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
          color: '#9A9A9A',
          paddingHorizontal: 15,
        }}
        placeholder="Enter Mobile Number"
        keyboardType="numeric"></TextInput>
      <TextInput
        style={{
          width: 330,
          height: 70,
          borderColor: '#F9C203',
          borderWidth: 2,
          marginTop: 20,
          marginLeft: 30,
          borderRadius: 8,
          fontSize: 17,
          color: '#9A9A9A',
          paddingHorizontal: 15,
        }}
        placeholder="Enter Address"></TextInput>

      <TouchableOpacity
        style={{
          width: 180,
          height: 39,
          backgroundColor: '#F9C203',
          marginTop: 30,
          marginLeft: 100,
          borderRadius: 3,
          textAlign: 'center',
        }} onPress={()=>this.props.navigation.navigate("Success")}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            marginTop: 2,
            fontSize: 23,
          }}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
