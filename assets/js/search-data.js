// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Research in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Research/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-side-projects",
          title: "Side projects",
          description: "All things that do not fit on the page research",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "My resume is displayed below, but you can also click the PDF button",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-me-at-the-opening-of-the-one-conference-with-the-young-talents",
          title: '🎥 Me at the opening of the ONE conference with the Young Talents...',
          description: "",
          section: "News",},{id: "news-️-i-was-guest-at-the-dutch-podcast-all-the-cyber-ladies-see",
          title: '🎙️ I was guest at the Dutch podcast All the Cyber Ladies see...',
          description: "",
          section: "News",},{id: "news-i-won-the-cyber-woman-student-award-2025-see",
          title: '🏆 I won the Cyber Woman Student award 2025 see',
          description: "",
          section: "News",},{id: "projects-cyber-woman-student-2025",
          title: 'Cyber Woman Student 2025',
          description: "An award rewarded by the CEFCYS",
          section: "Projects",handler: () => {
              window.location.href = "/projects/award/";
            },},{id: "projects-phd-and-postdoc-lunches",
          title: 'PhD and Postdoc lunches',
          description: "For all PhD&#39;s and Postdocs of the INSY/ ST departments of TU Delft",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lunches/";
            },},{id: "projects-podcast",
          title: 'Podcast',
          description: "All the Cyber Ladies",
          section: "Projects",handler: () => {
              window.location.href = "/projects/podcast/";
            },},{id: "projects-young-talents",
          title: 'Young Talents',
          description: "How are organizations preparing for the PQC era?",
          section: "Projects",handler: () => {
              window.location.href = "/projects/young_talents/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
