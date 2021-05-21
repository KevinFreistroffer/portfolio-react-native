import styled from 'styled-components/macro';
import Card from '@material-ui/core/Card';

export const StyledCard = styled(Card)`
  margin: 1rem auto;
  transition: all 0.1s linear;

  li {
    margin-bottom: 1.5rem;
  }

  .project-name {
    font-size: 1rem;
    font-weight: 500;
  }
  .technologies {
  }
  .description {
  }
  .urls {
  }

  .screenshots {
    strong {
      display: block;
    }

    > div {
      display: grid;
      grid-template-columns: 1fr;
      -ms-grid-columns: 1fr
      justify-items: center;
      align-items: flex-end;

      @media only screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        -ms-grid-columns: 1fr 1fr;

      }
    }

    img {
      width: 100%;
      max-width: 200px;
      display: block;
      margin: 1rem;
      border: 1px solid #dddddd;
      box-shadow: 0 0 4px #eeeeee;

      &:nth-child(even) {
        margin: 0 1rem;
      }
    }
  }
`;

export const ImageCaption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 1rem;
`;

export const Caption = styled.div`
  text-align: center;
`;

export const ImgContainer = styled.div`
  position: relative;
  max-height: 320px;
  overflow: hidden;
`;
