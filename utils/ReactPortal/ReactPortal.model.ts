import { ReactElement } from 'react';

/**
 * Properties for the Portal component.
 */
export interface PortalProps {
  children: ReactElement; // Content to be rendered inside the portal.
  wrapperId: string; // ID of the portal's wrapper element.
}
