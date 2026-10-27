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
      left: { file: "s01-left.png", alt: "扉页，中央竖排“体温书”，下为“CORPUS”，底部“一本关于身体与亲密的画册”。" },
      right: { file: "s01-right.png", alt: "图1，一位裸体女性背对观者独坐，暖橄榄绿背景，写实油画，画廊装裱。" }
    },
    {
      id: "s02",
      left: { file: "s02-left.png", alt: "章节“IN PUBLIC”，黑白窗边剪影：龟背竹、明亮窗户、桌上咖啡杯与眼镜。" },
      right: { file: "s02-right.png", alt: "红色房间里，一位女性坐在窗边，窗玻璃上是两人亲吻的剪影。" }
    },
    {
      id: "s03",
      left: { file: "s03-left.png", alt: "黑白摄影，一位双辫女性背对观者，双手在身后抓着衣服。" },
      right: { file: "s03-right.png", alt: "数字绘画，一位长发裸体女性坐卧，蓝灰背景与暖黄肤色。" }
    },
    {
      id: "s04",
      left: { file: "s04-left.png", alt: "一位男性背对观者跪坐，穿黑色内裤，身下红色地毯，背景杂乱房间与猫。" },
      right: { file: "s04-right.png", alt: "一位女性背对观者，穿红色内裤，在白色床铺上，笔触写意。" }
    },
    {
      id: "s05",
      left: { file: "s05-left.png", alt: "章节“IN PRIVATE”，暖赭石色调，两个裸体人物侧身躺卧交叠，绿植背景。" },
      right: { file: "s05-right.png", alt: "水彩灰调，两个裸体人物在床榻上拥抱，背景垂坠窗帘。" }
    },
    {
      id: "s06",
      left: { file: "s06-left.png", alt: "报纸文字底，白色线条勾勒拥抱，金发人物，灰调素描。" },
      right: { file: "s06-right.png", alt: "报纸文字底，白色线条勾勒拥抱，画面中有一双交叠的大手。" }
    },
    {
      id: "s07",
      left: { file: "s07-left.png", alt: "霓虹紫粉与橙红色调，两个裸体人物拥抱，数字绘画。" },
      right: { file: "s07-right.png", alt: "霓虹紫粉色调，两个裸体人物亲吻，背景亮色块。" }
    },
    {
      id: "s08",
      left: { file: "s08-left.png", alt: "刮刀涂抹，暖橙与蓝绿色调，两个裸体人物拥抱，左上角黑标签“could be us”。" },
      right: { file: "s08-right.png", alt: "暖光下两个裸体人物拥抱，深色背景，手写英文“your arms make the best final hide”。" }
    },
    {
      id: "s09",
      left: { file: "s09-left.png", alt: "留白页，右下角有一个极小的装饰性花纹。" },
      right: { file: "s09-right.png", alt: "暖棕色调古典油画，室内，窗外圆月，两个人物在床榻依偎，旁有红酒杯。" }
    },
    {
      id: "s10",
      left: { file: "s10-left.png", alt: "黑白摄影，深色背景，女性背影，两个人物安静拥抱，明暗对比强。" },
      right: { file: "s10-right.png", alt: "黑白摄影，两个人物拥抱，其中一只手戴着白色手套。" }
    },
    {
      id: "s11",
      left: { file: "s11-left.png", alt: "橙色浮雕/蜡染质感，两个拥抱人物以凹凸浮雕呈现，背景装饰花纹。" },
      right: { file: "s11-right.png", alt: "粉色背景，黑色线条勾勒两个拥抱人物，极简插画。" }
    },
    {
      id: "s12",
      left: { file: "s12-left.png", alt: "章节“FRAGMENTS”，厚涂油画，裸体肩胸与手臂局部，暖橙红与蓝紫。" },
      right: { file: "s12-right.png", alt: "暖棕色调，一只手轻柔地抚摸另一个人的头部，亲密特写。" }
    },
    {
      id: "s13",
      left: { file: "s13-left.png", alt: "黑白摄影，一只手在唇边，手指轻触另一个人的嘴。" },
      right: { file: "s13-right.png", alt: "素描，一只张开的手，手指姿态舒展，灰色纸底。" }
    },
    {
      id: "s14",
      left: { file: "s14-left.png", alt: "粉色调，脸部与嘴唇的近距离特写，柔和素描质感。" },
      right: { file: "s14-right.png", alt: "黑白摄影，腰部与蕾丝内衣特写，腰侧细小手写字“love me”，穿牛仔裤。" }
    },
    {
      id: "s15",
      left: { file: "s15-left.png", alt: "黑白摄影，身体局部，画面故意失焦朦胧，柔和灰阶。" },
      right: { file: "s15-right.png", alt: "短诗三行：“有些靠近 / 不必清晰 / 像雾认出了身体”。" }
    },
    {
      id: "s16",
      left: { file: "s16-left.png", alt: "章节“TRANSFORM”，蓝色背景，金色与黄色色块，坐者与躺者，写意油画。" },
      right: { file: "s16-right.png", alt: "深棕色调，身体以地图等高线方式呈现，装饰性抽象。" }
    },
    {
      id: "s17",
      left: { file: "s17-left.png", alt: "厚涂油画，两个人物交叠、画面倒置，暖粉与蓝绿色调。" },
      right: { file: "s17-right.png", alt: "黑色背景，扭曲身体由黑白相间条纹构成，欧普艺术风格。" }
    },
    {
      id: "s18",
      left: { file: "s18-left.png", alt: "白色背景左右分栏，“In Public”与“In Private”下各一个人物线条速写。" },
      right: { file: "s18-right.png", alt: "彩色写意油画，一个人物斜倚沙发，蓝橙与黄白色调。" }
    },
    {
      id: "s19",
      left: { file: "s19-left.png", alt: "黑白水墨质感，一位芭蕾舞者腾空起舞，裙摆如烟雾晕染。" },
      right: { file: "s19-right.png", alt: "彩色油画，一只握画笔的手位于前景，背景海浪与帆船，关于绘画本身的元绘画。" }
    }
  ],
  backCover: {
    file: "cover-left.png",
    alt: "深墨绿布纹封底，四行简介：“这是一本关于身体与亲密的画册 / 以油画、刮刀、素描、霓虹与等高线 / 记录相拥的身体与可被感知的温度 / 在语言退后之处，体温先开口”，底部小标识。"
  }
};
