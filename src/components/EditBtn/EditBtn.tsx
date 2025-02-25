type Props = {
  onClick?: () => void;
};

const EditBtn = ({ onClick }: Props) => {
  return <button onClick={onClick}>EditBtn</button>;
};

export default EditBtn;
