import React from "react";
import styled from "styled-components/macro";
import { navigate } from "@reach/router";
import Image from "gatsby-image";

import { background, text } from "../../constants";

interface ListItemContainerProps {
  index: number;
  width: string;
  horizontalMargin: string;
  to?: string;
  className?: string;
}

export const ListItemContainerWrap = styled.div<ListItemContainerProps>`
  display: flex;
  width: ${(props) => props.width};
  margin-left: ${(props) => props.horizontalMargin};
  margin-right: ${(props) => props.horizontalMargin};
  border-top: 0.25rem solid ${text};
  /* border-bottom: 0.25rem solid ${text}; */
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
  <ListItemContainerWrap
    onClick={
      to
        ? () => {
            navigate(to);
          }
        : undefined
    }
    {...rest}
  >
    {children}
  </ListItemContainerWrap>
);
export const MetaInfoContainer = styled.div<{ index: number; width: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
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
