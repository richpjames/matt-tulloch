import React from "react";
import { RouteComponentProps } from "@reach/router";

import { InfoSection, Text } from "../Components/Common";
import { Layout } from "../Components/layout";

const Success: React.FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <InfoSection>
        {/* <PageTitle title="Success" /> */}
        <Text
          text={`<p>Everything went through ok.<br /> Thanks for your order. <br /> You will receive an email with details. <br /> For enquiries contact@monitorbooks.co.uk</p>`}
        />
      </InfoSection>
    </Layout>
  );
};
export default Success;
