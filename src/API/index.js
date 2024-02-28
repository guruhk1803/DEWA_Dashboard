// API.js

// Placeholder API endpoint for demonstration
const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchData = () => {
  // You can call the necessary APIs here and return a Promise
  return Promise.all([
    getModuleAssignedData(),
    getModuleCompletedData(),
    getModuleLeftData(),
  ]).then(([assignedData, completedData, leftData]) => {
    return {
      moduleAssigned: assignedData,
      moduleCompleted: completedData,
      moduleLeft: leftData,
    };
  });
};

export const getModuleAssignedData = async () => {
  const response = await fetch(`${API_BASE_URL}/users`); // Adjust the endpoint accordingly
  const data = await response.json();
  return data;
};

export const getModuleCompletedData = async () => {
  const response = await fetch(`${API_BASE_URL}/posts`); // Adjust the endpoint accordingly
  const data = await response.json();
  return data;
};

export const getModuleLeftData = async () => {
  const response = await fetch(`${API_BASE_URL}/todos`); // Adjust the endpoint accordingly
  const data = await response.json();
  return data;
};
