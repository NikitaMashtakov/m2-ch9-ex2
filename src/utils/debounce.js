function debounce(func, ms) {
  let timeout;
  return function () {
    console.log('pre timeout', timeout);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log('execute');
      return func.apply(this, arguments);
    }, ms);
    console.log('post timeout', timeout);
  };
}

export default debounce;
