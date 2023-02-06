// axios
const posts = [
  {
    id: 1,
    title: '제목1',
    contents: '내용1',
    createdAt: '2020-01-01',
  },
  {
    id: 2,
    title: '제목2',
    contents: '내용2',
    createdAt: '2020-01-02',
  },
  {
    id: 3,
    title: '제목3',
    contents: '내용3',
    createdAt: '2020-01-03',
  },
  {
    id: 4,
    title: '제목4',
    contents: '내용4',
    createdAt: '2020-01-04',
  },
  {
    id: 5,
    title: '제목5',
    contents: '내용5',
    createdAt: '2020-01-05',
  },
];

export function getPosts() {
  return posts;
}

export function getPostById(id) {
  // eslint-disable-next-line prettier/prettier
  return posts.find((item) => item.id === id);
}
