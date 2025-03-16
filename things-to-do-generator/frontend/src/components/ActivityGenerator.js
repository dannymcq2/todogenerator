import React, { useState, useEffect } from "react";
import { fetchActivities } from "../services/api";

const ActivityGenerator = () => {
  const [activities, setActivities] = useState([]);
  const [randomActivity, setRandomActivity] = useState(null);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const getActivities = async () => {
      const data = await fetchActivities(category);
      setActivities(data);
    };
    getActivities();
  }, [category]);

  const generateRandomActivity = () => {
    if (activities.length === 0) return;
    const randomIndex = Math.floor(Math.random() * activities.length);
    setRandomActivity(activities[randomIndex].name);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Things to Do When Bored</h2>

      <select
        className="mb-4 p-2 border rounded"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Creative">Creative</option>
        <option value="Physical">Physical</option>
        <option value="Social">Social</option>
        <option value="Relaxing">Relaxing</option>
      </select>

      <button
        onClick={generateRandomActivity}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Generate Activity
      </button>

      {randomActivity && (
        <p className="mt-4 text-lg font-medium text-gray-800">
          🏆 {randomActivity}
        </p>
      )}
    </div>
  );
};

export default ActivityGenerator;