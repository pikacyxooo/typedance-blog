import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  height: 50px;
  background: coral;
`;

const BtnCls = () => (
  <div className="btn-cls">
    <Container>yo</Container>
  </div>
);

export default BtnCls;
