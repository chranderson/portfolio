type Project = {
  title: string;
  description: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    title: 'Web3 3D NFT Creator',
    description: 'tbd',
    technologies: [
      'three.js',
      'web3',
      'flow blockchain',
      'react',
      'micro-frontend'
    ]
  },
  {
    title: 'Touchless Payment Mobile app Prototype',
    description: 'tbd',
    technologies: ['react-native', 'qr-codes']
  },
  {
    title: 'Point of Sale Application',
    description: 'tbd',
    technologies: ['react', 'redux', 'styled-components', 'electron', '']
  },
  {
    title: 'Design System & Component Library',
    description: '',
    technologies: [
      'react',
      'storybook',
      'commitizen',
      'styled-components',
      'semantic-release',
      'gitlab',
      'GCP Storage',
      'styled-components',
      ''
    ]
  },
  {
    title: 'Workbench Dashboard & Interactive Map',
    description: '',
    technologies: ['react', 'redux', 'google-maps-api', 'D3.js', 'SVG']
  }
];

export default projects;
