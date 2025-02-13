const sourcesPerPage = 4;

const emptyMessage = {
  id: "",
  email: "",
  subject: "",
  message: "",
  date: "",
};

const emptyEquipment = {
  id: "",
  code: "",
  title: "Gunny",
  subtitle: "",
  content: "",
  type: "",
  date: "",
  image: "",
  href: "",
  price: 0,
  discount: 0,
};

const listItems = [
  {
    id: "1",
    code: "A001",
    title: "Gunny",
    subtitle: "",
    content: "",
    type: "GAME",
    date: "2024-12-01",
    image:
      "https://res.cloudinary.com/dfgp67riy/image/upload/v1739450450/MTG-Background-Open-T2-25_hgjywf.png",
    href: "#",
    price: 1200000,
    discount: 10,
  },
  {
    id: "2",
    code: "A002",
    title: "Võ lâm truyền kỳ",
    subtitle: "",
    content: "",
    type: "GAME",
    date: "2024-12-01",
    image: "https://www.vltkh5.zing.vn/images/news-banner1.jpg",
    href: "#",
    price: 1500000,
    discount: 15,
  },
  {
    id: "3",
    code: "A003",
    title: "Kiếm thế",
    subtitle: "",
    content: "",
    type: "GAME",
    date: "2024-12-01",
    image:
      "https://photo.znews.vn/w660/Uploaded/wyhktpu/2023_03_22/cover_logo.png",
    href: "#",
    price: 1100000,
    discount: 5,
  },
  {
    id: "4",
    code: "A004",
    title: "Thiên long bát bộ",
    subtitle: "",
    content: "",
    type: "GAME",
    date: "2024-12-01",
    image: "https://cdnv2.tgdd.vn/mwg-static/common/News/1571972/Thumb.png",
    href: "#",
    price: 900000,
    discount: 20,
  },
  {
    id: "5",
    code: "A005",
    title: "Khu vườn trên mây",
    subtitle: "",
    content: "",
    type: "GAME",
    date: "2024-12-01",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHLx7NFUuxLIi5LVZEneGhqQdi6pIgivSgA4SqmOvO8_dkgNY64B90ssr_K_1qRUBtEk&usqp=CAU",
    href: "#",
    price: 2000000,
    discount: 10,
  },
  {
    id: "6",
    code: "A006",
    title: "Nông trại vui vẻ",
    subtitle: "",
    content: "",
    type: "GAME",
    date: "2024-12-01",
    image:
      "https://genk.mediacdn.vn/i3cdHgRLFSsYymUwFzVmcccccccccc/Image/2011/06/Zingfarm_ff6bd.jpg",
    href: "#",
    price: 1400000,
    discount: 12,
  },
];

export { listItems, sourcesPerPage, emptyMessage, emptyEquipment };
