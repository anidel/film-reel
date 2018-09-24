import * as React from "react";
import styled from "styled-components";
import { Action } from "redux";

export interface ISearchProps {
  searchText: string;
  onSearch(searchText: string): Action;
}

const Input = styled.input``;

export class SearchComponent extends React.PureComponent<ISearchProps> {
  public render() {
    const { searchText } = this.props;

    return <Input type="text" value={searchText} onChange={this.onChange} />;
  }

  private onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    this.props.onSearch(e.currentTarget.value);
  };
}
