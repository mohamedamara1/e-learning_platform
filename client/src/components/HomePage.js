import { useEffect } from "react";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  let { accessTokenPayload } = useSessionContext();
  let role = accessTokenPayload.role;
  let navigate = useNavigate();
  useEffect(() => {
    
    if (role === "admin") {
      navigate("/admin", { replace: true });
    } else if (role === "student") {
      navigate("/student", { replace: true });
    }
    console.count("HomePage render");
  }, [role]);

  return null;
};

export default HomePage;
