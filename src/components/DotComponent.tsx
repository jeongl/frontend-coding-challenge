import React, { ReactChild } from "react";
import styled, { ThemedStyledProps } from "styled-components";

export const generateRandomStatus = (): { text: string; color: string } => {
  interface IReturnObj {
    [index: number]: {
      text: string;
      color: string;
    };
  }
  const returnObj: IReturnObj = {
    0: { text: "Saved", color: "green" },
    1: { text: "Pending", color: "olive" },
    2: { text: "Active", color: "teal" },
    3: { text: "Expired", color: "red" }
  };
  const randomIndex: number = Math.floor(
    Math.random() * Math.floor(Object.keys(returnObj).length)
  );
  return returnObj[randomIndex];
};

export const DotComponent: ThemedStyledProps<
  any,
  {
    className: string;
    text: string;
    status: { text: string; color: string };
    children: ReactChild;
  }
> = styled(
  ({ className, isChangingStatus, status = generateRandomStatus() }) => {
    if (isChangingStatus) return null;
    return (
      <span className={className}>
        {status.text}
        <span className="dot" />
      </span>
    );
  }
)`
  .dot {
    height: 10px;
    width: 10px;
    background-color: ${props => props.status.color};
    border-radius: 50%;
    display: inline-block;
    margin-left: 7px;
  }
`;
