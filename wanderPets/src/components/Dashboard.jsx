import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Dashboard = () => {
  const [counts, setCounts] = useState({
    missing: 0,
    wandering: 0,
    found: 0,
    adoptionApplication: 0,
    rescue: 0,
    adopted: 0,
  });
  const [adoptionStats, setAdoptionStats] = useState({});
  const [rescueStats, setRescueStats] = useState({});

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const collections = [
          "missing",
          "wandering",
          "found",
          "adoptionApplication",
          "rescue",
          "adopted",
        ];
        const countsData = {};

        await Promise.all(
          collections.map(async (col) => {
            const snapshot = await getDocs(collection(firestore, col));
            countsData[col] = snapshot.size || 0; // Ensure count is set
          })
        );

        setCounts(countsData);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    const fetchStatusCounts = async (colName, fieldName, setState) => {
        try {
          const snapshot = await getDocs(collection(firestore, colName));
          const statusCounts = {};
  
          snapshot.docs.forEach((doc) => {
            const status = doc.data()[fieldName];
            statusCounts[status] = (statusCounts[status] || 0) + 1;
          });
  
          setState(statusCounts);
        } catch (error) {
          console.error(`Error fetching ${colName} stats:`, error);
        }
      };

    fetchCounts();
    fetchStatusCounts("adoptionApplication", "applicationStatus", setAdoptionStats);
    fetchStatusCounts("rescue", "reportStatus", setRescueStats);
    
  }, []);

  const renderBars = (data) => {
    const maxValue = Math.max(...Object.values(data), 1); // Prevent division by 0
    return Object.entries(data).map(([key, value]) => (
      <div key={key} className="mb-2">
        <p className="text-sm">{key}: {value}</p>
        <div className="bg-gray-300 h-6 rounded-lg">
          <div
            className="bg-blue-500 h-6 rounded-lg text-white text-xs text-center"
            style={{ width: `${(value / maxValue) * 100}%` }}
          >
            {value}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="p-6">
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-3 gap-4">
          {Object.entries(counts).map(([key, value]) => (
            <div key={key} className="bg-gray-800 text-white p-4 rounded-lg">
              <h2 className="text-lg">{key.replace(/([A-Z])/g, " $1")}</h2>
              <p className="text-2xl">{value}</p>
            </div>
          ))}
        </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
                <h2 className="text-xl font-bold mb-2">Adoption Application Status</h2>
                {renderBars(adoptionStats)}
            </div>

            <div>
                <h2 className="text-xl font-bold mb-2">Rescue Report Status</h2>
                {renderBars(rescueStats)}
            </div>
        </div>
    </div>
  );
};

export default Dashboard;
