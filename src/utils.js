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

export const clearHash = (prefix = null) => {
  if (prefix) {
    const re = new RegExp(`[&]*${prefix}=[^&]*`);
    return (window.location.hash = window.location.hash.replace(re, ''));
  }
  window.location.hash = '';
};
