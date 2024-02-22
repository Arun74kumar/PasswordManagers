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
import Clipboard from '@react-native-clipboard/clipboard';
import {showMessage} from 'react-native-flash-message';
import {useSelector} from 'react-redux';

import {Screen, Label} from '@app/components';
import {selectPasswordData} from '@app/modules/common';
import {Images} from '@app/constants';
import {Colors, useTheme} from '@app/styles';
import {getStyles} from './styles';

function SearchScreen({navigation}: any) {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [searchValue, setSearchValue] = useState('');
  const paswordList = useSelector(selectPasswordData);
  const [data, setData] = useState(paswordList);
  
  const copyToClipboard = (password: string) => {
    Clipboard.setString(password);
  };

  const showToast = () => {
    showMessage({type: 'info', message: 'password copied to clipboard!'});
  };

  const RenderPasswordList = ({item, index}: any) => {
    return (
      <View style={styles.paswordDataContainer}>
        <View style={styles.paswordDataRow} key={index}>
          <Image source={Images.adoveIcon} style={styles.imageStyle} />
          <View style={styles.nameSubtitleContainer}>
            <Label key={index} style={styles.subtitle}>
              {item?.appName}
            </Label>
            <Label key={item?.email} style={styles.emailLabel}>
              {item?.email}
            </Label>
          </View>
          <Pressable
            onPress={() => {
              copyToClipboard(item?.password);
              item?.password !== '' && showToast();
            }}>
            <Image source={Images.copyIcon} style={styles.iconStyle} />
          </Pressable>
        </View>
      </View>
    );
  };

  const onSearch = (text: string) => {
    setSearchValue(text);
    const searchText = text?.toLowerCase();
    if (!searchText) {
      setData(paswordList);
    } else {
      const tempList = paswordList.filter((item: any) =>
        item?.appName.toLowerCase().includes(searchText),
      );
      setData(tempList);
    }
  };

  return (
    <Screen style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <Pressable style={styles.searchInputContainer}>
        <TextInput
          value={searchValue}
          onChangeText={onSearch}
          placeholder="search here..."
          placeholderTextColor={'#292D32'}
          style={styles.inputSearchStyle}
        />
        <Ionicons name="search-outline" size={24} color={'black'} />
      </Pressable>
      <ScrollView style={styles.renderPasswordListContainer}>
        <FlatList
          scrollEnabled={false}
          data={data}
          renderItem={({item, index}) => (
            <RenderPasswordList item={item} index={index} />
          )}
        />
      </ScrollView>
    </Screen>
  );
}

export {SearchScreen};
