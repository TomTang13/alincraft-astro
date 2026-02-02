export interface Product {
  id: number;
  name: string;
  nameZh: string;
  nameJa?: string;
  nameKo?: string;
  description: string;
  descriptionZh: string;
  price: number;
  currency: string;
  category: string;
  image: string;
  images: string[];
  sizes?: string[];
  colors?: string[];
  colorImages?: Record<string, string[]>;
  isDigital?: boolean;
  features?: {
    en: string[];
    zh?: string[];
  };
  howToOrder?: {
    en: string[];
    zh?: string[];
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: "Custom Crochet Australian Shepherd Plush, Personalized Pet Memorial Gift",
    nameZh: "定制澳洲牧羊犬玩偶, 宠物纪念礼物",
    nameJa: "オーストラリアンシェパードぬいぐるみ, ペットメモリアルギフト",
    nameKo: "호주 셰퍼드 아미구루미 인형, 반려동물 기념 선물",
    description: "Bring your favorite pet to life with our custom crochet pets, handmade and personalized from your pet's photo. Each amigurumi plush is carefully crafted to capture your pet's unique colors and details, creating a meaningful keepsake and a thoughtful gift for pet lovers of all ages.",
    descriptionZh: "根据您宠物的照片定制手工编织玩偶，精心捕捉您宠物独特的颜色和细节，打造有意义的纪念品和贴心的礼物。",
    descriptionJa: "大切なペットの写真から、オーダーメードの crochet ペットが生まれます。各アミグリュミぬいぐるみは、ペットの独自の色と細部を丁寧にキャプチャし、あらゆる年齢のペット愛好家にとって意味のある記念品と心に残るギフトを作成します。",
    price: 160,
    currency: "USD",
    category: "Dogs",
    image: "/images/products/p1_1.jpg",
    images: [
      "/images/products/p1_1.jpg", "/images/products/p1_2.jpg", "/images/products/p1_3.jpg",
      "/images/products/p1_4.jpg", "/images/products/p1_5.jpg", "/images/products/p1_6.jpg",
      "/images/products/p1_7.jpg", "/images/products/p1_8.jpg", "/images/products/p1_9.jpg",
      "/images/products/p1_10.jpg"
    ],
    sizes: ["4\" (10cm)", "6\" (16cm)", "8\" (20cm)", "10\" (25cm)", "12\" (30cm)", "14\" (35cm)", "16\" (40cm)"],
    colors: ["Blue Merle", "Red Merle", "Black", "Red with White/Tan", "Others"],
    colorImages: {
      "Blue Merle": ["/images/products/p1_1.jpg", "/images/products/p1_2.jpg", "/images/products/p1_3.jpg", "/images/products/p1_4.jpg"],
      "Red Merle": ["/images/products/p1_5.jpg", "/images/products/p1_6.jpg", "/images/products/p1_7.jpg"],
      "Black": ["/images/products/p1_1.jpg", "/images/products/p1_2.jpg"],
      "Red with White/Tan": ["/images/products/p1_3.jpg", "/images/products/p1_4.jpg"],
      "Others": ["/images/products/p1_8.jpg", "/images/products/p1_9.jpg", "/images/products/p1_10.jpg"]
    },
    features: {
      en: [
        "100% Handmade with love and high-quality yarn",
        "Fully personalized from your pet photos",
        "Captures unique colors and markings",
        "Perfect as pet memorial or gift for dog lovers"
      ],
      zh: [
        "100% 手工制作，使用高品质毛线",
        "根据您的宠物照片完全个性化定制",
        "捕捉独特的颜色和斑纹",
        "完美的宠物纪念品或送给爱狗人士的礼物"
      ]
    },
    howToOrder: {
      en: [
        "Purchase this listing",
        "Send me clear photos of your dog (front, side, and back views)",
        "I'll start crafting your personalized Aussie keepsake"
      ],
      zh: [
        "购买此商品",
        "发送您狗狗的清晰照片（正面、侧面、背面）",
        "我将开始为您制作个性化的澳洲牧羊犬纪念玩偶"
      ]
    }
  },
  {
    id: 2,
    name: "Custom Crochet French Bulldog Plush, Personalized Pet Memorial Gift",
    nameZh: "定制法国斗牛犬玩偶, 宠物纪念礼物",
    nameJa: "フレンチブルドッグぬいぐるみ, ペットメモリアルギフト",
    nameKo: "프렌치 불독 아미구루미 인형, 반려동물 기념 선물",
    description: "Capture the iconic bat ears and squishy face of your best friend with a Custom Crochet French Bulldog! Whether you are a proud Frenchie Mom or looking for a meaningful pet memorial keepsake, this handmade Amigurumi replica is the perfect tribute.\n\nI specialize in turning your pet photos into a huggable Frenchie stuffed animal. I pay special attention to their unique markings—whether it's a complex Brindle, a spotted Pied, a classic Fawn, or a rare Blue/Merle coat—to create a true \"Mini Me\" version of your dog.",
    descriptionZh: "捕捉您最好朋友的标志性蝙蝠耳朵和柔软脸庞，定制的法国斗牛犬玩偶。无论您是骄傲的法国斗牛犬妈妈，还是在为失去爱宠寻找有意义的纪念品，这款手工编织的玩偶都是完美的致敬。",
    descriptionJa: "大切な相棒の特徴的なコウモリのような耳と柔らかい顔を、オーダーメードの Frenchie ぬいぐるみで実現しましょう。",
    price: 160,
    currency: "USD",
    category: "Dogs",
    image: "/images/products/p2_1.jpg",
    images: [
      "/images/products/p2_1.jpg", "/images/products/p2_2.jpg", "/images/products/p2_3.jpg",
      "/images/products/p2_4.jpg", "/images/products/p2_5.jpg", "/images/products/p2_6.jpg",
      "/images/products/p2_7.jpg", "/images/products/p2_8.jpg", "/images/products/p2_9.jpg",
      "/images/products/p2_10.jpg"
    ],
    sizes: ["4\" (10cm)", "6\" (16cm)", "8\" (20cm)", "10\" (25cm)", "12\" (30cm)", "14\" (35cm)", "16\" (40cm)"],
    colors: ["White", "Fawn", "Brindle", "Black", "Cream", "Grey Merle", "Others"],
    colorImages: {
      "White": ["/images/products/p2_1.jpg", "/images/products/p2_2.jpg"],
      "Fawn": ["/images/products/p2_3.jpg", "/images/products/p2_4.jpg"],
      "Brindle": ["/images/products/p2_5.jpg", "/images/products/p2_6.jpg"],
      "Black": ["/images/products/p2_7.jpg", "/images/products/p2_8.jpg"],
      "Cream": ["/images/products/p2_9.jpg"],
      "Grey Merle": ["/images/products/p2_10.jpg"],
      "Others": ["/images/products/p2_1.jpg"]
    },
    features: {
      en: [
        "Signature Details: Bat-like ears, flat muzzle, and little rolls",
        "Color Matching Expert: Can replicate unique patterns and coat shades",
        "Meaningful Gift: Perfect for French Bulldog lovers or pet memorial",
        "Handmade Quality: Sturdy, soft, and full of personality"
      ],
      zh: [
        "标志性细节：蝙蝠般的耳朵、扁平的口鼻和小褶皱",
        "色彩匹配专家：可以复制独特的图案和毛发颜色",
        "有意义的礼物：非常适合法国斗牛犬爱好者或宠物纪念",
        "手工品质：坚固、柔软、充满个性"
      ]
    },
    howToOrder: {
      en: [
        "Purchase this listing",
        "Send me clear photos of your Frenchie (front, side, and back views are crucial for markings!)",
        "I'll start crafting your personalized Frenchie portrait"
      ],
      zh: [
        "购买此商品",
        "发送您法斗的清晰照片（正面、侧面、背面对展示斑纹至关重要！）",
        "我将开始为您制作个性化的法国斗牛犬纪念玩偶"
      ]
    }
  },
  {
    id: 4,
    name: "Custom Crochet Dachshund Plush, Personalized Pet Memorial Gift",
    nameZh: "定制腊肠犬玩偶, 宠物纪念礼物",
    nameJa: "ダックスフンドぬいぐるみ, ペットメモリアルギフト",
    nameKo: "닥스훈트 아미구루미 인형, 반려동물 기념 선물",
    description: "Capture the unique personality of your beloved Doxie with a Custom Crochet Dachshund made just for you! Whether you are celebrating a new puppy or honoring a furry friend who has crossed the rainbow bridge, this handmade Amigurumi replica is the perfect keepsake.\n\nTurn your favorite photos into a huggable Sausage Dog stuffed animal. I pay close attention to every detail—from their specific markings to their floppy ears—to create a true \"Mini Me\" version of your pet.",
    descriptionZh: "捕捉您心爱腊肠犬的独特个性，专为您定制的腊肠犬玩偶。无论是庆祝新小狗的到来，还是纪念已过彩虹桥的毛孩子，这款手工编织的玩偶都是完美的纪念品。",
    descriptionJa: "大切なドキシーの独特なパーソナリティを、オーダーメードのダックスフンドぬいぐるみで表現しましょう。新しい子犬の誕生祝いに、または虹の橋を渡った友人を偲んで手に取るのに、この手作りのアミグリュミ レプリカは完璧な記念品です。",
    price: 160,
    currency: "USD",
    category: "Dogs",
    image: "/images/products/p4_1.jpg",
    images: [
      "/images/products/p4_1.jpg", "/images/products/p4_2.jpg", "/images/products/p4_3.jpg",
      "/images/products/p4_4.jpg", "/images/products/p4_5.jpg", "/images/products/p4_6.jpg",
      "/images/products/p4_7.jpg", "/images/products/p4_8.jpg", "/images/products/p4_9.jpg",
      "/images/products/p4_10.jpg"
    ],
    sizes: ["4\" (10cm)", "6\" (16cm)", "8\" (20cm)", "10\" (25cm)", "12\" (30cm)", "14\" (35cm)", "16\" (40cm)"],
    colors: ["Chocolate", "Red", "Black and Tan", "Dapple", "Others"],
    colorImages: {
      "Chocolate": ["/images/products/p4_1.jpg", "/images/products/p4_2.jpg"],
      "Red": ["/images/products/p4_3.jpg", "/images/products/p4_4.jpg"],
      "Black and Tan": ["/images/products/p4_5.jpg", "/images/products/p4_6.jpg"],
      "Dapple": ["/images/products/p4_7.jpg", "/images/products/p4_8.jpg"],
      "Others": ["/images/products/p4_9.jpg", "/images/products/p4_10.jpg"]
    },
    features: {
      en: [
        "100% Handmade with love and high-quality yarn",
        "Fully personalized from your pet photos",
        "Perfect gift for dog moms or pet memorial",
        "Versatile: Decor, desk companion, or comforting plush"
      ],
      zh: [
        "100% 手工制作，使用高品质毛线",
        "根据您的宠物照片完全个性化定制",
        "完美的狗妈妈礼物或宠物纪念品",
        "多功能：装饰、桌面伴侣或安慰毛绒玩具"
      ]
    },
    howToOrder: {
      en: [
        "Purchase this listing",
        "Send me clear photos of your Dachshund (front, side, and back views helpful!)",
        "I'll start crafting your personalized Doxie keepsake"
      ],
      zh: [
        "购买此商品",
        "发送您腊肠犬的清晰照片（正面、侧面、背面视图会有帮助！）",
        "我将开始为您制作个性化的腊肠犬纪念玩偶"
      ]
    }
  },
  {
    id: 5,
    name: "Custom Crochet Rottweiler Plush, Personalized Pet Memorial Gift",
    nameZh: "定制罗威纳犬玩偶, 宠物纪念礼物",
    nameJa: "ロットワイラーぬいぐるみ, ペットメモリアルギフト",
    nameKo: "로트weiler 아미구루미 인형, 반려동물 기념 선물",
    description: "Celebrate the loyalty and love of your \"gentle giant\" with a Custom Crochet Rottweiler made exclusively for you! Whether you are looking for a unique Rottie gift for a dog dad, or a comforting pet memorial keepsake to honor a best friend, this handmade Amigurumi replica is designed to warm your heart.\n\nI specialize in turning your favorite pictures into a huggable Rottweiler stuffed animal. From their signature black and tan markings to their expressive eyebrows, I carefully crochet every detail to create a true \"Mini Me\" of your dog.",
    descriptionZh: "为您专属定制的罗威纳犬玩偶，庆祝您温柔巨人的忠诚和爱。无论您是为狗爸爸寻找独特的礼物，还是想用贴心的宠物纪念品来纪念最好的朋友，这款手工编织的玩偶都能温暖您的心。",
    descriptionJa: "あなたの「優しい巨人」の忠誠と愛を祝う、オーダーメードのロットワイラーぬいぐるみを作成します。ユニークな Rottie ギフトを探す方や、最良の友人を偲ぶ温かいペットメモリアルを探している方に、この手作りのアミグリュミ レプリカは心を温かくします。",
    price: 160,
    currency: "USD",
    category: "Dogs",
    image: "/images/products/p5_1.jpg",
    images: ["/images/products/p5_1.jpg", "/images/products/p5_2.jpg", "/images/products/p5_3.jpg"],
    sizes: ["4\" (10cm)", "6\" (16cm)", "8\" (20cm)", "10\" (25cm)", "12\" (30cm)", "14\" (35cm)", "16\" (40cm)"],
    colors: ["Standard Black & Tan"],
    colorImages: {
      "Standard Black & Tan": ["/images/products/p5_1.jpg", "/images/products/p5_2.jpg", "/images/products/p5_3.jpg"]
    },
    features: {
      en: [
        "Handmade with Love: Each plush crocheted with soft, high-quality yarn",
        "100% Personalized from your pet photos",
        "Meaningful Gift: Perfect for Rottweiler lovers or sympathy gift",
        "Durable & Cute: Lasting keepsake as decor or comforting companion"
      ],
      zh: [
        "手工制作：用柔软的高品质毛线编织",
        "100% 根据您的宠物照片个性化定制",
        "有意义的礼物：非常适合罗威纳犬爱好者或慰问礼物",
        "耐用又可爱：可作为装饰或安慰伴侣的持久纪念品"
      ]
    },
    howToOrder: {
      en: [
        "Add this listing to your cart",
        "Send me clear photos of your Rottweiler (face, chest markings, and full body)",
        "I'll create your one-of-a-kind crochet dog portrait"
      ],
      zh: [
        "将此商品加入购物车",
        "发送您罗威纳犬的清晰照片（面部、胸部斑纹和全身）",
        "我将为您创建独一无二的钩针狗狗肖像"
      ]
    }
  },
  {
    id: 6,
    name: "Custom Crochet Beagle Plush, Personalized Pet Memorial Gift",
    nameZh: "定制比格犬玩偶, 宠物纪念礼物",
    nameJa: " Beagleぬいぐるみ, ペットメモリアルギフト",
    nameKo: "비글 아미구루미 인형, 반려동물 기념 선물",
    description: "Capture the floppy ears and soulful eyes of your favorite hound with a Custom Crochet Beagle! Whether you are looking for a unique Beagle Mom gift or a touching pet memorial keepsake to honor a furry friend, this handmade Amigurumi replica is crafted with love.\n\nI specialize in turning your cherished photos into a huggable Beagle stuffed animal. I pay special attention to their distinct tri-color markings (or lemon/bi-color patterns) and adorable expressions to create a true \"Mini Me\" version of your dog.",
    descriptionZh: "捕捉您心爱猎犬的垂耳和深情眼睛，定制的比格犬玩偶。无论您是想为比格犬妈妈寻找独特的礼物，还是想用贴心的宠物纪念品来纪念毛孩子，这款手工编织的玩偶都是用爱精心制作的。",
    descriptionJa: "大切な猟犬の垂れ耳と魂の目を、オーダーメードの Beagle ぬいぐるみで表現しましょう。ユニークな Beagle ママ ギフトを探す方や、毛皮の手法を偲んで心に訴えるペットメモリアルを探している方に、この手作りのアミグリュミ レプリカは愛情込めて作られています。",
    price: 160,
    currency: "USD",
    category: "Dogs",
    image: "/images/products/p6_1.jpg",
    images: [
      "/images/products/p6_1.jpg", "/images/products/p6_2.jpg", "/images/products/p6_3.jpg",
      "/images/products/p6_4.jpg", "/images/products/p6_5.jpg", "/images/products/p6_6.jpg",
      "/images/products/p6_7.jpg", "/images/products/p6_8.jpg", "/images/products/p6_9.jpg"
    ],
    sizes: ["4\" (10cm)", "6\" (16cm)", "8\" (20cm)", "10\" (25cm)", "12\" (30cm)", "14\" (35cm)", "16\" (40cm)"],
    colors: ["Bicolor Brown/White", "Bicolor Black/White", "Black/Brown/White", "Others"],
    colorImages: {
      "Bicolor Brown/White": ["/images/products/p6_1.jpg", "/images/products/p6_2.jpg", "/images/products/p6_3.jpg"],
      "Bicolor Black/White": ["/images/products/p6_4.jpg", "/images/products/p6_5.jpg"],
      "Black/Brown/White": ["/images/products/p6_6.jpg", "/images/products/p6_7.jpg", "/images/products/p6_8.jpg"],
      "Others": ["/images/products/p6_9.jpg"]
    },
    features: {
      en: [
        "Handmade Art: Each stitch carefully crocheted for durable, soft plush",
        "Truly Personalized from your pet photos",
        "Meaningful Gift: Perfect for Beagle lovers or sympathy gift",
        "Forever Keepsake: Sweet way to keep your pup's memory close"
      ],
      zh: [
        "手工艺术：每一针都仔细编织，确保耐用且柔软",
        "真正根据您的宠物照片个性化定制",
        "有意义的礼物：非常适合比格犬爱好者或慰问礼物",
        "永恒纪念品：让您的狗狗记忆常伴身边的甜蜜方式"
      ]
    },
    howToOrder: {
      en: [
        "Purchase this listing",
        "Send me clear photos of your Beagle (front, side, and back views best for markings!)",
        "I'll craft your personalized crochet dog portrait"
      ],
      zh: [
        "购买此商品",
        "发送您比格犬的清晰照片（正面、侧面、背面最能展示斑纹！）",
        "我将为您制作个性化的钩针狗狗肖像"
      ]
    }
  },
  {
    id: 7,
    name: "Custom Crochet English Bulldog Plush, Personalized Pet Memorial Gift",
    nameZh: "定制英国斗牛犬玩偶, 宠物纪念礼物",
    nameJa: "イングリッシュブルドッグぬいぐるみ, ペットメモリアルギフト",
    nameKo: "잉글리시 불독 아미구루미 인형, 반려동물 기념 선물",
    description: "Capture the irresistible wrinkles and grumpy-cute expression of your beloved \"Bully\" with a Custom Crochet English Bulldog! Whether you are looking for a unique gift for a Bulldog Mom or a touching pet memorial keepsake, this handmade Amigurumi replica is the perfect tribute.\n\nI specialize in turning your favorite photos into a huggable English Bulldog stuffed animal. I pay special attention to their iconic rolls, underbite, and stocky build to create a true \"Mini Me\" version of your dog.",
    descriptionZh: "捕捉您心爱斗牛犬无法抗拒的皱纹和可爱的表情，定制的英国斗牛犬玩偶。无论您是想为斗牛犬妈妈寻找独特的礼物，还是想用贴心的宠物纪念品来纪念忠诚的伙伴，这款手工编织的玩偶都是完美的致敬。",
    descriptionJa: "大切な「暴れん坊」の irresistibly な皺と不機嫌可愛い表情を、オーダーメードのイングリッシュブルドッグぬいぐるみで表現しましょう。ユニークな Bulldog ママ ギフトを探す方や、忠実な相棒を偲ぶ心に訴えるペットメモリアルを探している方に、この手作りのアミグリュミ レプリカは完璧なトリビュートです。",
    price: 160,
    currency: "USD",
    category: "Dogs",
    image: "/images/products/p7_1.jpg",
    images: [
      "/images/products/p7_1.jpg", "/images/products/p7_2.jpg", "/images/products/p7_3.jpg",
      "/images/products/p7_4.jpg", "/images/products/p7_5.jpg", "/images/products/p7_6.jpg",
      "/images/products/p7_7.jpg", "/images/products/p7_8.jpg", "/images/products/p7_9.jpg",
      "/images/products/p7_10.jpg"
    ],
    sizes: ["4\" (10cm)", "6\" (16cm)", "8\" (20cm)", "10\" (25cm)", "12\" (30cm)", "14\" (35cm)", "16\" (40cm)"],
    colors: ["Brindle", "White", "Red", "Fawn", "Others"],
    colorImages: {
      "Brindle": ["/images/products/p7_1.jpg", "/images/products/p7_2.jpg", "/images/products/p7_3.jpg"],
      "White": ["/images/products/p7_4.jpg", "/images/products/p7_5.jpg"],
      "Red": ["/images/products/p7_6.jpg", "/images/products/p7_7.jpg"],
      "Fawn": ["/images/products/p7_8.jpg", "/images/products/p7_9.jpg"],
      "Others": ["/images/products/p7_10.jpg"]
    },
    features: {
      en: [
        "Detail-Oriented: Signature wrinkles and markings carefully crocheted",
        "100% Personalized from your pet photos",
        "Meaningful Gift: Perfect for Bulldog lovers or sympathy gift",
        "Soft & Durable: Made with high-quality yarn"
      ],
      zh: [
        "注重细节：仔细编织标志性的皱纹和斑纹",
        "100% 根据您的宠物照片个性化定制",
        "有意义的礼物：非常适合斗牛犬爱好者或慰问礼物",
        "柔软耐用：采用高品质毛线制作"
      ]
    },
    howToOrder: {
      en: [
        "Purchase this listing",
        "Send me clear photos of your Bulldog (front, side, and back views showing markings!)",
        "I'll start crafting your personalized Bulldog portrait"
      ],
      zh: [
        "购买此商品",
        "发送您英国斗牛犬的清晰照片（正面、侧面、背面展示斑纹！）",
        "我将开始为您制作个性化的英国斗牛犬纪念玩偶"
      ]
    }
  },
  {
    id: 8,
    name: "Custom Crochet Poodle Plush, Personalized Pet Memorial Gift",
    nameZh: "定制贵宾犬玩偶, 宠物纪念礼物",
    nameJa: "プードルぬいぐるみ, ペットメモリアルギフト",
    nameKo: "푸들 아미구루미 인형, 반려동물 기념 선물",
    description: "Capture the elegance and curly cuteness of your furry friend with a Custom Crochet Poodle! Whether you have a tiny Toy Poodle or a majestic Standard Poodle, this handmade Amigurumi replica is crafted to look just like them.\n\nI specialize in turning your pet photos into a huggable Poodle stuffed animal. I pay special attention to reproducing their signature curly fur texture and specific haircut (from \"Teddy Bear\" cuts to show clips) to create a true \"Mini Me\" of your dog.",
    descriptionZh: "捕捉您毛茸茸朋友的优雅和卷曲可爱，定制的贵宾犬玩偶。无论您有 tiny 的玩具贵宾犬还是威严的标准贵宾犬，这款手工编织的玩偶都精心制作，力求惟妙惟肖。",
    descriptionJa: "毛皮の手法の優雅と巻き毛のかわいさを、オーダーメードのプードルぬいぐるみで表現しましょう。 tiny なトイプードルでも、威厳のあるスタンダードプードルでも、この手作りのアミグリュミ レプリカは、まるでそのままのような外観を実現します。",
    price: 160,
    currency: "USD",
    category: "Dogs",
    image: "/images/products/p8_1.jpg",
    images: [
      "/images/products/p8_1.jpg", "/images/products/p8_2.jpg", "/images/products/p8_3.jpg",
      "/images/products/p8_4.jpg", "/images/products/p8_5.jpg", "/images/products/p8_6.jpg",
      "/images/products/p8_7.jpg", "/images/products/p8_8.jpg", "/images/products/p8_9.jpg",
      "/images/products/p8_10.jpg"
    ],
    sizes: ["4\" (10cm)", "6\" (16cm)", "8\" (20cm)", "10\" (25cm)", "12\" (30cm)", "14\" (35cm)", "16\" (40cm)"],
    colors: ["White", "Silver Gray", "Apricot", "Brown", "Black", "Others"],
    colorImages: {
      "White": ["/images/products/p8_1.jpg", "/images/products/p8_2.jpg"],
      "Silver Gray": ["/images/products/p8_3.jpg", "/images/products/p8_4.jpg"],
      "Apricot": ["/images/products/p8_5.jpg", "/images/products/p8_6.jpg"],
      "Brown": ["/images/products/p8_7.jpg", "/images/products/p8_8.jpg"],
      "Black": ["/images/products/p8_9.jpg"],
      "Others": ["/images/products/p8_10.jpg"]
    },
    features: {
      en: [
        "Texture & Detail: Special crochet stitches for iconic curls",
        "100% Personalized from your pet photos",
        "Meaningful Gift: Perfect for Poodle Moms or pet memorial",
        "Forever Keepsake: Sweet, durable tribute"
      ],
      zh: [
        "纹理与细节：使用特殊钩针针法编织标志性的卷曲",
        "100% 根据您的宠物照片个性化定制",
        "有意义的礼物：非常适合贵宾犬妈妈或宠物纪念",
        "永恒纪念品：甜蜜而持久的致敬"
      ]
    },
    howToOrder: {
      en: [
        "Purchase this listing",
        "Send me clear photos of your Poodle (include tail and back to see haircut!)",
        "I'll craft your personalized Poodle portrait"
      ],
      zh: [
        "购买此商品",
        "发送您贵宾犬的清晰照片（请包含尾巴和背部以便看到发型！）",
        "我将为您制作个性化的贵宾犬纪念玩偶"
      ]
    }
  },
  {
    id: 9,
    name: "Custom Crochet German Shepherd Plush, Personalized Pet Memorial Gift",
    nameZh: "定制德国牧羊犬玩偶, 宠物纪念礼物",
    nameJa: "ジャーマンシェパードぬいぐるみ, ペットメモリアルギフト",
    nameKo: "저먼 셰퍼드 아미구루미 인형, 반려동물 기념 선물",
    description: "Honor the loyalty and bravery of your best friend with a Custom Crochet German Shepherd made just for you. Whether you are celebrating a beloved family guardian, a retired Police K9, or looking for a meaningful GSD memorial gift, this handmade Amigurumi replica is the perfect tribute.\n\nI specialize in turning your photos into a huggable German Shepherd stuffed animal. I pay close attention to their alert ears, intelligent eyes, and specific coat markings (Black & Tan, Sable, or All Black) to create a true \"Mini Me\" of your dog.",
    descriptionZh: "为您专属定制的德国牧羊犬玩偶，致敬您最好朋友的忠诚和勇敢。无论您是在庆祝亲爱的家庭护卫犬、退休警犬，还是在寻找有意义的德国牧羊犬纪念礼物，这款手工编织的玩偶都是完美的致敬。",
    descriptionJa: "最良の友人の忠誠と勇気を、オーダーメードのジャーマンシェパードぬいぐるみで敬意を表しましょう。心爱的家族の番犬、退職した警察犬を祝う方に、または意味のある GSD メモリアルギフトを探している方に、この手作りのアミグリュミ レプリカは完璧なトリビュートです。",
    price: 160,
    currency: "USD",
    category: "Dogs",
    image: "/images/products/p9_1.jpg",
    images: [
      "/images/products/p9_1.jpg", "/images/products/p9_2.jpg", "/images/products/p9_3.jpg",
      "/images/products/p9_4.jpg", "/images/products/p9_5.jpg", "/images/products/p9_6.jpg",
      "/images/products/p9_7.jpg", "/images/products/p9_8.jpg", "/images/products/p9_9.jpg",
      "/images/products/p9_10.jpg"
    ],
    sizes: ["4\" (10cm)", "6\" (16cm)", "8\" (20cm)", "10\" (25cm)", "12\" (30cm)", "14\" (35cm)", "16\" (40cm)"],
    colors: ["Silver", "Black and Tan", "Solid Black", "Gray", "Others"],
    colorImages: {
      "Silver": ["/images/products/p9_1.jpg", "/images/products/p9_2.jpg"],
      "Black and Tan": ["/images/products/p9_3.jpg", "/images/products/p9_4.jpg", "/images/products/p9_5.jpg"],
      "Solid Black": ["/images/products/p9_6.jpg", "/images/products/p9_7.jpg"],
      "Gray": ["/images/products/p9_8.jpg", "/images/products/p9_9.jpg"],
      "Others": ["/images/products/p9_10.jpg"]
    },
    features: {
      en: [
        "Capturing the Spirit: Distinct silhouette and noble expression",
        "100% Personalized from your pet photos",
        "Hero's Tribute: Ideal for GSD Moms, police officers, or memorial",
        "Handmade Quality: Durable and soft"
      ],
      zh: [
        "捕捉精神：独特的轮廓和高贵的气质",
        "100% 根据您的宠物照片个性化定制",
        "英雄致敬：非常适合德国牧羊犬妈妈、警察或纪念",
        "手工品质：耐用且柔软"
      ]
    },
    howToOrder: {
      en: [
        "Purchase this listing",
        "Send me clear photos of your Shepherd (front, side, and back views helpful!)",
        "I'll craft your personalized Shepherd portrait"
      ],
      zh: [
        "购买此商品",
        "发送您德国牧羊犬的清晰照片（正面、侧面、背面会有帮助！）",
        "我将为您制作个性化的德国牧羊犬纪念玩偶"
      ]
    }
  },
  {
    id: 10,
    name: "Custom Crochet Labrador Retriever Plush, Personalized Pet Memorial Gift",
    nameZh: "定制拉布拉多寻回犬玩偶, 宠物纪念礼物",
    nameJa: "ラブラドールレトリーバーぬいぐるみ, ペットメモリアルギフト",
    nameKo: "라브라도 리트리버 아미구루미 인형, 반려동물 기념 선물",
    description: "Celebrate the unconditional love of your best friend with a Custom Crochet Labrador or Golden Retriever! Whether you have a goofy Black Lab, a loyal Chocolate Lab, or a fluffy Golden Retriever, this handmade Amigurumi replica is crafted to match them perfectly.\n\nI specialize in turning your pet photos into a huggable stuffed animal. I pay close attention to the specific details—from the Golden's feathery tail to the Labrador's smooth coat and otter tail—to create a true \"Mini Me\" version of your dog.",
    descriptionZh: "庆祝您最好朋友无条件的爱，定制的拉布拉多或金毛寻回犬玩偶。无论您有傻乎乎的黑色拉布拉多、忠诚的巧克力色拉布拉多，还是毛茸茸的金毛寻回犬，这款手工编织的玩偶都精心制作，力求完美匹配。",
    descriptionJa: "最良の友人の無条件の愛を祝う、オーダーメードのラブラドールまたはゴールデンレトリーバーぬいぐるみ。面白い Black Lab、忠実な Chocolate Lab、またはふわふわのゴールデンレトリーバーに関わらず、この手作りのアミグリュミ レプリカは完璧にマッチします。",
    price: 160,
    currency: "USD",
    category: "Dogs",
    image: "/images/products/p10_1.jpg",
    images: ["/images/products/p10_1.jpg", "/images/products/p10_2.jpg", "/images/products/p10_3.jpg", "/images/products/p10_4.jpg", "/images/products/p10_5.jpg"],
    sizes: ["4\" (10cm)", "6\" (16cm)", "8\" (20cm)", "10\" (25cm)", "12\" (30cm)", "14\" (35cm)", "16\" (40cm)"],
    colors: ["Light Gold", "Dark Gold", "Others"],
    colorImages: {
      "Light Gold": ["/images/products/p10_1.jpg", "/images/products/p10_2.jpg"],
      "Dark Gold": ["/images/products/p10_3.jpg", "/images/products/p10_4.jpg"],
      "Others": ["/images/products/p10_5.jpg"]
    },
    features: {
      en: [
        "All Colors Available: Can match any coat shade",
        "Breed Specific Details: Adjusted fur texture for each breed",
        "Meaningful Tribute: Perfect gift for Lab/Golden Moms or memorial",
        "Handmade Quality: Durable, soft, full of personality"
      ],
      zh: [
        "所有颜色可选：可以匹配任何毛发颜色",
        "品种特定细节：为每个品种调整毛发质感",
        "有意义的致敬：非常适合拉布拉多/金毛妈妈或纪念",
        "手工品质：耐用、柔软、充满个性"
      ]
    },
    howToOrder: {
      en: [
        "Select your breed type (Lab or Golden) from dropdown if available",
        "Purchase this listing",
        "Send me clear photos of your dog (natural lighting best!)",
        "I'll craft your personalized retriever portrait"
      ],
      zh: [
        "如果可以，从下拉菜单中选择品种类型（拉布拉多或金毛）",
        "购买此商品",
        "发送您狗狗的清晰照片（自然光最好！）",
        "我将为您制作个性化的寻回犬纪念玩偶"
      ]
    }
  },
  {
    id: 11,
    name: "Handmade Magnemite Crochet Plush, Anime Pokemon Stuffed Animal Gift",
    nameZh: "手工小磁怪钩针玩偶, 宝可梦动漫周边礼物",
    nameJa: "手作り магнemite  crochet ぬいぐるみ, アニメポケモンギフト",
    nameKo: "수제 마그emite 아미구루미 인형, 포켓몬 애니메이션 선물",
    description: "Attract some good vibes with this adorable Magnemite Crochet Plush! Whether you are a classic Gen 1 trainer or looking for the perfect geeky gift for a gamer, this handmade Amigurumi Magnemite is ready to join your team. With its iconic magnets and big singular eye, it makes for a unique desk companion or a standout piece in any anime collection.\n\nHandmade Quality: Tightly crocheted with soft, durable yarn to hold its shape perfectly.\nTrue to Character: I pay close attention to the details—from the gray metallic body to the red and blue tips of its magnets.",
    descriptionZh: "用这只可爱的磁怪钩针玩偶吸引一些好运气！无论您是经典的第一代训练家，还是在为游戏玩家寻找完美的极客礼物，这款手工编织的磁怪玩偶都已准备好加入您的队伍。",
    descriptionJa: "この可愛らしい Magnemite  crochet ぬいぐるみで良い雰囲気を呼び込みましょう！クラシックな第1世代トレーナーでも、ゲーマーに最適なchnikyギフトを探している方に、この手作りのアミグリュミ Magnemite はチームに加わる準備ができています。",
    price: 149,
    currency: "USD",
    category: "Anime",
    image: "/images/products/p11_1.jpg",
    images: ["/images/products/p11_1.jpg", "/images/products/p11_2.jpg", "/images/products/p11_3.jpg", "/images/products/p11_4.jpg", "/images/products/p11_5.jpg", "/images/products/p11_6.jpg"],
    features: {
      en: [
        "Handmade Quality: Tightly crocheted with soft, durable yarn",
        "True to Character: Gray metallic body, red and blue magnet tips",
        "Perfect Size: Small enough for desk, shelf, or PC tower",
        "Unique Gift: Perfect for Pokemon lovers or gamers"
      ],
      zh: [
        "手工品质：用柔软耐用的毛线紧密编织",
        "忠于角色：灰色金属机身，红色和蓝色磁铁尖端",
        "完美尺寸：足够小，可放在桌面、书架或PC机箱上",
        "独特礼物：非常适合宝可梦爱好者或游戏玩家"
      ]
    },
    howToOrder: {
      en: [
        "Add to cart and purchase",
        "Message me with any customization requests",
        "I'll craft your Magnemite with care"
      ],
      zh: [
        "加入购物车并购买",
        "如有定制需求，请给我留言",
        "我会用心为您制作磁怪"
      ]
    }
  }
];
