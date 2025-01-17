import { PerspectiveElement } from "pages/Perspective/PerspectiveTypes";

export const EFFECTIVE_COMMUNICATION_ELEMENTS: PerspectiveElement[] = [
  {
    type: "header-divider",
  },
  {
    type: "header",
    headerType: "h3",
    text: "Effective Communication",
  },
  {
    type: "content-gutter",
    text: "Software systems are complex. Most of the time, there is just too much work for any single person to handle, so we work in software development teams. In a larger system, there are multiple development teams, working on different parts of the system. For the software system to work, all the different parts created by developers within a team must fit together, as must the parts of the different teams.",
  },
  {
    type: "content",
    text: "For this to be possible, it is necessary to communicate. The better the communication, the better the parts will fit together, leading to a better system. I propose that by looking at the concepts of low-context and high-context communication we can teach ourselves to communicate more effectively, and especially so when communicating in a professional software development environment. Where a single miscommunication between two developers can cascade into a major issue in the entire software system.",
  },
  {
    type: "header-divider",
  },
  {
    type: "header",
    headerType: "h4",
    text: "High-Context Communication",
  },
  {
    type: "content-gutter",
    text: "True to its name, high-content communication relies heavily on a strong shared context. Participants assume the others understand things that were not explicitly defined in the current conversation, and they do so to a high degree. At the best of times, this can lead to very efficient and effective communication. That is when the assumptions of a shared context hold.",
  },
  {
    type: "content",
    text: "When the assumptions of a shared context fail, you are left with misunderstandings that are likely to go unnoticed for an extended period. As they exist because of assumptions that were never communicated.",
  },
  {
    type: "header-divider",
  },
  {
    type: "header",
    headerType: "h4",
    text: "Low-Context Communication",
  },
  {
    type: "content-with-bullet-list",
    text: "In low-context communication the participants express every detail of what they mean, even when it feels redundant. You make as little assumptions as you can, of course some assumptions are necessary. For instance you assume everyone speaks the language, but anything that you can reasonably fit within the meeting you explain. This has several benefits:",
    bullets: [
      "You allow yourself to be corrected if indeed your understanding is wrong.",
      "Allows people time to build their context of the subject, even if they already know what you are talking about, it might take time to get from their long-term storage to working memory.",
      "When you assume people know something, they can be reluctant to ask if they don't. This requires them to both tell you your assumptions are wrong and admit they don't know.",
    ],
  },
  {
    type: "content",
    text: "Of course, this type of communication takes longer, but so does writing code with tests. You could just assume your code works, and write the next feature while you would still be testing the first. But at some point, this will come back to haunt you.",
  },
  {
    type: "header-divider",
  },
  {
    type: "header",
    headerType: "h4",
    text: "Conclusion",
  },
  {
    type: "content-gutter",
    text: "High-context and low-context communication is a spectrum. You can and should communicate on established context with colleagues you work with regularly, however I propose that your default should be low-context communication.",
  },
  {
    type: "content",
    text: "You could think about it like defensive programming. You can't assume the data on the outer boundary of your system is valid, just as you cannot assume people know things you never discussed with them. You can only start to make assumptions once the data has passed through a data validation layer or rather you can only assume someone knows something after you confirm that they do. That is you don't assume, you know.",
  },
  {
    type: "content",
    text: "To allow for this you must have patience and empathy. There are no stupid questions, especially if you consider that the asker may already know the answer and is just making sure everybody is on the same page.",
  },
];
