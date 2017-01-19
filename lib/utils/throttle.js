function throttle(fn, threshhold) {
  let last, deferTimer;
  return () => {
    const now = +new Date;
    if (last && now < last + threshhold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(() => {
        last = now;
        fn();
      }, threshhold);
    } else {
      last = now;
      fn();
    }
  };
}

export default throttle;
