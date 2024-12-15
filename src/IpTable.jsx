import React, { useEffect, useState } from 'react';
import './IpTable.css'; // Импортируем стили для таблицы
import Modal from './Modal'; // Импортируем модальное окно

const IpTable = ({ ip, error }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (error) {
      setShowModal(true); // Показываем модальное окно при ошибке
    }
  }, [error]);

  const handleCloseModal = () => {
    setShowModal(false); // Закрываем модальное окно
  };

  return (
    <div className="ip-table-container">
      <h1>Внешний IP адрес роутера:</h1>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <table className="ip-table">
          <thead>
            <tr>
              <th>IP адрес</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ip}</td>
            </tr>
          </tbody>
        </table>
      )}
      {showModal && <Modal message={error} onClose={handleCloseModal} />} {/* Показываем модальное окно */}
    </div>
  );
};

export default IpTable;