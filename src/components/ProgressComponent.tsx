import React from "react";
import styled, { ThemedStyledProps } from "styled-components";
import { DotComponent, generateRandomStatus } from "./DotComponent";

const randomBoolean = () => Math.random() >= 0.5;

export type IProgressComponent = {
  className: string;
  isChangingStatus: boolean;
};
export const ProgressComponent: ThemedStyledProps<
  any,
  IProgressComponent
> = styled(({ className, isChangingStatus }) => {
  return (
    <div className={className}>
      <div className="text">
        <p>$5000 / Month</p>
        <p>
          <DotComponent
            isChangingStatus={isChangingStatus}
            status={generateRandomStatus()}
          />
        </p>
      </div>
      <div className="progress-bar" />
    </div>
  );
}).attrs({
  className: "progress-bar"
})`
  .text {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
  .text p {
    cursor: pointer;
    color: rgb(147, 148, 149);
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  .progress-bar {
    background: ${({ show = randomBoolean() }) =>
      show ? "rgb(254, 162, 70)" : "rgb(224, 225, 226)"};
    padding: 5px;
    border-radius: 3px;
  }
`;
