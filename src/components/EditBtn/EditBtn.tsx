import css from "./EditBtn.module.css";

type Props = {
  onClick?: () => void;
};

const EditBtn = ({ onClick }: Props) => {
  return (
    <button className={css.btn} onClick={onClick}>
      EditBtn
    </button>
  );
};

export default EditBtn;
