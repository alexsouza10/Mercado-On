/*export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key))
}
*/

export const setItem = (key, value) => {
  // Check if the value is an image
  if (value instanceof File) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const base64Image = event.target.result;
      localStorage.setItem(key, base64Image);
    };
    reader.readAsDataURL(value);
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export const getItem = (key) => {
  const storedItem = localStorage.getItem(key);
  try {
    // Attempt to parse the stored item as JSON
    return JSON.parse(storedItem);
  } catch (error) {
    // If parsing fails, assume it's a stored image and return the raw string
    return storedItem;
  }
}
