/**
 * Search Screen
 * @format
 */

import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  TextInput,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Screen, Label} from '@app/components';
import {PasswordData} from '@app/constants/passwordDummyData';
import {Colors, useTheme} from '@app/styles';
import {getStyles} from './styles';

function SearchScreen({navigation}: any) {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [searchValue, setSearchValue] = useState('');

  const RenderPasswordList = ({items}: any) => {
    return (
      <View style={styles.paswordDataContainer}>
        {items.map((item: any, index: any) => (
          <View style={styles.paswordDataRow} key={index}>
            <Image source={item?.image} style={styles.imageStyle} />
            <View style={styles.nameSubtitleContainer}>
              <Label key={index} style={styles.subtitle}>
                {item?.name}
              </Label>
              <Label key={item?.email} style={styles.emailLabel}>
                {item?.email}
              </Label>
            </View>
            <Pressable onPress={() => {}}>
              <Image source={item?.icon} style={styles.iconStyle} />
            </Pressable>
          </View>
        ))}
      </View>
    );
  };

  return (
    <Screen style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <Pressable style={styles.searchInputContainer}>
        <TextInput
          value={searchValue}
          onChangeText={value => setSearchValue(value)}
          placeholder="search here..."
          placeholderTextColor={'#292D32'}
          style={styles.inputSearchStyle}
        />
        <Ionicons name="search-outline" size={24} color={'black'} />
      </Pressable>
      <ScrollView style={styles.renderPasswordListContainer}>
        <FlatList
          scrollEnabled={false}
          data={PasswordData}
          renderItem={({item}) => (
            <RenderPasswordList title={item?.title} items={item?.items} />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </ScrollView>
    </Screen>
  );
}

export {SearchScreen};
