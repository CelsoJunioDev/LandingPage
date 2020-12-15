import Img1 from '../../assets/initial.svg';
import Img2 from '../../assets/about.svg';
import Img3 from '../../assets/abilities.svg';
import Img4 from '../../assets/projects.svg';

export const Home = {
  id: 'home',
  buttonDirection: 'about',
  topLine: 'Home',
  headLine: 'Celso Junio',
  description: 'Desenvolvedor Mobile / Web React Native, ReactJs, NodeJs.',
  buttonLabel: 'Start',
  imgStart: false,
  img: Img1,
  alt: 'Improving skill',
  lightBgColor: true,
}

export const About = {
  id: 'about',
  buttonDirection: 'abilities',
  topLine: 'Sobre',
  headLine: 'Analista e Desenvolvedor de Sitemas',
  description: 'Por encontrar uma enorme familiaridade com o JavaScript, utilizo do React Native para resolver os problemas e desenvolver os meus projetos mobile, além do ReactJS para projetos Web. Possuo conhecimento no desenvolvimento nativo para Android, onde iniciei na programação mobile com Java/Kotlin.',
  buttonLabel: 'Habilidades',
  imgStart: true,
  img: Img2,
  alt: 'Completing tasks',
  lightBgColor: false,
}

export const Abilities = {
  id: 'abilities',
  buttonDirection: 'projects',
  topLine: 'Habilidades',
  headLine: 'Algumas das minhas principais skills',
  description: '* JavaScript - React Native, React.js, Node.js.  * HTML, CSS * Java / Kotlin Backend: MongoDB, Firebase. MySQL, SQLite, RealmDB. Ferramentas: VSCode, Android Studio, Adobe Xd. Controle de versão com Git',
  buttonLabel: 'Projetos',
  imgStart: false,
  img: Img3,
  alt: 'Happy face',
  lightBgColor: true
}

export const Projects = {
  id: 'projects',
  buttonDirection: 'home',
  topLine: 'Projetos',
  headLine: 'Alguns dos projetos que construí',
  description: '* JavaScript - React Native, React.js, Node.js.  * HTML, CSS * Java / Kotlin Backend: MongoDB, Firebase. MySQL, SQLite, RealmDB. Ferramentas: VSCode, Android Studio, Adobe Xd. Controle de versão com Git',
  buttonLabel: 'Home',
  imgStart: true,
  img: Img4,
  alt: 'Happy face',
  lightBgColor: false
}