import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Box from "@klc/Dynamic";
import { Grid, Item } from "@klc/Grid";
import Form from "@klc/Form";
import FormGroup from "@klc/FormGroup";
import Input from "@klc/Input";
import Button from "@klc/Button";

import { LAYOUT_TYPE } from "@constants/common";
import { createBC } from "@helpers/common";
import { auth } from "@helpers/axios";

const Page = (props) => {
  const Router = useRouter();

  const [username, setUsername] = useState({});
  const [password, setPassword] = useState({});
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  if (user) {
    return Router.push("/dashboard");
  }

  // function to handle submit login form
  const SubmitHandler = () => {
    auth()
      .post("/api/v1/auth/login", {
        username: username.value,
        password: password.value,
      })
      .then((res) => res.data);
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
        <img src="/side-img.jpg" alt="freepick" width="100%" height="100%" />;
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
                  data={username}
                  onChange={(data) => {
                    setUsername(data);
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
                  data={password}
                  extraRules={["password"]}
                  onChange={(data) => {
                    setPassword(data);
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

Page.layout = LAYOUT_TYPE.fullscreen;
Page.breadcrumb = createBC(["test", "test"]);

export default Page;
