"use client"
import { useEffect, useState } from 'react';

interface Coordinate {
  lat: string;
  long: string;
  time: Date;
}

const Connection = () => {
  const [coordinates, setCoordinates] = useState<Coordinate[]>([]);

  useEffect(() => {
    // Function to fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/coordinates/');
        if (response.ok) {
          const data = await response.json();
          setCoordinates(data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

    // Initial fetch when component mounts
    fetchData();

    // WebSocket connection
    const socket = new WebSocket('ws://localhost:8000/ws');
    socket.onmessage = (event) => {
      const newCoordinate = JSON.parse(event.data) as Coordinate;
      setCoordinates((prevCoordinates) => [...prevCoordinates, newCoordinate]);
    };

    // Fetch data every 5 minutes
    const interval = setInterval(fetchData, 5 * 60 * 1000);

    // return () => {
    //   clearInterval(interval);
    //   socket.close();
    // };
  }, []);

  return (
    <div>
      <h1>Real-Time Coordinate Data</h1>
      <ul>
        {coordinates.map((coordinate, index) => (
          <li key={index}>
            Latitude: {coordinate.lat}, Longitude: {coordinate.long}, Time: {coordinate.time.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Connection;
