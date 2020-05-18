type CbType = (f: Function, d: number) => void;

const debounce = (): CbType => {
  let setTimeoutId: number | null;

  return (f, delay): void => {
    if (setTimeoutId) {
      clearTimeout(setTimeoutId);
    }
    setTimeoutId = window.setTimeout(() => {
      f();
      setTimeoutId = null;
    }, delay);
  };
};

export default debounce;
