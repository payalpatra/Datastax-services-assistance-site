import React, { useState } from "react";
import axios from "axios";
import faker from "faker";

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
} from "./SignupElements";

function Signup() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  let id = faker.random.uuid();
  const formSubmit = async (e) => {
    e.preventDefault();
    const userdata = {
      id: id,
      fullName: data.fullName,
      email: data.email,
      message: data.message,
    };
    await axios
      .post("/.netlify/functions/addData", userdata)
      .then((response) => {
        window.location.href = "/ThankYou";
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">DataStax </Icon>
          <FormContent>
            <Form post action onSubmit={formSubmit}>
              <FormH1>Feedback</FormH1>
              <FormLabel htmlFor="for">Full Name</FormLabel>
              <FormInput
                type="text"
                id="Input1"
                name="fullName"
                value={data.fullName}
                onChange={InputEvent}
                placeholder="Enter Your Name"
                required
              />

              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                id="Input2"
                name="email"
                value={data.email}
                onChange={InputEvent}
                placeholder="Enter Your Email"
                required
              />
              <FormLabel htmlFor="for">Message</FormLabel>
              <FormInput
                type="text"
                id="Input3"
                name="message"
                value={data.message}
                onChange={InputEvent}
                placeholder="Write Your Feedback"
                required
              />
              <FormButton type="submit">Send Your Feedback</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default Signup;
