const debounce = () => {
  let setTimeoutId;


  return (f, delay) => {
    if (setTimeoutId) {
      clearTimeout(setTimeoutId);
    }
    setTimeoutId = setTimeout(() => {
      f();
      setTimeoutId = null;
    }, delay);
  };
};

export default debounce;
