export function useLocalstorage() {
  // Set in local storage
  const setItem = (key, value) => {
    // Encode garne ani save balla
    const enc = btoa(value);
    localStorage.setItem(key, JSON.stringify(enc));
  };

  const getItem = (key) => {
    const value = localStorage.getItem(key);
    const objValue = JSON.parse(value);
    const decrypt = atob(objValue);
    return decrypt;
  };

  return { setItem, getItem };
}
