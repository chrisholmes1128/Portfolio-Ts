import { Dialog } from "@mui/material";
import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  useMemo,
} from "react";

type GlobalModalContext = {
  isModalOpen: boolean;
  modalContent: any;
};

interface IGlobalModalProviderProps {
  children: React.ReactNode;
}

interface IModalState {
  isModalOpen: boolean;
  modalContent: React.ReactNode;
}

interface IModalContextState extends IModalState {
  setModalOpen: (
    open: boolean,
    content?: React.ReactNode | undefined
  ) => void | undefined;
}

const initalState = {
  isModalOpen: false,
  modalContent: null,
};

const GlobalModalContext = createContext<IModalContextState>(null!);

export const useGlobalModal = () => useContext(GlobalModalContext);

function GlobalModalConsumer() {
  const { isModalOpen, modalContent, setModalOpen } = useGlobalModal();

  const handleClose = () => {
    setModalOpen(false, <span />);
  };

  return (
    <Dialog open={isModalOpen} onClose={handleClose}>
      {modalContent}
    </Dialog>
  );
}

export function GlobalModalProvider({ children }: IGlobalModalProviderProps) {
  const [store, setStore] = useState({ ...initalState });

  const setModalOpen = useCallback(
    (open: boolean, content?: React.ReactNode | undefined) => {
      setStore((prev: any) => ({
        isModalOpen: open,
        modalContent: content || prev.modalContent,
      }));
    },
    []
  );

  const value = useMemo(
    () => ({ ...store, setModalOpen }),
    [setModalOpen, store]
  );

  return (
    <GlobalModalContext.Provider value={value}>
      <GlobalModalConsumer />
      {children}
    </GlobalModalContext.Provider>
  );
}
