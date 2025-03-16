import React, { useState } from "react";

const activities = [
  { category: "creative", text: "Draw something ✏️" },
  { category: "creative", text: "Write a short story 📝" },
  { category: "creative", text: "Try a DIY project 🛠️" },
  { category: "creative", text: "Take photos and edit them 📷" },
  { category: "creative", text: "Paint or do digital art 🎨" },
  { category: "creative", text: "Create a music playlist 🎵" },
  { category: "creative", text: "Make origami or paper crafts 🦢" },
  { category: "physical", text: "Go for a walk 🚶‍♂️" },
  { category: "physical", text: "Do a home workout 🏋️" },
  { category: "physical", text: "Try a new dance move 💃" },
  { category: "physical", text: "Stretch for 10 minutes 🧘‍♂️" },
  { category: "social", text: "Call or text a friend ☎️" },
  { category: "social", text: "Write a letter or email to someone 💌" },
  { category: "social", text: "Plan a game night 🎮" },
  { category: "relaxing", text: "Meditate for 10 minutes 🧘" },
  { category: "relaxing", text: "Listen to calming music 🎶" },
  { category: "relaxing", text: "Read a book or listen to an audiobook 📖" },
  { category: "relaxing", text: "Take a warm bath or shower 🛀" },
  { category: "all", text: "Try something new today! 🌟" },
];

const ActivityGenerator = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activity, setActivity] = useState("");

  const categories = ["all", "creative", "physical", "social", "relaxing"];

  const generateActivity = () => {
    const filteredActivities =
      selectedCategory === "all"
        ? activities
        : activities.filter((item) => item.category === selectedCategory);

    if (filteredActivities.length === 0) {
      setActivity("No activities found in this category!");
      return;
    }

    const randomIndex = Math.floor(Math.random() * filteredActivities.length);
    setActivity(filteredActivities[randomIndex].text);
  };

  return (
    <div className="w-full max-w-xl p-8 bg-white shadow-2xl rounded-xl text-center">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6">
        Things to Do When Bored 🎲
      </h1>

      {/* Dropdown to select category */}
      <select
        className="mb-4 p-3 w-full border border-gray-300 rounded-lg text-gray-700 text-lg"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>

      {/* Generate button */}
      <button
        onClick={generateActivity}
        className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
      >
        🎲 Generate Activity
      </button>

      {/* Display the chosen activity */}
      {activity && (
        <p className="mt-6 text-3xl font-semibold text-gray-800 p-4 border rounded-lg shadow-md bg-gray-100">
          {activity}
        </p>
      )}
    </div>
  );
};

export default ActivityGenerator;