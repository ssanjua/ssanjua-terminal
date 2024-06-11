export type Command = {
  cmd: string;
  desc: string;
  tab: number;
}[];

export const commands: Command = [
  { cmd: "about", desc: "about Pau Pallares aka ssanjua", tab: 8 },
  { cmd: "clear", desc: "clear the terminal", tab: 8 },
  { cmd: "projects", desc: "view my main projects", tab: 5 },
  { cmd: "education", desc: "my education background", tab: 4 },
  { cmd: "email", desc: "send me an email", tab: 8 },
  { cmd: "portfolio", desc: "go to my portfolio", tab: 4 },
  { cmd: "help", desc: "check commands", tab: 9 },
  { cmd: "history", desc: "view command history", tab: 6 },
  { cmd: "socials", desc: "check out my social accounts", tab: 6 },
  { cmd: "themes", desc: "check available themes", tab: 7 },
  { cmd: "welcome", desc: "display hero section", tab: 6 },
  { cmd: "whoami", desc: "about current user", tab: 7 }
];