// 《体温书 / Corpus》— 3D 精装画册，页面文件相对 assets/pages/。
window.PHOTOBOOK = {
  id: "corpus-photobook",
  title: "体温书",
  pageWidth: 768,
  pageHeight: 1024,
  frontCover: {
    file: "cover-right.png",
    alt: "深墨绿布纹封面，烫金书名“体温书”，下方英文“CORPUS”；中部金边框暖赭石色相拥人体油画；底部“一本关于身体与亲密的画册”。"
  },
  spreads: [
    {
      id: "s01",
      left: { file: "s01-left.png", alt: "扉页，中央“体温书”，下为“CORPUS”、“一本关于身体与亲密的画册”，底部“二〇二六”。" },
      right: { file: "s01-right.png", alt: "图1，暖赭石色相拥人体油画，图注“图1 暖赭石色的相拥，是全书的起点。”" }
    },
    {
      id: "s02",
      left: { file: "s02-left.png", alt: "图2 局部，厚涂油画裸体人物肩胸手局部，暖橙红与蓝紫。" },
      right: { file: "s02-right.png", alt: "图3 倒置，厚涂油画中两个裸体人物交叠倒置，暖粉与蓝绿。" }
    },
    {
      id: "s03",
      left: { file: "s03-left.png", alt: "图4 独坐，长发裸体人物坐卧，蓝灰与暖黄。" },
      right: { file: "s03-right.png", alt: "短诗，三行：“你靠近时 / 语言退后 / 体温先开口”。" }
    },
    {
      id: "s04",
      left: { file: "s04-left.png", alt: "图5 拥抱，刮刀数字涂抹风格相拥人体，暖橙与蓝绿。" },
      right: { file: "s04-right.png", alt: "图6 身体地形，深棕色调地图等高线式人体。" }
    },
    {
      id: "s05",
      left: { file: "s05-left.png", alt: "图7 报纸底，灰色报纸纹理上白线勾勒相拥人体。" },
      right: { file: "s05-right.png", alt: "图8 霓虹，霓虹紫粉与橙红色调的两个人体。" }
    },
    {
      id: "s06",
      left: { file: "s06-left.png", alt: "图9 亲吻，霓虹紫粉色调两个人体亲吻。" },
      right: { file: "s06-right.png", alt: "图10 蓝底，深蓝背景油画，坐者与躺者，金色色块。" }
    },
    {
      id: "s07",
      left: { file: "s07-left.png", alt: "版权页：“体温书 / CORPUS”，编选、开本、版次、印数信息，及版权声明。" },
      right: { file: "s07-right.png", alt: "尾声：“书合上了 / 体温还在 / 那些被画笔记住的拥抱 / 会在下次靠近时 / 重新温热”。" }
    }
  ],
  backCover: {
    file: "cover-left.png",
    alt: "深墨绿布纹封底，四行简介：“这是一本关于身体与亲密的画册 / 以油画、刮刀、素描、霓虹与等高线 / 记录相拥的身体与可被感知的温度 / 在语言退后之处，体温先开口”，底部小标识。"
  }
};
