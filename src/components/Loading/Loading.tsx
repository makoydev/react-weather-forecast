import CircularProgress from "@mui/material/CircularProgress";
import style from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={style.loadingContainer}>
      <CircularProgress /> {/* Material-UI CircularProgress component */}
    </div>
  );
};

export default Loading;
