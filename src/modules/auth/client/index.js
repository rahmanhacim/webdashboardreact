import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Box from "@klc/Dynamic";
import { Grid, Item } from "@klc/Grid";
import Form from "@klc/Form";
import FormGroup from "@klc/FormGroup";
import Input from "@klc/Input";
import Button from "@klc/Button";

import { createSession } from "@modules/auth/client/redux/actions";

const Page = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("indra");
  const [password, setPassword] = useState("L!nk4ja");

  // function to handle submit login form
  const SubmitHandler = () => {
    dispatch(
      createSession({
        username: username,
        password: password,
      })
    );
  };

  return (
    <Grid
      gridTemplateColumns={["repeat(1, 1fr)", "7fr 3fr"]}
      gridColumnGap={["space0", "space0"]}
      gridRowGap={["space0", "space0"]}
      height="100%"
      width="100%"
    >
      <Item>
        <img src="/side-img.jpg" alt="freepick" width="100%" height="100%" />
      </Item>
      <Item p="space8" textAlign="center">
        <Box display="flex" alignItems="center" width="100%" height="100%">
          <Box width="100%">
            <Form>
              <FormGroup>
                <Input
                  label="username"
                  id="username"
                  placeholder="Masukan username anda"
                  required
                  value={username}
                  onChange={(data) => {
                    setUsername(data.target.value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  label="password"
                  id="password"
                  type="password"
                  placeholder="Masukan password akun anda"
                  required
                  value={password}
                  extraRules={["password"]}
                  onChange={(data) => {
                    setPassword(data.target.value);
                  }}
                  useShowHide
                />
              </FormGroup>
              <FormGroup>
                <Button
                  size="block"
                  onClick={() => {
                    SubmitHandler();
                  }}
                >
                  Login
                </Button>
              </FormGroup>
            </Form>
          </Box>
        </Box>
      </Item>
    </Grid>
  );
};

export default Page;
