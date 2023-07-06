import { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode; // Content to be rendered inside the modal.
  isOpen: boolean; // Flag indicating whether the modal is open or not.
  handleClose: () => void; // Function to close the modal.
}
