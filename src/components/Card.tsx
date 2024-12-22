import React from 'react';
import Image from 'next/image';
interface TypeProps{
    title:string;
    desc:string;
    img:string;
    tags:string[];
}
const Card:React.FC<TypeProps>=({title,desc,img,tags})=>
{
    return(
<div className='border border-accent w-[300px] sm:w-[350px] bg-[#e5f0fa]'>
    <div>
        <Image className='w-[300px] sm:w-[350px] h-auto'
        src={img}
        width={350}
        height={350}
        alt={title}
        />
    </div>
    <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>{title}</div>
        <div>{desc}</div>
        <div>
            {tags.map((element)=>
                (<div className='tags' key={element}>
                 {element}
                </div>))}
        </div>
    </div>
</div>

    )
}
export default Card