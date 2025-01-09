import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialDesignIcon from '@react-native-vector-icons/material-design-icons';
import {AppDimensions} from '../style/Dimensions';

interface CardProps {
  iconName: string; // İkon adı
  text: string; // Metin
  onPress: () => void; // Butona tıklandığında çalışacak fonksiyon
  iconSize?: number; // İkon boyutu (isteğe bağlı)
  backgroundColor?: string; // Kartın arka plan rengi (isteğe bağlı)
  textColor?: string; // Metin rengi (isteğe bağlı)
}

const MainCategoryCardComp: React.FC<CardProps> = ({
  iconName,
  text,
  onPress,
  iconSize = 30,
  backgroundColor = '#fff',
  textColor = '#000',
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, {backgroundColor}]}
      onPress={onPress}>
      <View style={styles.iconContainer}>
        <MaterialDesignIcon
          name={iconName as 'symbol'}
          size={iconSize}
          color={textColor}
        />
      </View>
      <Text style={[styles.text, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MainCategoryCardComp;

const styles = StyleSheet.create({
  card: {
    width: '48%',
    height: 150,
    borderRadius: AppDimensions.borderRadiusSmall,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 5,
    margin: 10,
  },
  iconContainer: {
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
