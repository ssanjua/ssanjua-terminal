const socials = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/ssanjua",
    username: "github.com/ssanjua",
  },
  {
    id: 2,
    title: "Linkedin",
    url: "https://www.linkedin.com/in/paupallares",
    username: "@paupallares",
  },
  {
    id: 3,
    title: "Twitch",
    url: "https:/twitch.tv/ssanjuaa",
    username: "tv/ssanjuaa",
  },
  {
    id: 4,
    title: "Instagram",
    url: "https://instagram.com/ppupipallares",
    username: "@ppupipallares",
  },
]

const Socials: React.FC = () => {
  return (
    <div>
      {socials.map(({ title, id, url, username }) => (
        <div key={id} className="socials">
          <pre>
            <span>{title} </span> - <span><a href={url} target="_blank"> {username}</a></span>
          </pre>
        </div>
      ))}
    </div>
  );
};

export default Socials