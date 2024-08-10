import type { Project } from "../components/Projects/types";
import type { LangsAndDBs } from "../components/UploadInputs/types";
import { ApiHandler } from "../handlers/apiHandler";
import type { GetProjects, GetProjectsResponse } from "../types/serverTypes";
import { paginateItems } from "../utilities/misc";

const projects: Project[] = [
  {
    name: "AnimeHub",
    mainLang: "TypeScript",
    desc: "A comprehensive platform for anime enthusiasts, offering real-time updates, episode tracking, and community forums. Built with a TypeScript and React stack, this project integrates with multiple APIs for a seamless user experience.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "animehub",
  },
  {
    name: "MangaWorld",
    mainLang: "Python",
    desc: "An online manga reader with a vast library, personalized recommendations, and a sleek, user-friendly interface. Developed with Python and Django, it offers fast and secure access to manga from various sources.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "mangaworld",
  },
  {
    name: "CodeStream",
    mainLang: "JavaScript",
    desc: "A live coding platform where developers can stream their coding sessions, interact with viewers, and share their projects. Utilizes a JavaScript-based stack with Node.js and Express for backend services.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "codestream",
  },
  {
    name: "DevConnect",
    mainLang: "JavaScript",
    desc: "A social networking site for developers to connect, share projects, and collaborate on open-source initiatives. Built with a Node.js and Express backend.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "devconnect",
  },
  {
    name: "PortfolioPro",
    mainLang: "TypeScript",
    desc: "A portfolio builder tool for developers and designers to showcase their work with customizable templates. Built with React and Tailwind CSS.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "portfoliopro",
  },
  {
    name: "TaskMaster",
    mainLang: "Python",
    desc: "A task management tool that helps teams track their work, assign tasks, and meet deadlines. Developed using Django and PostgreSQL.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "taskmaster",
  },
  {
    name: "Weatherly",
    mainLang: "JavaScript",
    desc: "A weather forecasting app that provides real-time weather updates and alerts. Developed with a vanilla JavaScript frontend and a Node.js backend.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "weatherly",
  },
  {
    name: "EventPlanner",
    mainLang: "TypeScript",
    desc: "An event planning tool that allows users to create and manage events, send invitations, and track RSVPs. Built with a React frontend and a Firebase backend.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "eventplanner",
  },
  {
    name: "FinanceTracker",
    mainLang: "Python",
    desc: "A personal finance tracker that helps users manage their budgets, track expenses, and save for goals. Built with Django and integrated with Stripe for payments.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "financetracker",
  },
  {
    name: "FitApp",
    mainLang: "JavaScript",
    desc: "A fitness tracking app that allows users to log workouts, set goals, and track progress. Developed with a React frontend and an Express backend.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "fitapp",
  },
  {
    name: "RecipeBook",
    mainLang: "TypeScript",
    desc: "An online recipe book that allows users to save and share their favorite recipes. Built with Next.js and a MongoDB backend.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "recipebook",
  },
  {
    name: "ChatBox",
    mainLang: "Python",
    desc: "A real-time chat application that allows users to create chat rooms and send messages with end-to-end encryption. Built with Django and WebSocket.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "chatbox",
  },
  {
    name: "ShopifyLite",
    mainLang: "JavaScript",
    desc: "A lightweight e-commerce platform that allows users to create online stores, manage products, and process payments. Developed with a React frontend and a Node.js backend.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "shopifylite",
  },
  {
    name: "BlogMaster",
    mainLang: "TypeScript",
    desc: "A blogging platform that allows users to write and publish blog posts, and interact with readers through comments. Built with a Next.js frontend and a Firebase backend.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "blogmaster",
  },
  {
    name: "NewsDigest",
    mainLang: "Python",
    desc: "A news aggregation app that provides users with personalized news feeds based on their interests. Built with Django and a custom web scraper.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "newsdigest",
  },
  {
    name: "JobFinder",
    mainLang: "JavaScript",
    desc: "A job search platform that helps users find job listings, apply for jobs, and track their applications. Developed with a React frontend and a Node.js backend.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "jobfinder",
  },
  {
    name: "EduPortal",
    mainLang: "TypeScript",
    desc: "An educational platform that offers online courses, quizzes, and progress tracking for students. Built with Next.js and Tailwind CSS.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "eduportal",
  },
  {
    name: "TravelGuide",
    mainLang: "Python",
    desc: "A travel planning app that helps users create itineraries, book accommodations, and find local attractions. Built with Django and integrated with Google Maps API.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "travelguide",
  },
  {
    name: "PhotoGallery",
    mainLang: "JavaScript",
    desc: "An online photo gallery that allows users to upload, share, and organize their photos. Developed with a React frontend and a Firebase backend.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "photogallery",
  },
  {
    name: "MusicStream",
    mainLang: "TypeScript",
    desc: "A music streaming platform that allows users to listen to their favorite songs, create playlists, and share music with friends. Built with a Next.js frontend and a Firebase backend.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "musicstream",
  },
  {
    name: "HealthTracker",
    mainLang: "Python",
    desc: "A health tracking app that allows users to monitor their vital signs, track their fitness progress, and manage their health data. Developed with Django and integrated with a custom API.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "healthtracker",
  },
  {
    name: "FoodDelivery",
    mainLang: "JavaScript",
    desc: "A food delivery app that allows users to order food from local restaurants and track their delivery in real-time. Built with a React frontend and a Node.js backend.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "fooddelivery",
  },
  {
    name: "GamePortal",
    mainLang: "TypeScript",
    desc: "An online gaming platform that offers multiplayer games, leaderboards, and a community hub for gamers. Built with Next.js and a Firebase backend.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "gameportal",
  },
  {
    name: "MovieTracker",
    mainLang: "Python",
    desc: "A movie tracking app that allows users to keep track of movies they've watched, rate them, and create watchlists. Built with Django and integrated with a third-party API for movie data.",
    image_url:
      "https://thullydev.github.io/thullyDevStatics/images/mangarealm-logo.png",
    slug: "movietracker",
  },
] as const;

export function getProjects({ page }: GetProjects): GetProjectsResponse {
  const { items: pagenatedProjects, pagination } = paginateItems({
    data: projects,
    page: page,
    limit: 6,
  });
  const { page: projectsPage, pages } = pagination;

  return {
    page: projectsPage,
    pages: pages,
    projects: pagenatedProjects,
  };
}

const dummyApi = new ApiHandler("")

export async function getLangsAndDBs(): Promise<LangsAndDBs[]>  {
  const url = "https://thullydev.github.io/thullyDevStatics/JSONs/langsAndDBs.json"
  const data = await dummyApi.get(url) as Record<string, LangsAndDB> | null

  if (!data) {
    return []
  }

  return Object.values(data) as LangsAndDBs[]
}