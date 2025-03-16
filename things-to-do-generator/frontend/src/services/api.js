const API_URL = "http://localhost:5001/api/activities"; // Match your backend port

export const fetchActivities = async (category = "") => {
  try {
    const response = await fetch(`${API_URL}${category ? `?category=${category}` : ""}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching activities:", error);
    return [];
  }
};

export const addActivity = async (name, category) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, category }),
    });
    return await response.json();
  } catch (error) {
    console.error("Error adding activity:", error);
    return null;
  }
};