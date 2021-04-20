import React, { FC } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
  temp: number;
  condition: any;
}

const weatherOptions: any = {
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#373B44', '#4286f4'],
    title: 'Thunderstorm in the house',
    subtitle: 'Actually, outside of the house',
  },
  Drizzle: {
    iconName: 'weather-hail',
    gradient: ['#89F7FE', '#66A6FF'],
    title: 'Drizzle',
    subtitle: 'Is like rain, but gay 🏳️‍🌈',
  },
  Rain: {
    iconName: 'weather-rainy',
    gradient: ['#00C6FB', '#005BEA'],
    title: 'Raining like a MF',
    subtitle: 'For more info look outside',
  },
  Snow: {
    iconName: 'weather-snowy',
    gradient: ['#7DE2FC', '#B9B6E5'],
    title: 'Cold as balls',
    subtitle: 'Do you want to build a snowman? Fuck no.',
  },
  Atmosphere: {
    iconName: 'weather-hail',
    gradient: ['#89F7FE', '#66A6FF'],
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#FF7300', '#FEF253'],
    title: 'Sunny as fuck',
    subtitle: 'Go get your ass burnt',
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#D7D2CC', '#304352'],
    title: 'Clouds',
    subtitle: 'I know, fucking boring',
  },
  Mist: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Mist!',
    subtitle: "It's like you have no glasses on.",
  },
  Dust: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Dusty',
    subtitle: 'Thanks a lot China 🖕🏻',
  },
  Haze: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Haze',
    subtitle: "Just don't go outside.",
  },
};

const Weather: FC<Props> = ({ temp, condition }) => {
  return (
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="#fff" />
        <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.Title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.SubTitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 36,
    color: '#fff',
  },
  Title: {
    color: '#fff',
    fontSize: 44,
    fontWeight: '300',
    marginBottom: 10,
  },
  SubTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
});

export default Weather;
