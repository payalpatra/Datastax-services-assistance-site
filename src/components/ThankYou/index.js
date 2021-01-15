import React from "react";
import {
  Container,
  FormWrap,
  FormButton,
  FormContent,
  Form,
  FormH1,
  Link,
} from "./ThankYouElements";

function ThankYou() {
  return (
    <div>
      <Container>
        <FormWrap>
          <FormContent>
            <Form>
              <FormH1>Thank You For Your Feedback !</FormH1>
              <FormButton>
                <Link
                  href="https://astra.datastax.com/register/"
                  target="_blank"
                >
                  Click Here To Sign Up For A Free Cluster
                </Link>
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      ;
    </div>
  );
}

export default ThankYou;
