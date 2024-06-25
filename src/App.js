import React, { useState } from "react";
import styled from "styled-components";
import Search from "./components/Search";
import WeatherDisplay from "./components/WeatherDisplay";

const AppContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
`;

const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #4caf50;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 25%;
  left: 50%;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const App = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    try {
      await fetchWeather(city);
    } catch (err) {
      setError("Could not fetch weather data");
    }
    setLoading(false);
  };

  const API_KEY = "493322a13462b1f2dfb0d986bf9ba1f6";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const jsonData = await response.json();
      if (jsonData.cod === 200) setWeather(jsonData);
      else setError("Could not fetch weather data");
    } catch (error) {
      throw error;
    }
  };

  const getRenderElements = () => {
    if (loading) return <LoadingSpinner />;
    if (error) return <p>{error}</p>;
    return <WeatherDisplay weather={weather} />;
  };

  return (
    <AppContainer>
      <h1>Weather Dashboard</h1>
      <Search onSearch={handleSearch} />
      {getRenderElements()}
    </AppContainer>
  );
};

export default App;
