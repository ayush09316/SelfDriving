"use client"
import { useEffect, useState,useRef } from 'react';

interface Data {
  lat: string;
  long: string;
  time: Date;
}

const Connection = () => {
    const [data, setData] = useState<Data | null>(null);

    useEffect(() => {
        const socketUrl = process.env.NODE_ENV === 'production'
        ? 'ws://https://self-drive.vercel.app/ws'
        : 'ws://localhost:8000/ws';
        const socket = new WebSocket('ws://localhost:8000/ws');

        socket.onopen = () => {
            console.log('Connected to WebSocket');
        };

        socket.onmessage = (event) => {
            const newData: Data = JSON.parse(event.data);
            setData(newData);
            console.log('Received new data:', newData);
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        // Clean up WebSocket connection on component unmount
        return () => {
            socket.close();
        };
    }, []);

    return (
        <div>
            {data ? (
                <pre>
                    {JSON.stringify(data, null, 2)}
                </pre>
            ) : (
                <p>No data received yet.</p>
            )}
        </div>
    );
};


export default Connection;
