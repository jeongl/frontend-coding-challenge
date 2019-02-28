import React from "react";
declare const CardList: import("styled-components").StyledComponent<"ul", any, {
    className: "card-container";
}, "className">;
declare const Card: import("styled-components").StyledComponent<{
    new (props: Readonly<Partial<{
        className: string;
        title: string;
        text: string;
        imageSrc: string;
        ProgressComponent?: string | React.FunctionComponent<any> | React.ComponentClass<any, any> | undefined;
    }>>): {
        state: {
            isChangingStatus: boolean;
        };
        onStatusChange: () => void;
        render({ className, title, text, ProgressComponent, children }?: Readonly<React.PropsWithChildren<Partial<{
            className: string;
            title: string;
            text: string;
            imageSrc: string;
            ProgressComponent?: string | React.FunctionComponent<any> | React.ComponentClass<any, any> | undefined;
        }>>>): JSX.Element;
        context: any;
        setState<K extends "isChangingStatus">(state: {
            isChangingStatus: boolean;
        } | ((prevState: Readonly<{
            isChangingStatus: boolean;
        }>, props: Readonly<Partial<{
            className: string;
            title: string;
            text: string;
            imageSrc: string;
            ProgressComponent?: string | React.FunctionComponent<any> | React.ComponentClass<any, any> | undefined;
        }>>) => {
            isChangingStatus: boolean;
        } | Pick<{
            isChangingStatus: boolean;
        }, K> | null) | Pick<{
            isChangingStatus: boolean;
        }, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<React.PropsWithChildren<Partial<{
            className: string;
            title: string;
            text: string;
            imageSrc: string;
            ProgressComponent?: string | React.FunctionComponent<any> | React.ComponentClass<any, any> | undefined;
        }>>>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: Partial<{
        className: string;
        title: string;
        text: string;
        imageSrc: string;
        ProgressComponent?: string | React.FunctionComponent<any> | React.ComponentClass<any, any> | undefined;
    }>, context?: any): {
        state: {
            isChangingStatus: boolean;
        };
        onStatusChange: () => void;
        render({ className, title, text, ProgressComponent, children }?: Readonly<React.PropsWithChildren<Partial<{
            className: string;
            title: string;
            text: string;
            imageSrc: string;
            ProgressComponent?: string | React.FunctionComponent<any> | React.ComponentClass<any, any> | undefined;
        }>>>): JSX.Element;
        context: any;
        setState<K extends "isChangingStatus">(state: {
            isChangingStatus: boolean;
        } | ((prevState: Readonly<{
            isChangingStatus: boolean;
        }>, props: Readonly<Partial<{
            className: string;
            title: string;
            text: string;
            imageSrc: string;
            ProgressComponent?: string | React.FunctionComponent<any> | React.ComponentClass<any, any> | undefined;
        }>>) => {
            isChangingStatus: boolean;
        } | Pick<{
            isChangingStatus: boolean;
        }, K> | null) | Pick<{
            isChangingStatus: boolean;
        }, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<React.PropsWithChildren<Partial<{
            className: string;
            title: string;
            text: string;
            imageSrc: string;
            ProgressComponent?: string | React.FunctionComponent<any> | React.ComponentClass<any, any> | undefined;
        }>>>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    contextType?: React.Context<any> | undefined;
}, any, {
    className: "card-item";
} & {
    imageSrc: string;
}, "className">;
export { CardList, Card };
