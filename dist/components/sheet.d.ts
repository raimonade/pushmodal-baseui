import * as React from 'react';
import { Dialog as SheetPrimitive } from '@base-ui/react/dialog';
import { type VariantProps } from 'class-variance-authority';
declare const Sheet: typeof SheetPrimitive.Root;
declare const SheetPortal: React.ForwardRefExoticComponent<import("@base-ui/react/dialog").DialogPortalProps & React.RefAttributes<HTMLDivElement>>;
declare const SheetOverlay: React.ForwardRefExoticComponent<Omit<import("@base-ui/react/dialog").DialogBackdropProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const sheetVariants: (props?: ({
    side?: "left" | "right" | "bottom" | "top" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Popup>, VariantProps<typeof sheetVariants> {
}
declare const SheetContent: React.ForwardRefExoticComponent<SheetContentProps & React.RefAttributes<HTMLDivElement>>;
export { Sheet, SheetPortal, SheetOverlay, SheetContent };
