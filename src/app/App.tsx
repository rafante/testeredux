import "semantic-ui-css/semantic.min.css";
import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { Display, DisplayReducer } from "../display";
import { MenuLateral, MenuLateralReducer } from "../menuLateral";

const reducersCombinados = combineReducers({
  menu: MenuLateralReducer,
  tela: DisplayReducer
});

const loja = createStore(reducersCombinados);

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={loja}>
          <Container>
            <Grid columns={2}>
              <Grid.Column widescreen={4}>
                <MenuLateral />
              </Grid.Column>
              <Grid.Column widescreen={12}>
                <Display />
              </Grid.Column>
            </Grid>
          </Container>
        </Provider>
      </div>
    );
  }
}
