import landoraImg from '../assets/landora.png';
import gallerixImg from '../assets/gallerix.png';
import cineSearchImg from '../assets/movie-searcher.png';
import weatherImg from '../assets/weather-app.png';
import periodicImg from '../assets/periodic.png';
import melodixImg from '../assets/melodix.png';


export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
}

export const projects = [
    {
        id: 1,
        title: "Landora",
        category: "Web App",
        image: landoraImg,
        liveUrl: "https://landora.infinityfree.io/frontend/public/index.html",
        githubUrl: "https://github.com/ubaid-X", // Replace with exact repo if public
    },
    {
        id: 2,
        title: "Gallerix",
        category: "UI/UX",
        image: gallerixImg,
        liveUrl: "https://gallerix.vercel.app/",
        githubUrl: "https://github.com/ubaid-X",
    },
    {
        id: 3,
        title: "CineSearch",
        category: "API",
        image: cineSearchImg,
        liveUrl: "https://movie-searcher-delta-ten.vercel.app/",
        githubUrl: "https://github.com/ubaid-X",
    },
    {
        id: 4,
        title: "Weather App",
        category: "API",
        image: weatherImg,
        liveUrl: "https://weather-application-tau-silk.vercel.app/",
        githubUrl: "https://github.com/ubaid-X",
    },
    {
        id: 5,
        title: "Periodic Table",
        category: "UI/UX",
        image: periodicImg,
        liveUrl: "https://periodic-tablex.vercel.app/",
        githubUrl: "https://github.com/ubaid-X",
    },
    {
        id: 6,
        title: "Melodix music player",
        category: "Web App",
        image: melodixImg,
        liveUrl: "https://melodix-alpha.vercel.app/",
        githubUrl: "https://github.com/ubaid-X"

    }
];