export const blogData = [
  {
    id: "1",
    category: "Blogs",
    blogImg:
      "https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=3840&q=75",
    authorImg: "https://randomuser.me/api/portraits/men/14.jpg",
    authorName: "John Doe",
    date: "2023-04-02",
    title: "Blog Başlığı 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut, ducimus culpa impedit deleniti odit eius esse molestias commodi eligendi. Placeat hic unde.",
  },
  {
    id: "2",
    category: "Technology",
    blogImg:
      "https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    authorImg: "https://randomuser.me/api/portraits/women/14.jpg",
     authorName: "Melissa Jack",
    date: "2020-12-03",
    title: "Blog Başlığı 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut, ducimus culpa impedit deleniti odit eius esse molestias commodi eligendi. Placeat hic unde.",
  },
  {
    id: "3",
    category: "School",
    blogImg:
      "https://cdn.mos.cms.futurecdn.net/6QvJwTVmRiYz2xYep6FCvQ.jpg",
    authorImg: "https://randomuser.me/api/portraits/men/41.jpg",
     authorName: "Berkan Özmen",
    date: "2019-01-20",
    title: "Blog Başlığı 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut, ducimus culpa impedit deleniti odit eius esse molestias commodi eligendi. Placeat hic unde.",
  },
    {
    id: "4",
    category: "Programming",
    blogImg:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    authorImg: "https://randomuser.me/api/portraits/women/31.jpg",
     authorName: "Natalia John",
    date: "2024-05-23",
    title: "Blog Başlığı 4",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut, ducimus culpa impedit deleniti odit eius esse molestias commodi eligendi. Placeat hic unde.",
  },
];


export const categories = [
   {
    category: "Blogs"
  },
  {
    category : "Technology"
  },
  {
    category : "School"
  },
  {
    category: "Programming"
  },
 
]


  export const inputField = [
  {
    label: "Başlık",
    type: "text",
    placeholder: "Blog başlığını yazınız...",
    name: "title",
  },
  {
    label: "Kategori",
    type: "select",
    name: "category",
    options: [
      { value: "Blogs", label: "Blogs" },
      { value: "Technology", label: "Technology" },
      { value: "School", label: "School" },
      { value: "Programming", label: "Programming" },
    ],
  },
  {
    label: "Blog Görsel",
    type: "text",
    name: "blogImg",
    placeholder: "Blog Görsel Link Giriniz..."
  },
  {
    label: "Yazar Görsel",
    type: "text",
    placeholder: "Linki yazınız..",
    name: "authorImg",
  },
  {
    label: "Yazar İsim Soyisim",
    type: "text",
    placeholder: "Yazar isim-soyisim giriniz...",
    name: "authorName",
  },
  {
    label: "Tarih",
    type: "date",
    name: "date",
  },
  {
    label: "Blog Yazısı",
    type: "textarea",
    name: "content",
    placeholder: "Blog Yazısı."
  }
];


export const EditInputField = [
  {
    label: "Kategori",
    type: "select",
    name: "category",
    options: [
      { value: "Blogs", label: "Blogs" },
      { value: "Technology", label: "Technology" },
      { value: "School", label: "School" },
      { value: "Programming", label: "Programming" },
    ],
  },
   {
    label: "Yazar İsim-Soyisim",
    type: "text",
    name: "authorName",
  },
  {
    label: "Yazar Görsel",
    type: "text",
    name: "authorImg",
  },
  {
    label: "Blog Yazısı",
    type: "textarea",
    name: "content",
    placeholder: "Blog Yazısı..."
  }
];
