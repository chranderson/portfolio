type Job = {
  company: string;
  link: string;
  startDate: string;
  endDate: string;
  role: string;
  location: string;
  description: string;
};

const jobs: Job[] = [
  {
    company: 'Flowhub',
    link: 'https://flowhub.com',
    startDate: '2018-06-01',
    endDate: '2022-01-22',
    role: 'Senior UI Engineer / UI Architect',
    location: 'Denver, CO',
    description: ''
  },
  {
    company: 'TalentReef',
    link: 'https://www.talentreef.com',
    startDate: '2017-08-10',
    endDate: '2018-05-29',
    role: 'Senior Software Engineer',
    location: 'Denver, CO',
    description: ''
  },
  {
    company: 'Weltok, Inc',
    link: 'https://welltok.com/',
    startDate: '2017-05-01',
    endDate: '2017-08-01',
    role: 'Senior Software Engineer',
    location: 'Denver, CO',
    description: ''
  },
  {
    company: 'Placeable',
    link: 'https://welltok.com/',
    startDate: '2015-09-010',
    endDate: '2017-06-01',
    role: 'UI Engineer',
    location: 'Denver, CO',
    description: ''
  },
  {
    company: 'Pynwheel, Inc',
    link: 'https://www.linkedin.com/company/pynwheel-inc-/',
    startDate: '2013-06-01',
    endDate: '2015-09-01',
    role: 'Developer',
    location: 'Denver, CO',
    description: ''
  }
];

export default jobs;
