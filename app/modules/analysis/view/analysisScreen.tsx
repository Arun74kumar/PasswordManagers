/**
 * analysis Screen
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import * as Progress from 'react-native-progress';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {firebase} from '@react-native-firebase/database';
import {useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

import {Screen, Header, Label} from '@app/components';
import {Images} from '@app/constants';
import {selectPasswordData} from '@app/modules/common';
import {Routes} from '@app/navigator';
import {Colors, useTheme} from '@app/styles';
import {getStyles} from './styles';

function AnalysisScreen({navigation}: any) {
  const theme = useTheme();
  const styles = getStyles(theme);
  const passwordList = useSelector(selectPasswordData);
  const [data, setData] = useState([]);
  const [filterPassword, setFilterPassword] = useState('');
  const [safeValuePasswordPercentage, setSafePassworPercentage] = useState(0);
  const [safeValue, setSafeValue] = useState(0);
  const [weakValue, setWeakValue] = useState(0);
  const [riskValue, setRiskValue] = useState(0);

  const passwordPercentage = () => {
    const totalPercentage = passwordList?.filter((item: any) => item?.status);
    const safePercentage = passwordList?.filter((item: any) =>
      item?.status.toLowerCase().includes('safe'),
    );
    setSafeValue(safePercentage?.length);
    const safeCalPercentage =
      (safePercentage?.length / totalPercentage?.length) * 100;
    setSafePassworPercentage(safeCalPercentage);
    const weakPercentage = passwordList?.filter((item: any) =>
      item?.status.toLowerCase().includes('weak'),
    );
    const weakCal = weakPercentage?.length;
    setWeakValue(weakCal);
    const riskPercentage = passwordList?.filter((item: any) =>
      item?.status.toLowerCase().includes('risk'),
    );
    const riskCal = riskPercentage?.length;
    setRiskValue(riskCal);
  };

  useEffect(() => {
    passwordPercentage();
  }, [passwordList]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await firebase
          .database()
          .ref('/password')
          .on('value', snapshot => {
            const pass = snapshot.val();
            if (pass) {
              setData(Object?.values(pass) || []);
            }
          });
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  const LeftElement = () => {
    return <Image source={Images.userIcon} style={styles.headerIconStyle} />;
  };
  const RightElement = () => {
    return <Image source={Images.plusIcon} style={styles.headerIconStyle} />;
  };

  const FilterPasswordList = () => {
    const safe = filterPassword?.includes('safe');
    const weak = filterPassword?.includes('weak');
    const risk = filterPassword?.includes('risk');
    if (!safe && !weak && !risk) {
      setData(passwordList);
    } else if (safe) {
      const safeList = passwordList.filter((item: any) =>
        item?.status.toLowerCase().includes(filterPassword),
      );
      setData(safeList);
    } else if (weak) {
      const weakList = passwordList.filter((item: any) =>
        item?.status.toLowerCase().includes(filterPassword),
      );
      setData(weakList);
    } else if (risk) {
      const riskList = passwordList?.filter((item: any) =>
        item?.status?.toLowerCase().includes(filterPassword),
      );
      setData(riskList);
    }
  };
  useEffect(() => {
    FilterPasswordList();
  }, [filterPassword]);

  const RenderSecurityData = ({item, index}: any) => {
    return (
      <>
        <View style={styles.securityDataContainer} key={index}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Image source={Images.adoveIcon} style={styles.imageStyle} />
            <Label style={{fontSize: 12}}>{item?.status}</Label>
          </View>
          <View style={styles.nameSubtitleContainer}>
            <Label key={index} style={[styles.subtitle, {lineHeight: 22}]}>
              {item?.appName}
            </Label>
            <Label style={styles.password}>{item?.email}</Label>
            <Progress.Bar
              progress={
                item?.score == undefined
                  ? 0
                  : Number(item?.score) == 4
                  ? 1
                  : item.score == 3
                  ? 0.75
                  : item.score == 2
                  ? 0.5
                  : 0.25
              }
              width={255}
              style={styles.progressBarStyle}
              color={
                item?.score >= 4
                  ? '#1ED760'
                  : item?.score >= 0 && item?.score < 2
                  ? '#E30A17'
                  : '#F8981D'
              }
              borderColor="#D9D9D9"
              borderWidth={0}
            />
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate(Routes.securityScreen, {
                name: item?.appName,
                password: item?.password,
                email: item?.email,
              });
            }}>
            <Image source={Images.arrowDownIcon} style={styles.arrowStyle} />
          </Pressable>
        </View>
      </>
    );
  };

  return (
    <Screen style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <Header
        title="Security"
        rightElement={<RightElement />}
        LeftElement={<LeftElement />}
        onPressLeft={() => navigation.navigate(Routes.profile)}
        onPressRight={() => navigation.navigate(Routes.newRecordScreen)}
      />
      <View style={styles.progressBarContainer}>
        <CircularProgress
          value={safeValuePasswordPercentage}
          progressValueFontSize={18}
          inActiveStrokeColor={'black'}
          activeStrokeColor="white"
          activeStrokeWidth={8}
          progressValueColor={'black'}
          valueSuffix={'%'}
          inActiveStrokeWidth={14}
        />
        <Label
          style={styles.securedLevel}>{`${safeValuePasswordPercentage?.toFixed(
          2,
        )}% secured`}</Label>
      </View>
      <View style={styles.securityStatusContainer}>
        <Pressable
          style={styles.statusRowContainer}
          onPress={() => {
            setFilterPassword('safe');
            FilterPasswordList();
          }}>
          <Label style={styles.securityStatus}>{safeValue}</Label>
          <Label style={styles.statusLabel}>Safe</Label>
        </Pressable>
        <Pressable
          style={styles.statusRowContainer}
          onPress={() => {
            setFilterPassword('weak');
            FilterPasswordList();
          }}>
          <Label style={styles.securityStatus}>{weakValue}</Label>
          <Label style={styles.statusLabel}>Weak</Label>
        </Pressable>
        <Pressable
          style={styles.statusRowContainer}
          onPress={() => {
            setFilterPassword('risk');
            FilterPasswordList();
          }}>
          <Label style={styles.securityStatus}>{riskValue}</Label>
          <Label style={styles.statusLabel}>Risk</Label>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Pressable style={styles.analysisContainer} onPress={() => {}}>
          <Label>{'Analysis'}</Label>
          <Ionicons name="filter-outline" size={24} color={'black'} />
        </Pressable>
        <ScrollView style={styles.analysisListContainer}>
          <FlatList
            scrollEnabled={false}
            data={data}
            renderItem={({item, index}) => (
              <RenderSecurityData item={item} index={index} />
            )}
          />
        </ScrollView>
      </View>
    </Screen>
  );
}

export {AnalysisScreen};
