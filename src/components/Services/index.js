import React from "react";
import Icon1 from "../../Images/service-1.svg";
import Icon2 from "../../Images/service-2.svg";
import Icon3 from "../../Images/service-3.svg";
import Icon4 from "../../Images/service-4.svg";
import Icon5 from "../../Images/service-5.svg";
import Icon6 from "../../Images/service-6.svg";

import {
  ServicesContainer,
  ServiceH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";
function Services() {
  return (
    <>
      <ServicesContainer id="services">
        <ServiceH1>Our Services</ServiceH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Simple APIs</ServicesH2>
            <ServicesP>
              Use REST, GraphQL, JSON with your favorite full-stack framework.
            </ServicesP>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Multi-Cloud</ServicesH2>
            <ServicesP>
              Richly interactive apps that are elastic and viral-ready from Day
              1.
            </ServicesP>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Serverless</ServicesH2>
            <ServicesP>
              Pay-as-you-go Apache Cassandra DBaaS that scales effortlessly and
              affordably.
            </ServicesP>
          </ServicesCard>

          <ServicesCard>
            <ServicesIcon src={Icon4} />
            <ServicesH2>Enterprise Security</ServicesH2>
            <ServicesP>
              Peer Cloud VPC to an Astra cluster to maintain private
              communication between cloud-based apps and Astra.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon5} />
            <ServicesH2>No Operations</ServicesH2>
            <ServicesP>
              Eliminates the overhead to install,operate and scale Cassandra.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon6} />
            <ServicesH2>Zero Lock-in</ServicesH2>
            <ServicesP>
              Deploy on AWS or GCP and keep compatibility with open-source
              Cassandra.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
}

export default Services;
