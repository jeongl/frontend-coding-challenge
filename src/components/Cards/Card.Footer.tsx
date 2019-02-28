import React from "react";
import styled from "styled-components";

export const CardFooter = styled(
  ({
    className,
    children
  }: {
    className: string;
    children?: React.ReactChild;
  }): React.ReactElement => (
    <div className={`${className} padding`}>{children}</div>
  )
).attrs({
  className: "card-footer"
})`
  padding: 1rem;
  margin-top: 1rem;
  background: rgb(243, 244, 245);
  border-radius: 0.25rem;
  min-height: 3rem;
`;
