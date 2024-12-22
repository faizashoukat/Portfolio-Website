import react from 'react'
import Heading from './Heading';
import Card from './Card';
const data=[
    {
        id:0,
        title:'Static Resume',
        desc:'A typescript HTML & CSS based Static Resume',
        img:'/project-1.png',
        tags:[ 'Node' , 'Html' , 'CSS' , 'Typescript'],
    },
    {
        id:1,
        title:'Dynamic Resume',
        desc:'A typescript HTML & CSS based Shareable Dynamic Resume',
        img:'/project-2.png',
        tags:['Node' , 'HTML' , 'CSS' , 'Typescript'],
    },
    
]
const Projects=()=>

  {
    return(
        <div id='projects' className='sm:pb-4 md:pb-6 lg:pb-60 bg-[#0f1152]'>
            <Heading title=''/>
            <h2 className="text-5xl font-bold pt-4 text-center text-white">My Project</h2>
            <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg-grid-cols-3 place-items-center pt-10'  data-aos="fade-down">{data.map((element)=>(<Card
            key={element.id}
            title={element.title}
            desc={element.desc}
            img={element.img}
            tags={element.tags}
            />))}

            </div>
        </div>
    )
}

export default Projects
