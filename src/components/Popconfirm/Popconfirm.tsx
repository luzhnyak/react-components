import React, { FC, isValidElement, ReactElement, useState } from "react";
import Modal from "../Modal/Modal";

type Props = {
  title: string;
  description: string;
  onConfirm: () => void;
  okText?: string;
  cancelText?: string;
  children:
    | ReactElement<{ onClick?: () => void }>
    | ReactElement<{ onClick?: () => void }>[];
};

export const Popconfirm: FC<Props> = ({
  children,
  title,
  description,
  onConfirm,
  okText = "Ok",
  cancelText = "Cancel",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    console.log("handleClickOpen");

    setIsOpen(true);
  };

  const handleOk = () => {
    onConfirm();
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const modifiedChildren = React.Children.map(children, (child) => {
    if (isValidElement(child)) {
      return React.cloneElement(child, {
        onClick: handleClickOpen,
      });
    }
    return child;
  });

  return (
    <>
      {modifiedChildren}
      {isOpen && (
        <Modal onClose={handleClose}>
          <div>{title}</div>
          <div>
            <div>{description}</div>
          </div>
          <div>
            <button onClick={handleOk}>{okText}</button>
            <button onClick={handleClose}>{cancelText}</button>
          </div>
        </Modal>
      )}
    </>
  );
};
