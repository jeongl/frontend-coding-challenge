import React, { ReactElement, FunctionComponent } from "react";
import styled from "styled-components";
import { CardStyles } from "./Card.Component.style";

const CardList = styled.ul.attrs({
  className: "card-container"
})`
  & {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const Card = styled(
  class extends React.Component<
    Partial<{
      className: string;
      title: string;
      text: string;
      imageSrc: string;
      ProgressComponent?:
        | string
        | React.ComponentClass<any>
        | FunctionComponent<any>;
    }>,
    {
      isChangingStatus: boolean;
    }
  > {
    state = { isChangingStatus: false };

    onStatusChange = () => {
      this.setState({ isChangingStatus: true }, () => {
        setTimeout(() => {
          this.setState({ isChangingStatus: false });
        }, 1000);
      });
    };

    render(
      { className, title, text, ProgressComponent, children } = this.props
    ) {
      const changing = this.state.isChangingStatus;
      return (
        <li className={`${className} ${changing && "changing-status"}`}>
          <div className="card">
            <div className="image" />
            <div className="content">
              <div className="title-cta">
                <div className="title">{title}</div>
                {!changing && (
                  <button onClick={this.onStatusChange}>Change status</button>
                )}
              </div>
              <p className="text">{text}</p>
              {ProgressComponent &&
                React.createElement(ProgressComponent, {
                  isChangingStatus: changing
                })}
            </div>
            {children}
          </div>
        </li>
      );
    }
  }
).attrs({
  className: "card-item"
})`
  ${CardStyles}
`;

export { CardList, Card };
