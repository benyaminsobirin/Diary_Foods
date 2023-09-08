import React, { useEffect, useState } from "react";
import axios from "axios";

const FoodList = () => {
  const [foods, setFoods] = useState([]);

  const jwtToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJlbmphbWluMTIzQGdtYWlsLmNvbSIsInVzZXJJZCI6ImJjZDI2MzVkLTM2MDMtNDZiNi05NDRiLTg2ZDE2NzllNmIxYSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk0MTc1ODQ0fQ.Kv5P41qAVBuuFKg938UBerudpe4fCAZA0JVjuzx-s88";
  

  // Memanggil dataFood

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await axios.get(
          "https://api-bootcamp.do.dibimbing.id/api/v1/foods",
          {
            headers: {
              apiKey: `w05KkI9AWhKxzvPFtXotUva-`,
              Authorization: `Bearer ${jwtToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        const filteredFoods = res.data.data.filter((food) => food.imageUrl);
        setFoods(filteredFoods);
      } catch (error) {
        console.error("Terjadi kesalahan saat memanggil data makanan:", error);
      }
    };
    fetchFoods();
  }, []);

  function ratingStar(params) {
    if (params <= 0) {
      return "No Ratings Yet";
    }

    return <div className="text-yellow-500">{"★".repeat(params)}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Daftar Makanan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {foods.map((food) => (
          <div key={food.id} className="bg-white shadow-md p-4 rounded-lg">
            <img
              src={food.imageUrl}
              alt={food.name}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-semibold mb-2">{food.name}</h2>
            <p className="text-gray-500 text-sm mb-2">{food.description}</p>
            <ul className="text-sm mb-2">
              {food.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-gray-500 text-sm">
                  {ratingStar(food.rating)}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">{food.totalLikes} Likes</p>
                <p className="text-gray-500 text-sm">
                  You {food.isLike ? "Liked" : "Did not like"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
