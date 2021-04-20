import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';
import * as Location from 'expo-location';

import Loading from './Loading';
import Weather from './Weather';

const API_KEY = 'c64fc21636f118a219b5a635386413ff';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [temp, setTemp] = useState(0);
  const [condition, setCondition] = useState<any>(null);

  useEffect(() => {
    const getWeather = async (latitude: number, longitude: number) => {
      const {
        data: {
          main: { temp },
          weather,
        },
      } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
      );
      setCondition(weather[0].main);
      setLoading(false);
      setTemp(temp);
    };

    const getLocation = async () => {
      try {
        await Location.requestForegroundPermissionsAsync();
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync();
        getWeather(latitude, longitude);
      } catch (error) {
        Alert.alert("Can 't find you", 'So sad');
      }
    };
    getLocation();
  }, []);
  return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
}
