export const convertSecondsToHms: (seconds: number) => {
  hours: number;
  minutes: number;
  seconds: number;
} = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;

  const minutes = Math.floor(remainingSeconds / 60);
  const remainingSecondsAfterMinutes = remainingSeconds % 60;

  return {
    hours,
    minutes,
    seconds: remainingSecondsAfterMinutes,
  };
};
