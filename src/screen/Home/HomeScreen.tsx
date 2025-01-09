import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {AppColors} from '../../style/Colors';
import {AppDimensions} from '../../style/Dimensions';
import MainCategoryCardComp from '../../components/MainCategoryCardComp';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types/NavigationTypes';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.main_container}>
      <View style={styles.card_container}>
        <MainCategoryCardComp
          text="Wallpapers"
          iconName="wallpaper"
          onPress={() => navigation.navigate('Wallpapers')}
          backgroundColor={AppColors.primary}
          textColor={AppColors.background}
        />
        <MainCategoryCardComp
          text="Quotes"
          iconName="format-quote-close-outline"
          onPress={() => {}}
          backgroundColor={AppColors.primary}
          textColor={AppColors.background}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: AppColors.background,
    padding: AppDimensions.screenPadding,
  },
  card_container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default HomeScreen;
