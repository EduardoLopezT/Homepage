export const projects = [
  {
    id: 1,
    projectName: 'Encrypter',
    year: '2023',
    website: 'https://eduardolopezt.github.io/Challenge-Front/',
    projectImage: 'encriptador.png',
    stack: ['HTML', 'CSS', 'JS'],
    description:
      'A web application created for the Oracle Next Education course to practice HTML, CSS, and JavaScript concepts. The application encrypts the text you enter, and you can also input encrypted text to decrypt it',
    title: 'Challenge from Oracle+Alura Front End Formation'
  },
  {
    id: 2,
    projectName: 'Encrypter',
    year: '2023',
    website: 'https://eduardolopezt.github.io/Challenge-Front/',
    projectImage: 'encriptador.png',
    stack: ['HTML', 'CSS', 'JS'],
    description:
      'A web application created for the Oracle Next Education course to practice HTML, CSS, and JavaScript concepts. The application encrypts the text you enter, and you can also input encrypted text to decrypt it',
    title: 'Challenge from Oracle+Alura Front End Formation'
  }
];

export const findProjectById = idToFind => {
  const project = projects.find(project => project.id === idToFind);
  return project || false;
};
