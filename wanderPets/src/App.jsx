// Updated App Component
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import AdminLogin from "./login/adminlogin";
import SuperAdmin from "./superadmin/superadmin";
import Admin from "./admin/admin";
import Staff from "./staff/staff";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "./firebase";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserType = async (uid) => {
    try {
      const userDocRef = doc(firestore, "superAdmin", uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUserType(userData.type);
      } else {
        console.error("User document not found.");
        setUserType(null);
      }
    } catch (err) {
      console.error("Error fetching user type:", err.message);
      setUserType(null);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const { uid, type } = JSON.parse(storedUser);
      setLoggedIn(true);
      setUserType(type);
      setLoading(false);
    } else {
      setLoggedIn(false);
      setUserType(null);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500"></div>
      </div>
    );
  }

  return (
    <>
      {loggedIn ? (
        userType === "superadmin" ? (
          <SuperAdmin />
        ) : userType === "admin" ? (
          <Admin />
        ) : userType === "staff" ? (
          <Staff />
        ) : (
          <div>Unauthorized Access</div>
        )
      ) : (
        <AdminLogin />
      )}
    </>
  );
};

export default App;
