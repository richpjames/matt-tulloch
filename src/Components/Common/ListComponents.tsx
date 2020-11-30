import React from "react";
import styled from "styled-components/macro";
import Image from "gatsby-image";
import { Link } from "gatsby";

import { background, text } from "../../constants";

interface ListItemContainerProps {
  index: number;
  width: string;
  horizontalmargin: string;
  to: string;
  className?: string;
}

export const ListItemContainerWrap = styled(Link)<ListItemContainerProps>`
  display: flex;
  width: ${(props) => props.width};
  margin-left: ${(props) => props.horizontalmargin};
  margin-right: ${(props) => props.horizontalmargin};
  border-top: 0.25rem solid ${text};
  padding: 2rem;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
`;
interface BasketListItemContainerProps {
  index: number;
  width: string;
  horizontalmargin: string;
  className?: string;
}

export const BasketListItemContainer = styled.div<BasketListItemContainerProps>`
  display: flex;
  width: ${(props) => props.width};
  margin-left: ${(props) => props.horizontalmargin};
  margin-right: ${(props) => props.horizontalmargin};
  border-top: 0.25rem solid ${text};
  padding: 2rem;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
`;

export const ListItemContainer: React.FC<ListItemContainerProps> = ({
  to,
  children,
  ...rest
}) => (
  <ListItemContainerWrap to={to} {...rest}>
    {children}
  </ListItemContainerWrap>
);
export const MetaInfoContainer = styled.div<{ index: number; width: string }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  position: relative;
  @media only screen and (max-width: 600px) {
    padding-top: 0;
    padding-bottom: 0;
    width: 100%;
  }
`;

export const ListItemTitle = styled.h3`
  width: 100%;
  padding-bottom: 0.1rem;
`;

export const ListItemSubtitle = styled.h4`
  width: 100%;
`;

export const ListItemPhotoWrap = styled.div<{ width: string }>`
  width: ${(props) => props.width && props.width};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 1rem 0%;
  }
`;

export const Photo = styled(Image)<{ fluid: any }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    max-width: 100%;
    height: 100%;
  }
`;

export const ListTitle = styled.h4`
  width: 100%;
  text-align: center;
  display: block;
`;
