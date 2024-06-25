import React from "react";
import styled from "styled-components";

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const WeatherDisplay = ({ weather }) => {
  if (!weather) return <h4>Please enter city name to search weather report</h4>;

  return (
    <WeatherContainer>
      <h2>{weather?.name}</h2>
      <p>{weather?.weather[0]?.description}</p>
      <p>Temperature: {weather?.main?.temp}°C</p>
      <p>Humidity: {weather?.main?.humidity}%</p>
      <p>Wind Speed: {weather?.wind?.speed} m/s</p>
    </WeatherContainer>
  );
};

export default WeatherDisplay;
