const socials = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/ssanjua",
    username: "github.com/ssanjua",
    tab: 6
  },
  {
    id: 2,
    title: "Linkedin",
    url: "https://www.linkedin.com/in/paupallares",
    username: "@paupallares",
    tab: 4
  },
  {
    id: 3,
    title: "Twitch",
    url: "https://twitch.tv/ssanjuaa",
    username: "tv/ssanjuaa",
    tab: 6
  },
  {
    id: 4,
    title: "Instagram",
    url: "https://instagram.com/ppupipallares",
    username: "@ppupipallares",
    tab: 3
  },
  {
    id: 5,
    title: "X",
    url: "https://x.com/pupipallares",
    username: "@pupipallares",
    tab: 11
  },
  {
    id: 6,
    title: "Hack the box",
    url: "https://app.hackthebox.com/users/1952862",
    username: "@ssanjua",
    tab: 0
  },
]

const Socials: React.FC = () => {

  const generateTabs = (count: number) => {
    return '\u00A0'.repeat(count)
  }
  return (
    <div>
      {socials.map(({ title, id, url, username, tab }) => (
        <div key={id} className="socials">
          <pre>
            <span>{title} </span> {generateTabs(tab)} ⬌ <span><a href={url} target="_blank"> {username}</a></span>
          </pre>
        </div>
      ))}
    </div>
  );
};

export default Socials