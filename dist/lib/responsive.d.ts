type WrapperProps = {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    defaultOpen?: boolean;
    children?: React.ReactNode;
};
type ContentProps = Record<string, any>;
type Options = {
    mobile: {
        Wrapper: React.ComponentType<WrapperProps>;
        Content: React.ComponentType<ContentProps>;
    };
    desktop: {
        Wrapper: React.ComponentType<WrapperProps>;
        Content: React.ComponentType<ContentProps>;
    };
    breakpoint?: number;
};
export declare function createResponsiveWrapper({ mobile, desktop, breakpoint }: Options): {
    Wrapper: (props: WrapperProps) => import("react/jsx-runtime").JSX.Element;
    Content: (props: ContentProps) => import("react/jsx-runtime").JSX.Element;
};
export {};
