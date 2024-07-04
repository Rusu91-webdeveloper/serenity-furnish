import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmiting = navigation.state === "submiting";
  return (
    <button
      className="btn btn-primary btn-block "
      disabled={isSubmiting}
      type="submit"
    >
      {isSubmiting ? (
        <>
          <span className="loading loading-spinner"></span> sending...
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};

export default SubmitBtn;
