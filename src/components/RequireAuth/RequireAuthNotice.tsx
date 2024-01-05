import { useNavigate } from "react-router-dom";
import style from "./RequireAuthNotice.module.scss"; // Path to your component's SCSS file

const RequireAuthNotice = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className={style.noticeContainer}>
      <p>You need to log in to access this page.</p>
      <button onClick={handleGoBack}>Go to Login Page</button>
    </div>
  );
};

export default RequireAuthNotice;
