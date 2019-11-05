import React from "react";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";

const Display = ({ contexto }: any) => <Segment>{contexto}</Segment>;

export default connect((state: any) => ({
  contexto: state.tela.contexto
}))(Display);
