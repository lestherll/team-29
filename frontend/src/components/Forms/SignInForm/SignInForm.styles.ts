import styled from 'styled-components';
import { motion } from 'framer-motion';

import { sharedValues } from 'utils/sharedValues';

export const Wrapper = styled(motion.div)``;

export const Form = styled.form``;

export const SubmitWrapper = styled.button`
  cursor: pointer;
  margin-top: 35px;
`;

export const Center = styled.span`
  display: flex;
  justify-content: center;
`;

export const InputsContainer = styled.div`
  padding: 35px 0;
  width: 80%;
  margin: 0 auto;
`;

export const ApiError = styled.p`
  background-color: ${sharedValues.colors.red};
  font-size: 14px;
  padding: 18px 20px;
  border-radius: 6px;
  margin-bottom: 40px;
  color: ${sharedValues.colors.white};
`;
