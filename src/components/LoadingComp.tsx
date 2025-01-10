import React from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface LoadingProps {
  message?: string; // Gösterilecek metin
  color?: string; // `ActivityIndicator` rengi
  size?: 'small' | 'large'; // `ActivityIndicator` boyutu
  containerStyle?: StyleProp<ViewStyle>; // Ana container'ın stilini özelleştirme
  textStyle?: StyleProp<TextStyle>; // Mesajın stilini özelleştirme
}

const LoadingComp: React.FC<LoadingProps> = ({
  message = 'Loading...',
  color = '#000',
  size = 'large',
  containerStyle,
  textStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <ActivityIndicator size={size} color={color} />
      {message ? <Text style={[styles.text, textStyle]}>{message}</Text> : null}
    </View>
  );
};

export default LoadingComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
});
