import * as react_jsx_runtime from 'react/jsx-runtime';
import React$1 from 'react';

interface CreatePushModalOptions<T> {
    modals: {
        [key in keyof T]: {
            Wrapper: React$1.ComponentType<{
                open: boolean;
                onOpenChange: (open?: boolean) => void;
                children: React$1.ReactNode;
                defaultOpen?: boolean;
            }>;
            Component: React$1.ComponentType<T[key]>;
        } | React$1.ComponentType<T[key]>;
    };
}
declare function createPushModal<T>({ modals }: CreatePushModalOptions<T>): {
    ModalProvider: () => react_jsx_runtime.JSX.Element;
    pushModal: <T_1 extends keyof T, B extends ({ [key in keyof T]: React$1.ComponentType<T[key]> | {
        Wrapper: React$1.ComponentType<{
            open: boolean;
            onOpenChange: (open?: boolean | undefined) => void;
            children: React$1.ReactNode;
            defaultOpen?: boolean | undefined;
        }>;
        Component: React$1.ComponentType<T[key]>;
    }; }[T_1] extends infer T_4 ? T_4 extends { [key in keyof T]: React$1.ComponentType<T[key]> | {
        Wrapper: React$1.ComponentType<{
            open: boolean;
            onOpenChange: (open?: boolean | undefined) => void;
            children: React$1.ReactNode;
            defaultOpen?: boolean | undefined;
        }>;
        Component: React$1.ComponentType<T[key]>;
    }; }[T_1] ? T_4 extends React$1.ComponentType<infer P> | React$1.Component<infer P, {}, any> | {
        Component: React$1.ComponentType<infer P>;
    } ? P : never : never : never) extends infer T_2 ? { [K in keyof T_2]: ({ [key in keyof T]: React$1.ComponentType<T[key]> | {
        Wrapper: React$1.ComponentType<{
            open: boolean;
            onOpenChange: (open?: boolean | undefined) => void;
            children: React$1.ReactNode;
            defaultOpen?: boolean | undefined;
        }>;
        Component: React$1.ComponentType<T[key]>;
    }; }[T_1] extends infer T_3 ? T_3 extends { [key in keyof T]: React$1.ComponentType<T[key]> | {
        Wrapper: React$1.ComponentType<{
            open: boolean;
            onOpenChange: (open?: boolean | undefined) => void;
            children: React$1.ReactNode;
            defaultOpen?: boolean | undefined;
        }>;
        Component: React$1.ComponentType<T[key]>;
    }; }[T_1] ? T_3 extends React$1.ComponentType<infer P> | React$1.Component<infer P, {}, any> | {
        Component: React$1.ComponentType<infer P>;
    } ? P : never : never : never)[K]; } : never>(name: T_1, ...args: (keyof ({ [K_1 in keyof B]: B[K_1]; } extends Record<string | number | symbol, unknown> ? { [K_1 in keyof B]: B[K_1]; } : never) extends never ? never : { [K_1 in keyof B]: B[K_1]; } extends Record<string | number | symbol, unknown> ? { [K_1 in keyof B]: B[K_1]; } : never) extends never ? [] : [props: B]) => void;
    popModal: (name?: keyof T | undefined) => void;
    popAllModals: () => void;
    replaceWithModal: <T_5 extends keyof T, B_1 extends { [key in keyof T]: React$1.ComponentType<T[key]> | {
        Wrapper: React$1.ComponentType<{
            open: boolean;
            onOpenChange: (open?: boolean | undefined) => void;
            children: React$1.ReactNode;
            defaultOpen?: boolean | undefined;
        }>;
        Component: React$1.ComponentType<T[key]>;
    }; }[T_5] extends infer T_6 ? T_6 extends { [key in keyof T]: React$1.ComponentType<T[key]> | {
        Wrapper: React$1.ComponentType<{
            open: boolean;
            onOpenChange: (open?: boolean | undefined) => void;
            children: React$1.ReactNode;
            defaultOpen?: boolean | undefined;
        }>;
        Component: React$1.ComponentType<T[key]>;
    }; }[T_5] ? T_6 extends React$1.ComponentType<infer P> | React$1.Component<infer P, {}, any> | {
        Component: React$1.ComponentType<infer P>;
    } ? P : never : never : never>(name: T_5, ...args: (keyof ({ [K_2 in keyof B_1]: B_1[K_2]; } extends Record<string | number | symbol, unknown> ? { [K_2 in keyof B_1]: B_1[K_2]; } : never) extends never ? never : { [K_2 in keyof B_1]: B_1[K_2]; } extends Record<string | number | symbol, unknown> ? { [K_2 in keyof B_1]: B_1[K_2]; } : never) extends never ? [] : [props: B_1]) => void;
    onPushModal: <T_7 extends keyof T>(name: T_7 | "*", callback: (open: boolean, props: { [key in keyof T]: React$1.ComponentType<T[key]> | {
        Wrapper: React$1.ComponentType<{
            open: boolean;
            onOpenChange: (open?: boolean | undefined) => void;
            children: React$1.ReactNode;
            defaultOpen?: boolean | undefined;
        }>;
        Component: React$1.ComponentType<T[key]>;
    }; }[T_7] extends infer T_8 ? T_8 extends { [key in keyof T]: React$1.ComponentType<T[key]> | {
        Wrapper: React$1.ComponentType<{
            open: boolean;
            onOpenChange: (open?: boolean | undefined) => void;
            children: React$1.ReactNode;
            defaultOpen?: boolean | undefined;
        }>;
        Component: React$1.ComponentType<T[key]>;
    }; }[T_7] ? T_8 extends React$1.ComponentType<infer P> | React$1.Component<infer P, {}, any> | {
        Component: React$1.ComponentType<infer P>;
    } ? P : never : never : never, name?: T_7 | undefined) => void) => () => void;
    useOnPushModal: <T_9 extends keyof T>(name: "*" | T_9, callback: (open: boolean, props: { [key in keyof T]: React$1.ComponentType<T[key]> | {
        Wrapper: React$1.ComponentType<{
            open: boolean;
            onOpenChange: (open?: boolean | undefined) => void;
            children: React$1.ReactNode;
            defaultOpen?: boolean | undefined;
        }>;
        Component: React$1.ComponentType<T[key]>;
    }; }[T_9] extends infer T_10 ? T_10 extends { [key in keyof T]: React$1.ComponentType<T[key]> | {
        Wrapper: React$1.ComponentType<{
            open: boolean;
            onOpenChange: (open?: boolean | undefined) => void;
            children: React$1.ReactNode;
            defaultOpen?: boolean | undefined;
        }>;
        Component: React$1.ComponentType<T[key]>;
    }; }[T_9] ? T_10 extends React$1.ComponentType<infer P> | React$1.Component<infer P, {}, any> | {
        Component: React$1.ComponentType<infer P>;
    } ? P : never : never : never, name?: T_9 | undefined) => void) => void;
};

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
declare function createResponsiveWrapper({ mobile, desktop, breakpoint }: Options): {
    Wrapper: (props: WrapperProps) => react_jsx_runtime.JSX.Element;
    Content: (props: ContentProps) => react_jsx_runtime.JSX.Element;
};

export { createPushModal, createResponsiveWrapper };
