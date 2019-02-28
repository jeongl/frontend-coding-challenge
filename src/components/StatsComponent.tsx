import React from "react";
import styled from "styled-components";

export const Stats = styled(
  ({
    className,
    amount,
    subscribers,
    views
  }: {
    className?: string;
    amount: number | string;
    subscribers?: number | string;
    views?: number | string;
  }): React.ReactElement => (
    <div className={className}>
      <ul>
        <li className="currency">
          <i className="fas fa-database" />${amount}
        </li>
        <li>
          <i className="fas fa-users" /> {subscribers}
        </li>
        <li>
          <i className="far fa-eye" /> {views}
        </li>
      </ul>
    </div>
  )
)`
  color: rgb(189, 190, 191);
  font-size: 14px;
  ul {
    display: flex;
    justify-content: space-between;
  }
  i {
    color: rgb(147, 148, 149);
    &:before {
      padding-right: 0.5rem;
    }
  }
`;
