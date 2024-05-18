import React, { useCallback, useState } from "react";

export const useModal = () => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const toggle = useCallback(() => {
    setOpen((prev) => {
      if (prev) {
        setModalData(null);
      }
      return !prev;
    });
  }, []);

  const onSetModalData = useCallback((data) => {
    setModalData(data);
  }, []);

  return {
    open,
    toggle,
    modalData,
    setModalData: onSetModalData,
  };
};
