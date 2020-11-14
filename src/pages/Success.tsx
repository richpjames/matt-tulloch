import React from "react";
import { RouteComponentProps } from "@reach/router";

import {
  InfoSection,
  PageWrapper,
  PageTitle,
  Text,
} from "../Components/Common";

export const Success: React.FC<RouteComponentProps> = () => {
  return (
    <PageWrapper>
      <InfoSection>
        <PageTitle title="Success" />
        <Text
          text={`<p>Everything went through ok.<br /> Thanks for your order. <br /> You will receive an email with details. <br /> For enquiries contact@monitorbooks.co.uk</p>`}
        />
      </InfoSection>
    </PageWrapper>
  );
};
