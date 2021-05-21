import styled from 'styled-components/macro';

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;

  h1 {
    font-size: 3rem;

    @media only screen and (min-width: 768px) {
      font-size: 4rem;
    }
  }
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  max-width: 320px;
  margin: 0 auto 2rem;

  @media only screen and (min-width: 768px) {
  }
`;
export const Paragraph = styled.p`
  display: block;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
  }
`;

export const ParagraphAndImg = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${(props) => {
    return props.reverse ? 'column-reverse' : 'column';
  }};

  @media only screen and (min-width: 768px) {
    flex-direction: ${(props) => {
      return props.reverse ? 'row-reverse' : 'row';
    }};
  }
`;
