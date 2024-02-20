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
  ToastAndroid,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Clipboard from '@react-native-clipboard/clipboard';

import {Screen, Label} from '@app/components';
import {PasswordData} from '@app/constants/passwordDummyData';
import {Colors, useTheme} from '@app/styles';
import {getStyles} from './styles';

function SearchScreen({navigation}: any) {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState(PasswordData);

  const copyToClipboard = (password: string) => {
    Clipboard.setString(password);
  };

  const showToast = () => {
    ToastAndroid.show('Text copied to clipboard!', ToastAndroid.BOTTOM);
  };

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
            <Pressable
              onPress={() => {
                copyToClipboard(item?.password);
                showToast();
              }}>
              <Image source={item?.icon} style={styles.iconStyle} />
            </Pressable>
          </View>
        ))}
      </View>
    );
  };

  const onSearch = (text: string) => {
    setSearchValue(text);
    if (text == '') {
      setData(PasswordData);
    } else {
      const tempList = PasswordData.map(category => ({
        ...category,
        items: category.items.filter(item =>
          item.name.toLowerCase().includes(text.toLowerCase()),
        ),
      })).filter(category => category.items.length > 0);
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
