import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IpTable from './IpTable'; // Импортируем новый компонент

function App() {
  const [ip, setIp] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/ip');
        setIp(response.data.ip);
      } catch (error) {
        setError('Не удалось получить IP адрес');
        console.error('Error fetching IP address:', error);
      }
    };

    fetchIp();
  }, []);

  return (
    <div className="App">
      <IpTable ip={ip} error={error} />
    </div>
  );
}

export default App;