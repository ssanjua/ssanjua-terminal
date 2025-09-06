import React from 'react'


const experience = [
  {
    id: 5,
    company: "stream hatchet",
    position: "front end developer.",
    url: "https://streamhatchet.com/",
    shorturl: "streamhatchet.com",
  },
  {
    id: 1,
    company: "atletico oeste",
    position: "full stack developer.",
    url: "https://ppaupallares.vercel.app/",
    shorturl: "atleticooeste.com",
  },
  {
    id: 2,
    company: "maxx eshop",
    position: "full stack developer.",
    url: "https://www.maxxeshop.com/",
    shorturl: "maxxeshop.com",
  },
]


const Experience: React.FC = () => {
  return (
    <div className='wrapper'>
      {experience.map(({ id, company, position, url, shorturl }) => (
        <div key={id} className='experience'>
          <span className="experience-flex"><h3> {company} -&gt;</h3><p>{position}</p></span>
          <a href={url} target="_blank">{shorturl} ☍</a>
        </div>
      ))}
    </div>
  )
}

export default Experience

