// src/services/api.js

const API_URL = 'http://localhost:3000'; // Replace with your actual API endpoint

// Fetch all cakes
export const fetchCakes = async () => {
  try {
    const response = await fetch(`${API_URL}/cakes`);
    if (!response.ok) {
      throw new Error('Failed to fetch cakes');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cakes:', error);
    return [];  // Return an empty array in case of error to avoid breaking the app
  }
};

// Fetch all cake categories
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/categories`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];  // Return an empty array in case of error to avoid breaking the app
  }
};

// Fetch details of a specific cake by its ID
export const fetchCakeDetails = async (cakeId) => {
  try {
    const response = await fetch(`${API_URL}/cakes/${cakeId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch cake details');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cake details:', error);
    return null;  // Return null in case of error to avoid breaking the app
  }
};

// Add an item to the cart (for example, in a real API, this could be a POST request)
export const addToCart = async (cartItem) => {
  try {
    const response = await fetch(`${API_URL}/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItem),
    });
    if (!response.ok) {
      throw new Error('Failed to add item to cart');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding item to cart:', error);
    return null;  // Return null if there's an error
  }
};

// Example function to remove an item from the cart
export const removeFromCart = async (cartItemId) => {
  try {
    const response = await fetch(`${API_URL}/cart/${cartItemId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to remove item from cart');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error removing item from cart:', error);
    return null;  // Return null if there's an error
  }
};

// If your cakes have an image URL field (you may need to update the database accordingly)
export const getCakeImage = (imageFileName) => {
  // Assuming cake images are stored in the 'public' directory
  return `/assets/images/${imageFileName}`;
};
