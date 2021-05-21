import * as React from 'react';
import { View, Text, Button, InteractionManager } from 'react-native';
// import { useTranslation } from 'react-i18next';
// import { Container } from './Portfolio.styled';
// import PageHeader from '../../components/PageHeader';
// import OrderHistory from '../../imgs/order_history.jpg';
// import OrderDetails from '../../imgs/order_details.jpg';
// import OrderDetails768 from '../../imgs/order_details_768.jpg';
// import OrderDetails576 from '../../imgs/order_details_576.png';
// import OrderDetails320 from '../../imgs/order_details_320.jpg';
// import ReactGradients from '../../imgs/react-gradients.png';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';
import { IRootStackParamList } from '../../types';

import Header from '../../components/Header';

type Props = {};
 
export const Portfolio = (props: Props) => {
  const navigation = useNavigation();
  
  React.useEffect(() => {
    InteractionManager.runAfterInteractions(() => {});
  }, []);


  //const { t } = useTranslation();

  // const data: Array<IProject> = [
  //   {
  //     id: 1,
  //     projectName: 'Thermofisher',
  //     technologies: [
  //       t(
  //         'page_content.portfolio.project1.technologies',
  //         'HTML5, CSS3 & SCSS, JavaScript, Reagieren, gestaltete Komponenten, NodeJS, SCRUM, JIRA'
  //       ),
  //     ],
  //     description: t(
  //       'page_content.portfolio.project1.description',
  //       'Contributed features, tasks and bug fixes on 3 pages, including responsive design from 320px up to 1440px viewports using custom CSS CDN’s, reusable components we developed, and existing reusable components from existing repositories'
  //     ),
  //     URL: undefined,
  //     screenshots: [
  //       {
  //         src: OrderHistory,
  //         alt: t(
  //           'page_content.portfolio.project1.screenshot1.alt',
  //           'Order History - 1440px'
  //         ),
  //         caption: t(
  //           'page_content.portfolio.project1.screenshot1.alt',
  //           'Order History - 1440px'
  //         ),
  //       },
  //       {
  //         src: OrderDetails,
  //         alt: t(
  //           'page_content.portfolio.project1.screenshot2.alt',
  //           'Order Details - 1440px'
  //         ),
  //         caption: t(
  //           'page_content.portfolio.project1.screenshot2.alt',
  //           'Order Details - 1440px'
  //         ),
  //       },
  //       {
  //         src: OrderDetails768,
  //         alt: t(
  //           'page_content.portfolio.project1.screenshot3.alt',
  //           'Order Details - 768px'
  //         ),
  //         caption: t(
  //           'page_content.portfolio.project1.screenshot3.alt',
  //           'Order Details - 768px'
  //         ),
  //       },
  //       {
  //         src: OrderDetails576,
  //         alt: t(
  //           'page_content.portfolio.project1.screenshot4.alt',
  //           'Order Details - 576px'
  //         ),
  //         caption: t(
  //           'page_content.portfolio.project1.screenshot4.alt',
  //           'Order Details - 576px'
  //         ),
  //       },
  //       {
  //         src: OrderDetails320,
  //         alt: t(
  //           'page_content.portfolio.project1.screenshot5.alt',
  //           'Order Details - 320px'
  //         ),
  //         caption: t(
  //           'page_content.portfolio.project1.screenshot5.alt',
  //           'Order Details - 320px'
  //         ),
  //       },
  //     ],
  //   },

  //   {
  //     id: 2,
  //     projectName: 'React Gradient',
  //     technologies: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  //     description: t(
  //       'page_content.portfolio.project2.description',
  //       'Based on the grid coordinates, the background color is dynamically set. Created while waiting in an aiport!'
  //     ),
  //     URL: 'https://react-gradient-grid.herokuapp.com/',
  //     screenshots: [
  //       {
  //         src: ReactGradients,
  //         alt: t(
  //           'page_content.portfolio.project2.screenshot1.alt',
  //           'React Dynamic Gradient Background Color'
  //         ),
  //         caption: t(
  //           'page_content.portfolio.project2.screenshot1.alt',
  //           'React Dynamic Gradient Background Color'
  //         ),
  //       },
  //     ],
  //   },
  //   // {
  //   //   id: 2,
  //   //   projectName: 'illLive',
  //   //   technologies: [
  //   //     'HTML5',
  //   //     'CSS3',
  //   //     'JavaScript',
  //   //     'React',
  //   //     'styled-components',
  //   //     'NodeJS',
  //   //   ],
  //   //   description: '',
  //   //   URL: 'https://www.illlive.herokuapp.com',
  //   //   screenshots: [],
  //   // },
  // ];
  return (
    <View>
      <Header title="Portfolio" />
      <Text>Portfolio</Text>
      <Text>Portfolio</Text>
      <Text>Portfolio</Text>
      <Text>Portfolio</Text>
    <Button title="Navigate to Home" onPress={() => navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [{ name: "Home" }]
    }))}/></View>
    // <Container>
    //   <PageHeader>
    //     <h1 className='mb-l3'>{t('page_title.Portfolio', 'Portfolio')}</h1>
    //   </PageHeader>
    //   <main>
    //     {data.map((project: IProject, index: number) => (
    //       <Project {...project} key={index}></Project>
    //     ))}
    //   </main>
    // </Container>
  );
};

export default Portfolio;
