import React from "react";
import { RouteComponentProps } from "@reach/router";

import { InfoSection, Text } from "../../Components/Common";
import { Layout } from "../../Components/layout";

const Success: React.FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <InfoSection>
        <h2>Success</h2>
        <p>
          Everything went through ok.
          <br /> Thanks for your order. <br /> You will receive an email with
          details. <br /> For enquiries contact@tulltulloch.co.uk
        </p>
      </InfoSection>
    </Layout>
  );
};
export default Success;
