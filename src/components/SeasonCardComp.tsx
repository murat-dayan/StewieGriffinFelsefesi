import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface SeasonCardCompProps {
  season: string;
  episodes: string;
  title: string;
  onPress: () => void;
}

const SeasonCardComp: React.FC<SeasonCardCompProps> = ({
  season,
  episodes,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Season:</Text>
        <Text style={styles.value}>{season}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Episodes:</Text>
        <Text style={styles.value}>{episodes}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    transform: [{scale: 1}],
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: '#555',
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
});

export default SeasonCardComp;
