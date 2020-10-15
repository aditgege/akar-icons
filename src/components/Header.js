import React from 'react';
import styled from 'styled-components';
import pkg from '../../package.json';

const Header = styled.header`
  display: block;
  padding: 12px 24px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.h1`
  margin: 0;
`

const Version = styled.span`
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  padding: 4px 8px;
  font-weight:bolder;
`

export default () =>
  <Header>
    <Title>Akar Icons</Title>
    <Version>v{pkg.version}</Version>
  </Header>

