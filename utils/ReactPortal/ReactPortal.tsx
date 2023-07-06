import { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { PortalProps } from './ReactPortal.model';

/**
 * Function that creates a wrapper element and appends it to the document body.
 * @param {string} wrapperId - ID of the wrapper element.
 * @returns {HTMLElement | null} - Created wrapper element or null if document is not available.
 */
const createWrapperAndAppendToBody = (
  wrapperId: string
): HTMLElement | null => {
  if (!document) return null;
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

/**
 * Component that renders its content in a portal located in the document body.
 * @param {PortalProps} props - Component properties.
 * @returns {JSX.Element | null} - React element or null if the wrapper element is not available yet.
 */
export default function ReactPortal({
  children,
  wrapperId,
}: PortalProps): JSX.Element | null {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null
  );

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }

    if (element) {
      setWrapperElement(element);
    }

    // Cleanup function that runs when the component is unmounted.
    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (!wrapperElement) return null;

  // Render the content into the portal within the wrapper element.
  return createPortal(children, wrapperElement);
}
