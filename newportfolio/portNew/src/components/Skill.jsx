function Skill() {
  const skills = [
    { name: 'React JS', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Tailwind CSS', link: 'data:image/png;base64,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' },
    { name: 'Bootstrap', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'CSS', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'HTML', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'Python', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'C', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'MySQL', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Redux', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'Git', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Node JS', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'NPM', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
    { name: 'Vite', link: 'https://vitejs.dev/logo.svg' },
    { name: 'Figma', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Canva', link: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/canva.svg' },
    { name: 'Power BI', link: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/powerbi.svg' },
    { name: 'MS Office', link: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftoffice.svg' },
  ];

  return (
    <div className="p-6">
      {/* Mobile: infinite scroll marquee */}
      <div className="sm:hidden overflow-hidden relative">
        <div className="flex animate-marquee gap-4">
          {skills.concat(skills).map((skill, index) => (
            <div
              key={index}
              className="min-w-[100px] h-28 flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-3"
            >
              <img src={skill.link} alt={skill.name} className="h-10 w-10 object-contain" />
              <span className="mt-2 text-sm font-medium text-gray-700 text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet & Desktop: grid */}
      <div className="hidden sm:grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-28 h-28 flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-3 hover:shadow-lg transition"
          >
            <img src={skill.link} alt={skill.name} className="h-10 w-10 object-contain" />
            <span className="mt-2 text-sm font-medium text-gray-700 text-center">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Tailwind animation */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default Skill;
