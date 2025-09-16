import { useEffect, useState } from "react";

function SpentTime() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert seconds to minutes:seconds
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <>
      <h5>Time you spent: {minutes} min {seconds} sec</h5>
    </>
  );
}

export default SpentTime;
