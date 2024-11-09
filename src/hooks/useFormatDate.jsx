import { useState, useEffect, useCallback } from 'react';

const useFormatDate = (inputDate, format = 'full') => {
  const formatDate = useCallback((inputDate, format) => {
    const date = new Date(inputDate);

    const formatTime = (date) => {
      let hours = date.getHours();
      let minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      return `${hours}:${minutes}${ampm}`;
    };

    if (format === 'short') {
      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    } else if (format === 'full') {
      const weekday = date.toLocaleDateString('default', { weekday: 'short' });
      const day = date.toLocaleDateString('default', { day: 'numeric' });
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();
      return `${weekday} ${day} ${month} ${year}`;
    } else if (format === 'with-time') {
      // const weekday = date.toLocaleDateString('default', {weekday: 'short'});
      const day = date.toLocaleDateString('default', { day: 'numeric' });
      const month = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();
      const time = formatTime(date);
      return `${day} ${month} ${year}, ${time}`;
    } else {
      return formatDate(inputDate, 'full');
    }
  }, []);

  const [formattedDate, setFormattedDate] = useState(formatDate(inputDate, format));

  useEffect(() => {
    setFormattedDate(formatDate(inputDate, format));
  }, [inputDate, format, formatDate]);

  return formattedDate;
};

export default useFormatDate;
