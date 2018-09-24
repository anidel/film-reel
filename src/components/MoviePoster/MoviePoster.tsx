import * as React from "react";
import ImageLoader from "react-loading-image";
import ReactLoading from "react-loading";
import styled from "styled-components";

export interface IMoviePosterComponentProps {
  url: string;
}

const Image = styled(ImageLoader)`
  display: flex;
  align-self: center;
  margin-bottom: 10px;
`;

const renderLoading = () => <ReactLoading type={"cylon"} color="#000" />;
const renderError = () => <div />;

// An easy peasy IMG component. Ideally we would manage image loading via JS so to handle
// loading statuses, errors etc.
export const MoviePosterComponent: React.SFC<IMoviePosterComponentProps> = ({
  url
}) => <Image src={url} loading={renderLoading} error={renderError} />;
