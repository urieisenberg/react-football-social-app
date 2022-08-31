import { useState, useEffect } from "react";

const getTimeRemaining = (countdown) => {
  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);
  return [days, hours, minutes, seconds];
};

export const useCountdown = (date) => {
  const countdownDate = new Date(date).getTime();
  const [timeLeft, setTimeLeft] = useState(
    countdownDate - new Date(date).getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(countdownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

  return getTimeRemaining(timeLeft);
};
