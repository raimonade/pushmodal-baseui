import * as React from 'react';
import { Dialog as DialogPrimitive } from '@base-ui/react/dialog';
declare const Dialog: typeof DialogPrimitive.Root;
declare const DialogPortal: React.ForwardRefExoticComponent<import("@base-ui/react/dialog").DialogPortalProps & React.RefAttributes<HTMLDivElement>>;
declare const DialogOverlay: React.ForwardRefExoticComponent<Omit<import("@base-ui/react/dialog").DialogBackdropProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DialogContent: React.ForwardRefExoticComponent<Omit<import("@base-ui/react/dialog").DialogPopupProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Dialog, DialogPortal, DialogOverlay, DialogContent };
