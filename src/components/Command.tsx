export type Command = {
  cmd: string;
  desc: string;
  tab: number;
}[];

export const commands: Command = [
  { cmd: "about", desc: "about Pau Pallares aka ssanjua", tab: 9 },
  { cmd: "clear", desc: "clear the terminal", tab: 9 },
  { cmd: "hello", desc: "best way to start a conversation", tab: 9 },
  { cmd: "projects", desc: "view my main projects", tab: 6 },
  { cmd: "education", desc: "my education background", tab: 5 },
  { cmd: "cv", desc: "click to download my CV", tab: 12 },
  { cmd: "email", desc: "send me an email", tab: 9 },
  { cmd: "portfolio", desc: "go to my portfolio", tab: 5 },
  { cmd: "help", desc: "check available commands", tab: 10 },
  { cmd: "socials", desc: "check out my social accounts", tab: 7 },
  { cmd: "repo", desc: "open my GitHub page", tab: 10 },
  { cmd: "linkedin", desc: "let's connect on LinkedIn", tab: 6 }, 
  { cmd: "themes", desc: "check available themes", tab: 8 },
  { cmd: "lang", desc: "change the output language", tab: 10 },
  { cmd: "welcome", desc: "display hero section", tab: 7 },
  { cmd: "whoami", desc: "about the current user", tab: 8 },
  { cmd: "sudo", desc: "???", tab: 10 },
];
