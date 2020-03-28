export const setLocationHash = (prefix, value) => {
  let hash = window.location.hash;
  const re = new RegExp(`${prefix}=([^&]*)`);
  const currentValue = window.location.hash.match(re);

  if (currentValue && currentValue.length > 1) {
    window.location.hash = hash.replace(currentValue.pop(), value);
  } else {
    window.location.hash = window.location.hash + `&${prefix}=${value}`;
  }
};
