import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";
import logo from "./../assets/images/logo.png";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setErrorMsg("");
    setLoading(true);

    try {
      const userCollection = collection(firestore, "superAdmin");
      const q = query(userCollection, where("username", "==", username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();

        if (userData.password === password) {
          console.log(`Login successful as ${userData.type}`);
          localStorage.setItem("user", JSON.stringify({ uid: userDoc.id, type: userData.type }));
          window.location.reload(); // Reload to reflect login state
        } else {
          setError(true);
          setErrorMsg("Incorrect password.");
        }
      } else {
        setError(true);
        setErrorMsg("User not found.");
      }
    } catch (err) {
      setError(true);
      setErrorMsg(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-8">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Admin Logo" className="w-24 h-24 object-contain" />
        </div>

        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500"></div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                User ID
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your password"
              />
            </div>

            {error && (
              <p className="text-sm text-red-500">
                {errorMsg || "An error occurred. Please try again."}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-green-500 to-green-800 text-white rounded-md hover:bg-green-600"
            >
              Log In
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;