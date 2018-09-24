import * as React from "react";
import styled from "styled-components";
import { Action } from "redux";

export interface ISearchProps {
  searchText: string;
  onSearch(searchText: string): Action;
}

const SearchLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 50%;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
`;

export class SearchComponent extends React.PureComponent<ISearchProps> {
  public render() {
    const { searchText } = this.props;

    return (
      <SearchLayout>
        <Label htmlFor="search_text">Search for a movie:</Label>
        <Input
          id="search_text"
          type="text"
          placeholder={"Enter a query here"}
          value={searchText}
          onChange={this.onChange}
        />
      </SearchLayout>
    );
  }

  private onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    this.props.onSearch(e.currentTarget.value);
  };
}
