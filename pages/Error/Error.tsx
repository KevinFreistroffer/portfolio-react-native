import * as React from 'react';
import { View, Text } from 'react-native';
import { Container } from './Error.styled';
// import Header from '../../components/Header';
// import { ErrorMessage } from '../../components/ValidatedTextInput/ValidatedTextInput.styled';
// import { Link } from 'react-router-dom';

export interface IErrorProps {
  children: React.ReactNode;
}

export const Error = (props: IErrorProps) => {
  return (
    <View><Text>Error</Text></View>
    // <Container className='flex-column justify-content-flex-start  align-items-center'>
    //   <header className='mb-l4'>
    //     <h1>ReactAfterTF</h1>
    //   </header>
    //   <main>
    //     <ErrorMessage>{props.children}</ErrorMessage>
    //     <Link to='/'>Go back to the home page</Link>
    //   </main>
    // </Container>
  );
};

export default Error;
