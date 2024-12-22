
import Image from 'next/image';

const skills = [
  { name: 'Typescript', logo: '/ts.png' },
  { name: 'React.js', logo: '/react.png' },
  { name: 'CSS', logo: '/css-3.png' },
  { name: 'HTML', logo: '/html.png' },
  { name: 'Node.Js', logo: '/nodejs.png' },
  { name: 'C/C++ language', logo: '/c-language.png' },
  { name: 'Microsoft', logo: '/microsoft.png' },
  { name: 'Excel', logo: '/excel.png' },
];


const Skills = () => {
  return (
    <div  id='skills' className="flex flex-col items-center sm:pb-4 md:pb-6 lg:pb-40 bg-[#0E0F34] text-white">
      <h2 className="text-5xl font-bold pt-24 mb-20">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-40">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center" data-aos="zoom-out-up" >
            <Image
              src={skill.logo}
              alt={`${skill.name} logo`}
              width={100} 
              height={100} 
              className="rounded-lg shadow-md"
            />
            <span className="mt-2 text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;