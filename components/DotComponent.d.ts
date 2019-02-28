import { ReactChild } from "react";
import { ThemedStyledProps } from "styled-components";
export declare const generateRandomStatus: () => {
    text: string;
    color: string;
};
export declare const DotComponent: ThemedStyledProps<any, {
    className: string;
    text: string;
    status: {
        text: string;
        color: string;
    };
    children: ReactChild;
}>;
