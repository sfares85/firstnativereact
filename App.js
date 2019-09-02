import React, { Component } from "react";
import * as Font from "expo-font";

import {
  Container,
  Header,
  Footer,
  Button,
  Icon,
  Text,
  Spinner,
  Content
} from "native-base";

export default class App extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Spinner color="white" />;
    }
    return (
      <Container>
        <Header>
          <Text>Hi</Text>
        </Header>
        <Button iconRight light>
          <Icon name="home" />
          <Text>Hello</Text>
        </Button>
        <Content />
        <Footer>
          <Text>Footer</Text>
        </Footer>
      </Container>
    );
  }
}
