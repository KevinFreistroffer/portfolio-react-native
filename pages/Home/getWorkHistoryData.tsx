// Need t type
export const getWorkHistoryData = (t: any) => {
  return  [
    {
      contractor: 'Insight Global',
      client: 'Thermofisher',
      location: 'Carlsbad, CA',
      employmentPeriod: 'September 2020 - April 30th, 2021',
      position: t('Front End Developer', 'Front end developer'),
      summary: [
        t(
          'work_history.summary.thermofisher.1',
          'Front end developer tasked with converting Angular pages to React given the designs and UX'
        ) + '.',
        t(
          'work_history.summary.thermofisher.2',
          'Scrum methodology including sprint planning, backlog grooming, and end of sprint retrospective meetings'
        ) + '.',
        t(
          'work_history.summary.thermofisher.3',
          'Daily stand up meetings lead by a scrum master, a product owner, team lead, with other front-end developers, backend developers and other team members from within the company'
        ) + '.',
        t(
          'work_history.summary.thermofisher.4',
          'End of sprint demos to team members from the business'
        ) + '.',
        t(
          'work_history.summary.thermofisher.5',
          'Integral part of the development and release lifecycle including estimating requirements, implementing requirements, deploying to QA, and verifying the code we pushed to QA and production following a release'
        ) + '.',
        t(
          'work_history.summary.thermofisher.6',
          'Strong team-oriented development process including code reviews, chat, phone and video calls, after hour meetings to discuss current and future requirements, and after hours collaboration to fix bugs following a release'
        ) + '.',
        t(
          'work_history.summary.thermofisher.7',
          'Technologies including: Jira, Confluence, Abstract, HTML5, CSS & SCSS, JavaScript with React, styled-components, NodeJS, development tools including Jenkins and GitHub'
        ) + '.',
        t(
          'work_history.summary.thermofisher.8',
          'Requirements developed and pushed to production at thermofisher.com'
        ) + '.',
      ],
      borderColor: '#ffc0cb',
    },
    {
      contractor: 'Pyramid Consulting',
      client: 'Accenture & Google',
      location: 'San Jose, CA',
      employmentPeriod: 'November 2019 – May 2020',
      position: t(
        'Angular & Angular-Dart Developer',
        'Angular & Angular-Dart Developer'
      ),
      summary: [
        t(
          'work_history.summary.accenture_google.1',
          'Convert an existing Angular TypeScript application to Angular-Dart, with a SAP backend proxying through a Python server'
        ) + '.',
        t(
          'work_history.summary.accenture_google.2',
          'Communicate and cooperate with technology lead and manager to complete weekly assignments, including in person meetings and video meetings'
        ) + '.',
        t(
          'work_history.summary.accenture_google.3',
          'Learn new technologies including Dart, Angular-Dart, and Googles internal technologies and internal development procedures'
        ) + '.',
        t(
          'work_history.summary.accenture_google.4',
          'Develop at a Google building and remotely.'
        ) + '.',
      ],
      borderColor: '#f4e6a9',
    },
    {
      contractor: 'Quest Global',
      client: 'Apple',
      location: 'San Jose, CA',
      employmentPeriod: 'July 2019 – October 2019',
      position: t('Angular Engineer', 'Angular Engineer'),
      summary: [
        t(
          'work_history.summary.apple.1',
          'Develop an UI based on a design and the requirements specified with Angular 6, using TypeScript and Angular Material Components'
        ) + '.',
        t(
          'work_history.summary.apple.2',
          'Connect the front end to a backend server given the API contract details, and render the data on the UI'
        ) + '.',
        t(
          'work_history.summary.apple.3',
          "Use tools to develop including the Angular-CLI, Apple's Radar"
        ) + '.',
        t(
          'work_history.summary.apple.4',
          'Communicate with team members including managers, team lead, mobile iOS & Android developers, backend developers, QA, & management on a daily and weekly basis in person and through chat & video with Slack & WebEx'
        ) + '.',
        t('work_history.summary.apple.5', 'Develop at an Apple office') + '.',
      ],
      borderColor: '#add8e6',
    },
  ];
};