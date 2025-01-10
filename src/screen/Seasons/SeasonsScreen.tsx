import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppDispatch, RootState} from 'src/redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSeasonsCsvData} from '../../redux/slices/supabaseSlice';
import LoadingComp from '../../components/LoadingComp';
import SeasonCardComp from '../../components/SeasonCardComp';

const SeasonsScreen = () => {
  const dispatch: AppDispatch = useDispatch();

  const {seasonscsvData, loading, error} = useSelector(
    (state: RootState) => state.supabase,
  );

  const [uniqueSeasons, setUniqueSeasons] = useState<string[]>([]);
  const [selectedSeason, setSelectedSeason] = useState<string>('1');
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    dispatch(fetchSeasonsCsvData());
  }, [dispatch]);

  useEffect(() => {
    if (Array.isArray(seasonscsvData)) {
      const uniqueSeasonsSet = new Set(
        seasonscsvData.map((item: any) => item[0]),
      );
      setUniqueSeasons(Array.from(uniqueSeasonsSet));
    }
  }, [seasonscsvData]);

  useEffect(() => {
    if (Array.isArray(seasonscsvData)) {
      const filtered = seasonscsvData.filter(
        (item: any) => item[0] === selectedSeason,
      );
      setFilteredData(filtered);
    }
  }, [selectedSeason, seasonscsvData]);

  if (loading) {
    return <LoadingComp message="Seasons Are Coming..." size="large" />;
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  const renderSeasonSelector = () => (
    <FlatList
      horizontal
      data={uniqueSeasons}
      renderItem={({item}) => (
        <TouchableOpacity
          style={[
            styles.seasonButton,
            selectedSeason === item && styles.selectedSeasonButton,
          ]}
          onPress={() => setSelectedSeason(item)}>
          <Text
            style={[
              styles.seasonText,
              selectedSeason === item && styles.selectedSeasonText,
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
    />
  );

  const renderEpisodeItem = ({item}: {item: any}) => {
    if (!item || !Array.isArray(item)) {
      console.error('Invalid item:', item);
      return null;
    }

    return (
      <SeasonCardComp
        season={item[0]}
        episodes={item[1]}
        title={item[3]}
        onPress={() => {}}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.seasonSelectorContainer}>
        {renderSeasonSelector()}
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderEpisodeItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default SeasonsScreen;

const styles = StyleSheet.create({
  seasonSelectorContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  seasonButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  selectedSeasonButton: {
    backgroundColor: '#007bff',
  },
  seasonText: {
    fontSize: 14,
    color: '#000',
  },
  selectedSeasonText: {
    color: '#fff',
  },
});
