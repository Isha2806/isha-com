import { v4 as uuid } from "uuid";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Drama",
    description:
      "Immerse yourself in intense, emotionally charged narratives that unfold on the pages of dramatic literature. Explore the depths of human emotions, relationships, and conflicts in this captivating genre.",
    img: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  },
  {
    _id: uuid(),
    categoryName: "Fantasy",
    description:
      "Escape to enchanting worlds filled with supernatural elements, magical creatures, and epic adventures. Immerse yourself in the realms of fantasy where imagination knows no bounds.",
    img: "https://images.unsplash.com/photo-1598153346810-860daa814c4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  },
  {
    _id: uuid(),
    categoryName: "Mystery/Thriller",
    description:
      "Indulge in suspense, puzzles, and the thrill of solving mysteries with our captivating collection of mystery and thriller novels. Experience the adrenaline rush as you uncover secrets and unravel intricate plots.",
    img: "https://img.freepik.com/free-photo/truth-concept-composition-detective-desk_23-2149051321.jpg?w=740&t=st=1684134188~exp=1684134788~hmac=32a19c5385100d4741aa841b31aef8e2a764868a8e24a2b98c9e61ae9d142f43",
  },
  {
    _id: uuid(),
    categoryName: "Romance",
    description:
      "Experience the captivating world of love, passion, and emotional connections through our extensive romance collection. Immerse yourself in heartwarming tales of relationships, desire, and the triumph of love.",
    img: "https://images.unsplash.com/photo-1510276113764-7ac28415a9ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    _id: uuid(),
    categoryName: "Business",
    description:
      "Gain insights into the world of commerce, entrepreneurship, and organizational management with our comprehensive business collection. Unlock strategies, knowledge, and inspiration to drive success in your professional endeavors.",
    img: "https://img.freepik.com/premium-photo/double-exposure-image-business-finance_31965-4219.jpg?w=740",
  },
  {
    _id: uuid(),
    categoryName: "Personal Development",
    description:
      "Embark on a transformative journey of personal growth and self-improvement with our curated selection of personal development resources. Discover actionable insights, tools, and techniques to unlock your full potential.",
    img: "https://images.unsplash.com/photo-1505816014357-96b5ff457e9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80",
  },
];
