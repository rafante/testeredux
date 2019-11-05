import React from "react";
import { Button, Segment, Accordion } from "semantic-ui-react";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function teste(algo: any) {
  return {
    type: "TESTE",
    algo: algo
  };
}

const MenuLateral = ({ quemEstaAtivo, dispatch }: any) => {
  const [state, setState] = useState({ quemEstaAtivo });

  console.log(state);
  return (
    <Segment>
      <Accordion>
        <Accordion.Title
          index={0}
          active={state.quemEstaAtivo === 0}
          onClick={e => setState({ quemEstaAtivo: 0 })}
        >
          Material
        </Accordion.Title>
        <Accordion.Title
          index={1}
          active={state.quemEstaAtivo === 1}
          onClick={e => setState({ quemEstaAtivo: 1 })}
        >
          Conta Receber
        </Accordion.Title>
        <Accordion.Title
          index={2}
          active={state.quemEstaAtivo === 2}
          onClick={e => setState({ quemEstaAtivo: 2 })}
        >
          Banco
        </Accordion.Title>
      </Accordion>
    </Segment>
  );
};

export default connect((state: any) => ({ quemEstaAtivo: 0 }))(MenuLateral);
