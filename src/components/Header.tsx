import React from "react";
import Dropdown from "react-dropdown";
import styled from "styled-components";

interface Props {
  className: string;
  value: string;
  dropDownOptions: Array<string>;
  onChangeFilter: (val: string) => void;
}

class Header extends React.Component<Props> {
  render() {
    return (
      <header className={this.props.className}>
        <div className="dropdown">
          <Dropdown
            value={this.props.value}
            options={this.props.dropDownOptions}
            onChange={({ value }) => this.props.onChangeFilter(value)}
          />
        </div>
      </header>
    );
  }
}

export const StyledHeader = styled(Header).attrs({
  className: "header"
})`
  .dropdown {
    /* Css taken from the examples section of react-dropdown */
    font-size: 24px !important;
    .arrow-closed,
    .arrow-open {
      border: solid #999;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 4px;
      position: absolute;
      right: 10px;
    }

    .arrow-closed {
      top: 10px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }

    .arrow-open {
      top: 14px;
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
    }

    .Dropdown-root {
      position: relative;
    }

    .Dropdown-control {
      position: relative;
      overflow: hidden;
      background-color: white;
      border: 1px solid #ccc;
      border-radius: 2px;
      box-sizing: border-box;
      color: #333;
      cursor: default;
      outline: none;
      padding: 8px 52px 8px 10px;
      transition: all 200ms ease;
    }

    .Dropdown-control:hover {
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
    }

    .Dropdown-arrow {
      border-color: #999 transparent transparent;
      border-style: solid;
      border-width: 5px 5px 0;
      content: " ";
      display: block;
      height: 0;
      margin-top: -ceil(2.5);
      position: absolute;
      right: 10px;
      top: 14px;
      width: 0;
    }

    .is-open .Dropdown-arrow {
      border-color: transparent transparent #999;
      border-width: 0 5px 5px;
    }

    .Dropdown-menu {
      background-color: white;
      border: 1px solid #ccc;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
      box-sizing: border-box;
      margin-top: -1px;
      max-height: 250px;
      overflow-y: auto;
      position: absolute;
      top: 100%;
      width: 100%;
      z-index: 1000;
      -webkit-overflow-scrolling: touch;
    }

    .Dropdown-menu .Dropdown-group > .Dropdown-title {
      padding: 8px 10px;
      color: rgba(51, 51, 51, 1.2);
      font-weight: bold;
      text-transform: capitalize;
    }

    .Dropdown-option {
      box-sizing: border-box;
      color: rgba(51, 51, 51, 0.8);
      cursor: pointer;
      display: block;
      padding: 8px 10px;
    }

    .Dropdown-option:last-child {
      border-bottom-right-radius: 2px;
      border-bottom-left-radius: 2px;
    }

    .Dropdown-option:hover {
      background-color: #f2f9fc;
      color: #333;
    }

    .Dropdown-option.is-selected {
      background-color: #f2f9fc;
      color: #333;
    }

    .Dropdown-noresults {
      box-sizing: border-box;
      color: #ccc;
      cursor: default;
      display: block;
      padding: 8px 10px;
    }
  }
`;
