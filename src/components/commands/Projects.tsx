import React from 'react'


const projects = [
  {
    id: 5,
    title: "indie podcasts",
    desc: "web application designed for small and indie podcasts, easy to share, to use and to love.",
    url: "https://indiepodcasts.vercel.app/",
    shorturl: "indiepodcasts.app",
  },
  {
    id: 6,
    title: "personal linktree",
    desc: "my personal linktree, a collection of my social media accounts.",
    url: "https://ss-link.vercel.app/",
    shorturl: "ss-link.vercel.app",
  },
  {
    id: 7,
    title: "ss4njua blog",
    desc: "my personal blog, a collection of my thoughts and projects.",
    url: "https://ss4njua.vercel.app/",
    shorturl: "ss4njua.vercel.app",
  },
  {
    id: 1,
    title: "audiovisual web page",
    desc: "my personal audiovisual website, yeah I'm a filmmaker too :D.",
    url: "https://ppaupallares.vercel.app/",
    shorturl: "ppaupallares.app",
  },
  {
    id: 2,
    title: "bookeando",
    desc: "booking app, features Stripe, authentication, and end-to-end testing, users can book a hotel and manage the reservation as a hospitality owner as well.",
    url: "https://bookeando.onrender.com/",
    shorturl: "bookeando.com",
  },
  {
    id: 3,
    title: "yarco delivery",
    desc: "a platform where you can order food, inspired by my hometown favourite meals.",
    url: "https://sanjuan-delivery-app-frontend.onrender.com/",
    shorturl: "yarcodelivery.com",
  },
  {
    id: 4,
    title: "harvey's app",
    desc: "a fun app that uses text-to-speech technology to bring Harvey, Michael's robot from 'The Office,' to life. Make Harvey speak whatever you type!",
    url: "https://ssanjua.pythonanywhere.com/",
    shorturl: "harveysapp.com",
  },
]


const Projects: React.FC = () => {
  return (
    <div className='wrapper'>
      {projects.map(({ id, title, desc, url, shorturl }) => (
        <div key={id} className='projects'>
          <h3>˂ {title} ˃</h3>
          <a href={url} target="_blank">{shorturl}</a>
          <p>{desc}</p>
         
        </div>
      ))}
    </div>
  )
}

export default Projects

