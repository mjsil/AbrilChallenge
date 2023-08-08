import React from 'react';

import { ContainerProps } from './Models';
import { Content } from './styles';

export const Container = ({ children }: ContainerProps) => {
  return <Content>{children}</Content>;
};
