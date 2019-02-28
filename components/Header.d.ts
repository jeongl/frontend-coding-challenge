import React from "react";
interface Props {
    className: string;
    value: string;
    dropDownOptions: Array<string>;
    onChangeFilter: (val: string) => void;
}
declare class Header extends React.Component<Props> {
    render(): JSX.Element;
}
export declare const StyledHeader: import("styled-components").StyledComponent<typeof Header, any, {
    className: "header";
}, "className">;
export {};
