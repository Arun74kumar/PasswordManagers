/**
 * New Record Screen
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  TextInput,
  View,
} from 'react-native';
import * as Progress from 'react-native-progress';
import Slider from 'react-native-slider';
import CheckBox from 'react-native-check-box';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {firebase} from '@react-native-firebase/database';
import zxcvbn from 'zxcvbn';

import {Screen, Header, Label, Button} from '@app/components';
import {Images} from '@app/constants';
import {Routes} from '@app/navigator';
import {Colors, useTheme} from '@app/styles';
import {getStyles} from './styles';

function NewRecordScreen({navigation}: any) {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lentgth, setLength] = useState<Number>(8);
  const [NumberCheckBox, setNumberCheckBox] = useState(true);
  const [symbolsCheckBox, setSymbolsCheckBox] = useState(false);
  const [lowerCheckBox, setLowerCheckBox] = useState(true);
  const [upperCheckBox, setUpperCheckBox] = useState(false);
  const [manualPassword, setManualPassword] = useState('');
  const [showManualInput, setManualInput] = useState(false);
  const [validationPassword, setValidationPassword] = useState(true);
  const [manualButtonShow, setManualButtonshow] = useState(true);
  const [paswordScore, setPasswordScore] = useState();

  useEffect(() => {
    const loadScript = async () => {
      try {
        const result = await zxcvbn(password ? password : manualPassword);
        setPasswordScore(result?.score);
      } catch (error) {
        console.error('error:', error);
      }
    };
    loadScript();
  }, [password, manualPassword]);

  const reference = firebase
    .app()
    .database('https://passwordmanager-52ece-default-rtdb.firebaseio.com/')
    .ref('/password');

  const getRandomIntValue = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const generatePassword = (length: number) => {
    length = getRandomIntValue(12, 18);
    const numberChars = '0123456789';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const specialChars = '!@#$%^&*()+_-=}{[]|:;"/?.><,`~';
    const allChars = NumberCheckBox
      ? numberChars
      : '' + upperCheckBox
      ? upperChars
      : '' + lowerCheckBox
      ? lowerChars
      : '' + symbolsCheckBox
      ? specialChars
      : '';
    const randPasswordArray: string[] = [
      NumberCheckBox ? numberChars : '',
      upperCheckBox ? upperChars : '',
      lowerCheckBox ? lowerChars : '',
      symbolsCheckBox ? specialChars : '',
    ];
    randPasswordArray.fill(allChars, 4);
    const shuffledArray = shuffleArray(randPasswordArray.join('').split(''));
    setPassword(shuffledArray.join(''));
  };

  return (
    <Screen style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <Header title="New record" />
      <ScrollView style={styles.container}>
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
        {showManualInput ? (
          <>
            <TextInput
              value={manualPassword}
              maxLength={32}
              onChangeText={value => setManualPassword(value)}
              placeholderTextColor={Colors.dustyGray}
              style={styles.manualInputStyle}
            />
            <Pressable
              style={
                name !== '' && email !== '' && manualPassword?.length >= 8
                  ? [
                      styles.copyPasswordButton,
                      {alignSelf: 'center', marginTop: 30, width: '90%'},
                    ]
                  : [
                      styles.disabledButton,
                      {alignSelf: 'center', marginTop: 30, width: '90%'},
                    ]
              }
              onPress={() => {
                if (
                  name !== '' &&
                  email !== '' &&
                  manualPassword?.length >= 8
                ) {
                  reference.push().set({
                    appName: name,
                    password: manualPassword,
                    email: email,
                    score: paswordScore,
                    status:
                      paswordScore && paswordScore == 4
                        ? 'Safe'
                        : paswordScore >= 0 && paswordScore <= 2
                        ? 'Risk'
                        : 'Weak',
                  });
                  navigation.navigate(Routes.bottomTabBar);
                }
              }}>
              <Label style={styles.copyButtonLabel}>Save password</Label>
            </Pressable>
          </>
        ) : (
          <View>
            <View style={styles.passwordFieldContainer}>
              <TextInput
                editable={false}
                value={password}
                maxLength={Number(lentgth)}
                style={{
                  width: '85%',
                  color: Colors.black,
                }}
              />

              <Pressable
                onPress={() => {
                  if (lentgth >= 8) {
                    setValidationPassword(true);
                    generatePassword(Number(lentgth));
                  }
                }}>
                <EvilIcons name="refresh" size={30} color={'black'} />
              </Pressable>
            </View>
            <Progress.Bar
              progress={
                paswordScore == undefined
                  ? 0
                  : Number(paswordScore) == 4
                  ? 1
                  : paswordScore == 3
                  ? 0.75
                  : paswordScore == 2
                  ? 0.5
                  : 0.25
              }
              width={305}
              style={styles.passwordProgressStyle}
              borderWidth={0}
              color={
                paswordScore && paswordScore >= 4
                  ? '#1ED760'
                  : paswordScore >= 0 && paswordScore <= 2
                  ? '#E30A17'
                  : '#F8981D'
              }
            />
            {!validationPassword ? (
              <Label style={{color: 'red', alignSelf: 'center'}}>
                minimum password length 8
              </Label>
            ) : null}
            <View style={styles.passwordLengthContainer}>
              <Label>Length</Label>
              <TextInput
                keyboardType="numeric"
                value={
                  lentgth > 33 ? 32 : lentgth < 8 ? 8 : lentgth?.toString()
                }
                maxLength={2}
                onFocus={() => {
                  setValidationPassword(!validationPassword);
                }}
                onChangeText={value => {
                  value >= 8
                    ? setValidationPassword(true)
                    : setValidationPassword(false);
                  value > 33 ? setLength(Number(32)) : setLength(Number(value));
                }}
                placeholder="8"
                placeholderTextColor={Colors.dustyGray}
                style={styles.passwordLengthInput}
              />
              <Slider
                value={lentgth > 33 ? 32 : lentgth < 8 ? 8 : lentgth}
                minimumValue={8}
                maximumValue={32}
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
              <Pressable
                style={[
                  NumberCheckBox == false &&
                  symbolsCheckBox == false &&
                  lowerCheckBox == false &&
                  upperCheckBox == false
                    ? styles.disabledButton
                    : styles.copyPasswordButton,
                ]}
                onPress={() => {
                  if (lentgth >= 8) {
                    setValidationPassword(true);
                    generatePassword(Number(lentgth));
                  }
                }}>
                <Label style={styles.copyButtonLabel}>Regenerate</Label>
              </Pressable>
              <Pressable
                style={
                  name !== '' && email !== '' && password?.length >= 8
                    ? styles.copyPasswordButton
                    : styles.disabledButton
                }
                onPress={() => {
                  if (name !== '' && email !== '' && password?.length >= 8) {
                    reference.push().set({
                      appName: name,
                      password: password,
                      email: email,
                      score: paswordScore,
                      status:
                        paswordScore && paswordScore == 4
                          ? 'Safe'
                          : paswordScore >= 0 && paswordScore <= 2
                          ? 'Risk'
                          : 'Weak',
                    });
                    navigation.navigate(Routes.bottomTabBar);
                  }
                }}>
                <Label style={styles.copyButtonLabel}>Save password</Label>
              </Pressable>
            </View>
            <Label style={styles.orLabel}>OR</Label>
          </View>
        )}

        {manualButtonShow ? (
          <Button
            onPress={() => {
              setManualInput(true);
              setManualButtonshow(false);
            }}
            title="Add manually"
            buttonLabelStyle={styles.addManualyButtonLabel}
            buttonContainerStyle={styles.manualyButtonContainer}
          />
        ) : null}
      </ScrollView>
    </Screen>
  );
}

export {NewRecordScreen};
