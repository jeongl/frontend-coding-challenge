import React, { Fragment, ReactFragment, ReactElement } from "react";
import ReactDOM from "react-dom";
import { StyledHeader } from "components/Header";
import { Cards } from "components/Cards/Cards.List";
import { CardList } from "components/Cards/Card.Component";
import { GlobalStyle } from "./style/global.style";
import { Filters } from "./json/filters";

interface IFilter {
  filterBy: string;
}

interface InnerProps {
  // Todo: need to figure out how to use the generic passed in to type filterBy.
  Content: <T>({ filterBy }: IFilter) => ReactElement;
}

interface OuterProps {}

const withLayout = <T extends {}>({
  Content
}: InnerProps): React.ComponentType<T> =>
  class extends React.Component<T, IFilter> {
    state: IFilter = { filterBy: "" };
    render(): ReactFragment {
      return (
        <Fragment>
          <GlobalStyle />
          <StyledHeader
            dropDownOptions={Filters.map(item => item.campaignName)}
            value={this.state.filterBy}
            onChangeFilter={(val: string) => this.setState({ filterBy: val })}
          />
          <Content<IFilter> filterBy={this.state.filterBy} />
        </Fragment>
      );
    }
  };

const App = withLayout<OuterProps>({
  Content: ({ filterBy }: IFilter): ReactElement => (
    <CardList>
      <Cards filterBy={filterBy} />
    </CardList>
  )
});

ReactDOM.render(<App />, document.getElementById("root"));
