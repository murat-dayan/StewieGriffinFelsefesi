import {View, Text, ActivityIndicator, FlatList, Image} from 'react-native';
import React, {useEffect} from 'react';
import {AppDispatch, RootState} from '../../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {fetchImageUrls} from '../../redux/slices/supabaseSlice';
import {StyleSheet} from 'react-native';
import LoadingComp from '../../components/LoadingComp';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types/NavigationTypes';

const WallpapersScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch: AppDispatch = useDispatch();

  const {imageUrls, loading, error} = useSelector(
    (state: RootState) => state.supabase,
  );

  useEffect(() => {
    dispatch(fetchImageUrls());
  }, [dispatch]);

  if (loading) {
    return <LoadingComp message="Wallpapers Are Coming..." size="large" />;
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={imageUrls}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <Image source={{uri: item}} style={styles.image} />
      )}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  container: {
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});

export default WallpapersScreen;
