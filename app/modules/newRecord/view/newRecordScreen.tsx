/**
 * New Record Screen
 * @format
 */

import React, {useState} from 'react';
import {Image, Pressable, StatusBar, TextInput, View} from 'react-native';
import * as Progress from 'react-native-progress';
import Slider from 'react-native-slider';
import CheckBox from 'react-native-check-box';

import {Screen, Header, Label, Button} from '@app/components';
import {Images} from '@app/constants';
import {Colors, useTheme} from '@app/styles';
import {getStyles} from './styles';

function NewRecordScreen({navigation}: any) {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lentgth, setLength] = useState<Number>(12);
  const [NumberCheckBox, setNumberCheckBox] = useState(false);
  const [symbolsCheckBox, setSymbolsCheckBox] = useState(false);
  const [lowerCheckBox, setLowerCheckBox] = useState(false);
  const [upperCheckBox, setUpperCheckBox] = useState(false);

  return (
    <Screen style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <Header title="New record" />
      <View style={styles.container}>
        <View style={{marginTop: 30}}>
          <View style={styles.nameUserIdContainer}>
            <Label style={{textAlign: 'center'}}>Name</Label>
            <TextInput
              value={name}
              onChangeText={value => setName(value)}
              placeholder="website or app name"
              placeholderTextColor={Colors.dustyGray}
              style={styles.inputStyle}
            />
            <Image source={Images.tickCircle} style={styles.tickCircle} />
          </View>
          <View style={styles.nameUserIdContainer}>
            <Label>User id</Label>
            <TextInput
              value={email}
              onChangeText={value => setEmail(value)}
              placeholder="username or email id"
              placeholderTextColor={Colors.dustyGray}
              style={styles.inputStyle}
            />
            <Image source={Images.tickCircle} style={styles.tickCircle} />
          </View>
        </View>
        <View style={styles.borderContainer}></View>
        <Label style={{alignSelf: 'center', color: Colors.Shark}}>
          Password
        </Label>
        <View style={styles.passwordFieldContainer}>
          <TextInput
            value={password}
            maxLength={lentgth}
            onChangeText={value => setPassword(value)}
            placeholderTextColor={Colors.dustyGray}
            style={{
              width: '85%',
            }}
          />
          <Pressable>
            <Image
              source={Images.refreshIcon}
              style={{width: 20, height: 20}}
            />
          </Pressable>
        </View>
        <Progress.Bar
          progress={0.8}
          width={305}
          style={styles.passwordProgressStyle}
          borderWidth={0}
          color="#D9D9D9"
          // color={
          //   item?.value >= 0.8
          //     ? '#1ED760'
          //     : item?.value <= 0.3
          //     ? '#E30A17'
          //     : '#F8981D'
          // }
        />
        <View style={styles.passwordLengthContainer}>
          <Label>Length</Label>
          <TextInput
            value={lentgth < 51 ? lentgth?.toString() : 50}
            maxLength={2}
            onChangeText={value => {
              value < 51 ? setLength(Number(value)) : setLength(Number(50));
            }}
            placeholder="12"
            placeholderTextColor={Colors.dustyGray}
            style={styles.passwordLengthInput}
          />
          <Slider
            value={lentgth < 51 ? lentgth : 50}
            minimumValue={0}
            maximumValue={50}
            style={styles.sliderStyle}
            trackStyle={styles.sliderTrackStyle}
            thumbStyle={styles.thumbStyle}
            minimumTrackTintColor="#105DFB"
            maximumTrackTintColor="#9B9B9B"
            onValueChange={(it: string) => {
              setLength(parseInt(it));
            }}
          />
        </View>
        <View style={styles.numbersCheckContainer}>
          <Label>Numbers</Label>
          <CheckBox
            isChecked={NumberCheckBox}
            checkedCheckBoxColor={'#105DFB'}
            onClick={() => {
              setNumberCheckBox(!NumberCheckBox);
            }}
          />
          <Label>Symbols</Label>
          <CheckBox
            isChecked={symbolsCheckBox}
            checkedCheckBoxColor={'#105DFB'}
            onClick={() => {
              setSymbolsCheckBox(!symbolsCheckBox);
            }}
          />
        </View>
        <View style={styles.numbersCheckContainer}>
          <Label>Lowercase</Label>
          <CheckBox
            isChecked={lowerCheckBox}
            checkedCheckBoxColor={'#105DFB'}
            onClick={() => {
              setLowerCheckBox(!lowerCheckBox);
            }}
          />
          <Label>Uppercase</Label>
          <CheckBox
            isChecked={upperCheckBox}
            checkedCheckBoxColor={'#105DFB'}
            onClick={() => {
              setUpperCheckBox(!upperCheckBox);
            }}
          />
        </View>
        <View style={styles.bottomButtonContainer}>
          <Pressable style={styles.copyPasswordButton}>
            <Label style={styles.copyButtonLabel}>Regenerate</Label>
          </Pressable>
          <Pressable style={styles.copyPasswordButton}>
            <Label style={styles.copyButtonLabel}>Save password</Label>
          </Pressable>
        </View>
        <Label style={styles.orLabel}>OR</Label>
        <Button
          title="Add manually"
          buttonLabelStyle={styles.addManualyButtonLabel}
          buttonContainerStyle={styles.manualyButtonContainer}
        />
      </View>
    </Screen>
  );
}

export {NewRecordScreen};
