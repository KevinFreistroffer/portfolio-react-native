import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, UL, LI } from './Details.styled';

export interface IWorkHistory {
  contractor?: string;
  client: string;
  employmentPeriod: string;
  location: string;
  position: string;
  summary: Array<string>;
  borderColor: string;
}

export interface IDetailsProps extends IWorkHistory {}

export const Details = (props: IDetailsProps) => {
  const { t } = useTranslation();
  return (
    <Container
      borderColor={props.borderColor}
      className='flex-column center-all'
    >
      <UL>
        {props.contractor && (
          <LI className='contractor flex justify-content-space-between'>
            <div>
              <strong>{t('Contractor', 'Contractor')}:</strong>
              &nbsp;
              <span>{props.contractor}</span>
            </div>
            <strong>{props.employmentPeriod}</strong>
          </LI>
        )}

        <LI className='client'>
          <strong>{t('Client', 'Client')}</strong>:&nbsp;
          <span>{props.client}</span>
        </LI>
        <LI className='location'>
          <strong>{t('Location', 'Location')}</strong>: &nbsp;
          <span>{props.location}</span>
        </LI>
        <LI>
          <strong>{t('Position', 'Position')}</strong>:&nbsp;
          <span>{props.position}</span>
        </LI>
        <LI className='summary'>
          <strong>{t('Summary', 'Summary')}</strong>:
          <UL className='summary-ul'>
            {props.summary.map((s, index) => (
              <LI key={index}>{s}</LI>
            ))}
          </UL>
        </LI>
      </UL>
    </Container>
  );
};

export default Details;
