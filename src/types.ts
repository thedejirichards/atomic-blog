export type PostProp = {
  title: string;
  body: string;
};

export type HeaderProp = {
  posts: PostProp[];
  onClearPosts: () => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export type SearchPosts = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export type MainPosts = {
  posts: PostProp[];
  onAddPost: (post: PostProp) => void;
};


export type PostContextProps = {
  posts: PostProp[];
  onAddPost: (post: PostProp) => void;
  onClearPosts: () => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};
