export interface Product {
  id: number;
  name: string;
  nameZh: string;
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
  features?: string[];  // Why choose this product
  howToOrder?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Custom Crochet Australian Shepherd Plush",
    nameZh: "定制澳洲牧羊犬玩偶",
    description: "Bring your favorite pet to life with our custom crochet pets, handmade and personalized from your pet's photo. Each amigurumi plush is carefully crafted to capture your pet's unique colors and details, creating a meaningful keepsake and a thoughtful gift for pet lovers of all ages.",
    descriptionZh: "根据您宠物的照片定制手工编织玩偶，精心捕捉您宠物独特的颜色和细节，打造有意义的纪念品和贴心的礼物。",
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
    sizes: ["10cm", "16cm", "20cm", "25cm", "30cm", "35cm", "40cm"],
    colors: ["Blue Merle", "Red Merle", "Black", "Red with White/Tan", "Others"],
    colorImages: {
      "Blue Merle": ["/images/products/p1_1.jpg", "/images/products/p1_2.jpg", "/images/products/p1_3.jpg", "/images/products/p1_4.jpg"],
      "Red Merle": ["/images/products/p1_5.jpg", "/images/products/p1_6.jpg", "/images/products/p1_7.jpg"],
      "Black": ["/images/products/p1_1.jpg", "/images/products/p1_2.jpg"],
      "Red with White/Tan": ["/images/products/p1_3.jpg", "/images/products/p1_4.jpg"],
      "Others": ["/images/products/p1_8.jpg", "/images/products/p1_9.jpg", "/images/products/p1_10.jpg"]
    },
    features: [
      "100% Handmade with love and high-quality yarn",
      "Fully personalized from your pet photos",
      "Captures unique colors and markings",
      "Perfect as pet memorial or gift for dog lovers"
    ],
    howToOrder: [
      "Purchase this listing",
      "Send me clear photos of your dog (front, side, and back views)",
      "I'll start crafting your personalized Aussie keepsake"
    ]
  },
  {
    id: 2,
    name: "Custom Crochet French Bulldog Amigurumi",
    nameZh: "定制法国斗牛犬玩偶",
    description: "Capture the iconic bat ears and squishy face of your best friend with a Custom Crochet French Bulldog! Whether you are a proud Frenchie Mom or looking for a meaningful pet memorial keepsake, this handmade Amigurumi replica is the perfect tribute.\n\nI specialize in turning your pet photos into a huggable Frenchie stuffed animal. I pay special attention to their unique markings—whether it's a complex Brindle, a spotted Pied, a classic Fawn, or a rare Blue/Merle coat—to create a true \"Mini Me\" version of your dog.",
    descriptionZh: "捕捉您最好朋友的标志性蝙蝠耳朵和柔软脸庞，定制的法国斗牛犬玩偶。无论您是骄傲的法国斗牛犬妈妈，还是在为失去爱宠寻找有意义的纪念品，这款手工编织的玩偶都是完美的致敬。",
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
    sizes: ["10cm", "16cm", "20cm", "25cm", "30cm", "35cm", "40cm"],
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
    features: [
      "Signature Details: Bat-like ears, flat muzzle, and little rolls",
      "Color Matching Expert: Can replicate unique patterns and coat shades",
      "Meaningful Gift: Perfect for French Bulldog lovers or pet memorial",
      "Handmade Quality: Sturdy, soft, and full of personality"
    ],
    howToOrder: [
      "Purchase this listing",
      "Send me clear photos of your Frenchie (front, side, and back views are crucial for markings!)",
      "I'll start crafting your personalized Frenchie portrait"
    ]
  },
  {
    id: 4,
    name: "Custom Crochet Dachshund Plush",
    nameZh: "定制腊肠犬玩偶",
    description: "Capture the unique personality of your beloved Doxie with a Custom Crochet Dachshund made just for you! Whether you are celebrating a new puppy or honoring a furry friend who has crossed the rainbow bridge, this handmade Amigurumi replica is the perfect keepsake.\n\nTurn your favorite photos into a huggable Sausage Dog stuffed animal. I pay close attention to every detail—from their specific markings to their floppy ears—to create a true \"Mini Me\" version of your pet.",
    descriptionZh: "捕捉您心爱腊肠犬的独特个性，专为您定制的腊肠犬玩偶。无论是庆祝新小狗的到来，还是纪念已过彩虹桥的毛孩子，这款手工编织的玩偶都是完美的纪念品。",
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
    sizes: ["10cm", "16cm", "20cm", "25cm", "30cm", "35cm", "40cm"],
    colors: ["Chocolate", "Red", "Black and Tan", "Dapple", "Others"],
    colorImages: {
      "Chocolate": ["/images/products/p4_1.jpg", "/images/products/p4_2.jpg"],
      "Red": ["/images/products/p4_3.jpg", "/images/products/p4_4.jpg"],
      "Black and Tan": ["/images/products/p4_5.jpg", "/images/products/p4_6.jpg"],
      "Dapple": ["/images/products/p4_7.jpg", "/images/products/p4_8.jpg"],
      "Others": ["/images/products/p4_9.jpg", "/images/products/p4_10.jpg"]
    },
    features: [
      "100% Handmade with love and high-quality yarn",
      "Fully personalized from your pet photos",
      "Perfect gift for dog moms or pet memorial",
      "Versatile: Decor, desk companion, or comforting plush"
    ],
    howToOrder: [
      "Purchase this listing",
      "Send me clear photos of your Dachshund (front, side, and back views helpful!)",
      "I'll start crafting your personalized Doxie keepsake"
    ]
  },
  {
    id: 5,
    name: "Custom Crochet Rottweiler Plush",
    nameZh: "定制罗威纳犬玩偶",
    description: "Celebrate the loyalty and love of your \"gentle giant\" with a Custom Crochet Rottweiler made exclusively for you! Whether you are looking for a unique a dog dad, or a comforting pet memorial keepsake to honor a best friend Rottie gift for, this handmade Amigurumi replica is designed to warm your heart.\n\nI specialize in turning your favorite pictures into a huggable Rottweiler stuffed animal. From their signature black and tan markings to their expressive eyebrows, I carefully crochet every detail to create a true \"Mini Me\" of your dog.",
    descriptionZh: "为您专属定制的罗威纳犬玩偶，庆祝您温柔巨人的忠诚和爱。无论您是为狗爸爸寻找独特的礼物，还是想用贴心的宠物纪念品来纪念最好的朋友，这款手工编织的玩偶都能温暖您的心。",
    price: 160,
    currency: "USD",
    category: "Dogs",
    image: "/images/products/p5_1.jpg",
    images: ["/images/products/p5_1.jpg", "/images/products/p5_2.jpg", "/images/products/p5_3.jpg"],
    sizes: ["10cm", "16cm", "20cm", "25cm", "30cm", "35cm", "40cm"],
    colors: ["Standard Black & Tan"],
    colorImages: {
      "Standard Black & Tan": ["/images/products/p5_1.jpg", "/images/products/p5_2.jpg", "/images/products/p5_3.jpg"]
    },
    features: [
      "Handmade with Love: Each plush crocheted with soft, high-quality yarn",
      "100% Personalized from your pet photos",
      "Meaningful Gift: Perfect for Rottweiler lovers or sympathy gift",
      "Durable & Cute: Lasting keepsake as decor or comforting companion"
    ],
    howToOrder: [
      "Add this listing to your cart",
      "Send me clear photos of your Rottweiler (face, chest markings, and full body)",
      "I'll create your one-of-a-kind crochet dog portrait"
    ]
  },
  {
    id: 6,
    name: "Custom Crochet Beagle Plush",
    nameZh: "定制比格犬玩偶",
    description: "Capture the floppy ears and soulful eyes of your favorite hound with a Custom Crochet Beagle! Whether you are looking for a unique Beagle Mom gift or a touching pet memorial keepsake to honor a furry friend, this handmade Amigurumi replica is crafted with love.\n\nI specialize in turning your cherished photos into a huggable Beagle stuffed animal. I pay special attention to their distinct tri-color markings (or lemon/bi-color patterns) and adorable expressions to create a true \"Mini Me\" version of your dog.",
    descriptionZh: "捕捉您心爱猎犬的垂耳和深情眼睛，定制的比。无论您是想为比格犬妈妈格犬玩偶寻找独特的礼物，还是想用贴心的宠物纪念品来纪念毛孩子，这款手工编织的玩偶都是用爱精心制作的。",
    price: 160,
    currency: "USD",
    category: "Dogs",
    image: "/images/products/p6_1.jpg",
    images: [
      "/images/products/p6_1.jpg", "/images/products/p6_2.jpg", "/images/products/p6_3.jpg",
      "/images/products/p6_4.jpg", "/images/products/p6_5.jpg", "/images/products/p6_6.jpg",
      "/images/products/p6_7.jpg", "/images/products/p6_8.jpg", "/images/products/p6_9.jpg"
    ],
    sizes: ["10cm", "16cm", "20cm", "25cm", "30cm", "35cm", "40cm"],
    colors: ["Bicolor Brown/White", "Bicolor Black/White", "Black/Brown/White", "Others"],
    colorImages: {
      "Bicolor Brown/White": ["/images/products/p6_1.jpg", "/images/products/p6_2.jpg", "/images/products/p6_3.jpg"],
      "Bicolor Black/White": ["/images/products/p6_4.jpg", "/images/products/p6_5.jpg"],
      "Black/Brown/White": ["/images/products/p6_6.jpg", "/images/products/p6_7.jpg", "/images/products/p6_8.jpg"],
      "Others": ["/images/products/p6_9.jpg"]
    },
    features: [
      "Handmade Art: Each stitch carefully crocheted for durable, soft plush",
      "Truly Personalized from your pet photos",
      "Meaningful Gift: Perfect for Beagle lovers or sympathy gift",
      "Forever Keepsake: Sweet way to keep your pup's memory close"
    ],
    howToOrder: [
      "Purchase this listing",
      "Send me clear photos of your Beagle (front, side, and back views best for markings!)",
      "I'll craft your personalized crochet dog portrait"
    ]
  },
  {
    id: 7,
    name: "Custom Crochet English Bulldog Plush",
    nameZh: "定制英国斗牛犬玩偶",
    description: "Capture the irresistible wrinkles and grumpy-cute expression of your beloved \"Bully\" with a Custom Crochet English Bulldog! Whether you are looking for a unique gift for a Bulldog Mom or a touching pet memorial keepsake, this handmade Amigurumi replica is the perfect tribute.\n\nI specialize in turning your favorite photos into a huggable English Bulldog stuffed animal. I pay special attention to their iconic rolls, underbite, and stocky build to create a true \"Mini Me\" version of your dog.",
    descriptionZh: "捕捉您心爱斗牛犬无法抗拒的皱纹和可爱的表情，定制的英国斗牛犬玩偶。无论您是想为斗牛犬妈妈寻找独特的礼物，还是想用贴心的宠物纪念品来纪念忠诚的伙伴，这款手工编织的玩偶都是完美的致敬。",
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
    sizes: ["10cm", "16cm", "20cm", "25cm", "30cm", "35cm", "40cm"],
    colors: ["Brindle", "White", "Red", "Fawn", "Others"],
    colorImages: {
      "Brindle": ["/images/products/p7_1.jpg", "/images/products/p7_2.jpg", "/images/products/p7_3.jpg"],
      "White": ["/images/products/p7_4.jpg", "/images/products/p7_5.jpg"],
      "Red": ["/images/products/p7_6.jpg", "/images/products/p7_7.jpg"],
      "Fawn": ["/images/products/p7_8.jpg", "/images/products/p7_9.jpg"],
      "Others": ["/images/products/p7_10.jpg"]
    },
    features: [
      "Detail-Oriented: Signature wrinkles and markings carefully crocheted",
      "100% Personalized from your pet photos",
      "Meaningful Gift: Perfect for Bulldog lovers or sympathy gift",
      "Soft & Durable: Made with high-quality yarn"
    ],
    howToOrder: [
      "Purchase this listing",
      "Send me clear photos of your Bulldog (front, side, and back views showing markings!)",
      "I'll start crafting your personalized Bulldog portrait"
    ]
  },
  {
    id: 8,
    name: "Custom Crochet Poodle Plush",
    nameZh: "定制贵宾犬玩偶",
    description: "Capture the elegance and curly cuteness of your furry friend with a Custom Crochet Poodle! Whether you have a tiny Toy Poodle or a majestic Standard Poodle, this handmade Amigurumi replica is crafted to look just like them.\n\nI specialize in turning your pet photos into a huggable Poodle stuffed animal. I pay special attention to reproducing their signature curly fur texture and specific haircut (from \"Teddy Bear\" cuts to show clips) to create a true \"Mini Me\" of your dog.",
    descriptionZh: "捕捉您毛茸茸朋友的优雅和卷曲可爱，定制的贵宾犬玩偶。无论您有 tiny 的玩具贵宾犬还是威严的标准贵宾犬，这款手工编织的玩偶都精心制作，力求惟妙惟肖。",
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
    sizes: ["10cm", "16cm", "20cm", "25cm", "30cm", "35cm", "40cm"],
    colors: ["White", "Silver Gray", "Apricot", "Brown", "Black", "Others"],
    colorImages: {
      "White": ["/images/products/p8_1.jpg", "/images/products/p8_2.jpg"],
      "Silver Gray": ["/images/products/p8_3.jpg", "/images/products/p8_4.jpg"],
      "Apricot": ["/images/products/p8_5.jpg", "/images/products/p8_6.jpg"],
      "Brown": ["/images/products/p8_7.jpg", "/images/products/p8_8.jpg"],
      "Black": ["/images/products/p8_9.jpg"],
      "Others": ["/images/products/p8_10.jpg"]
    },
    features: [
      "Texture & Detail: Special crochet stitches for iconic curls",
      "100% Personalized from your pet photos",
      "Meaningful Gift: Perfect for Poodle Moms or pet memorial",
      "Forever Keepsake: Sweet, durable tribute"
    ],
    howToOrder: [
      "Purchase this listing",
      "Send me clear photos of your Poodle (include tail and back to see haircut!)",
      "I'll craft your personalized Poodle portrait"
    ]
  },
  {
    id: 9,
    name: "Custom Crochet German Shepherd Amigurumi",
    nameZh: "定制德国牧羊犬玩偶",
    description: "Honor the loyalty and bravery of your best friend with a Custom Crochet German Shepherd made just for you. Whether you are celebrating a beloved family guardian, a retired Police K9, or looking for a meaningful GSD memorial gift, this handmade Amigurumi replica is the perfect tribute.\n\nI specialize in turning your photos into a huggable German Shepherd stuffed animal. I pay close attention to their alert ears, intelligent eyes, and specific coat markings (Black & Tan, Sable, or All Black) to create a true \"Mini Me\" of your dog.",
    descriptionZh: "为您专属定制的德国牧羊犬玩偶，致敬您最好朋友的忠诚和勇敢。无论您是在庆祝亲爱的家庭护卫犬、退休警犬，还是在寻找有意义的德国牧羊犬纪念礼物，这款手工编织的玩偶都是完美的致敬。",
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
    sizes: ["10cm", "16cm", "20cm", "25cm", "30cm", "35cm", "40cm"],
    colors: ["Silver", "Black and Tan", "Solid Black", "Gray", "Others"],
    colorImages: {
      "Silver": ["/images/products/p9_1.jpg", "/images/products/p9_2.jpg"],
      "Black and Tan": ["/images/products/p9_3.jpg", "/images/products/p9_4.jpg", "/images/products/p9_5.jpg"],
      "Solid Black": ["/images/products/p9_6.jpg", "/images/products/p9_7.jpg"],
      "Gray": ["/images/products/p9_8.jpg", "/images/products/p9_9.jpg"],
      "Others": ["/images/products/p9_10.jpg"]
    },
    features: [
      "Capturing the Spirit: Distinct silhouette and noble expression",
      "100% Personalized from your pet photos",
      "Hero's Tribute: Ideal for GSD Moms, police officers, or memorial",
      "Handmade Quality: Durable and soft"
    ],
    howToOrder: [
      "Purchase this listing",
      "Send me clear photos of your Shepherd (front, side, and back views helpful!)",
      "I'll craft your personalized Shepherd portrait"
    ]
  },
  {
    id: 10,
    name: "Custom Crochet Labrador/Golden Retriever",
    nameZh: "定制拉布拉多/金毛寻回犬",
    description: "Celebrate the unconditional love of your best friend with a Custom Crochet Labrador or Golden Retriever! Whether you have a goofy Black Lab, a loyal Chocolate Lab, or a fluffy Golden Retriever, this handmade Amigurumi replica is crafted to match them perfectly.\n\nI specialize in turning your pet photos into a huggable stuffed animal. I pay close attention to the specific details—from the Golden's feathery tail to the Labrador's smooth coat and otter tail—to create a true \"Mini Me\" version of your dog.",
    descriptionZh: "庆祝您最好朋友无条件的爱，定制的拉布拉多或金毛寻回犬玩偶。无论您有傻乎乎的黑色拉布拉多、忠诚的巧克力色拉布拉多，还是毛茸茸的金毛寻回犬，这款手工编织的玩偶都精心制作，力求完美匹配。",
    price: 160,
    currency: "USD",
    category: "Dogs",
    image: "/images/products/p10_1.jpg",
    images: ["/images/products/p10_1.jpg", "/images/products/p10_2.jpg", "/images/products/p10_3.jpg", "/images/products/p10_4.jpg", "/images/products/p10_5.jpg"],
    sizes: ["10cm", "16cm", "20cm", "25cm", "30cm", "35cm", "40cm"],
    colors: ["Light Gold", "Dark Gold", "Others"],
    colorImages: {
      "Light Gold": ["/images/products/p10_1.jpg", "/images/products/p10_2.jpg"],
      "Dark Gold": ["/images/products/p10_3.jpg", "/images/products/p10_4.jpg"],
      "Others": ["/images/products/p10_5.jpg"]
    },
    features: [
      "All Colors Available: Can match any coat shade",
      "Breed Specific Details: Adjusted fur texture for each breed",
      "Meaningful Tribute: Perfect gift for Lab/Golden Moms or memorial",
      "Handmade Quality: Durable, soft, full of personality"
    ],
    howToOrder: [
      "Select your breed type (Lab or Golden) from dropdown if available",
      "Purchase this listing",
      "Send me clear photos of your dog (natural lighting best!)",
      "I'll craft your personalized retriever portrait"
    ]
  },
  {
    id: 11,
    name: "Magnemite Crochet Plush",
    nameZh: "小磁怪钩针玩偶",
    description: "Attract some good vibes with this adorable Magnemite Crochet Plush! Whether you are a classic Gen 1 trainer or looking for the perfect geeky gift for a gamer, this handmade Amigurumi Magnemite is ready to join your team. With its iconic magnets and big singular eye, it makes for a unique desk companion or a standout piece in any anime collection.\n\nHandmade Quality: Tightly crocheted with soft, durable yarn to hold its shape perfectly.\nTrue to Character: I pay close attention to the details—from the gray metallic body to the red and blue tips of its magnets.",
    descriptionZh: "用这只可爱的磁怪钩针玩偶吸引一些好运气！无论您是经典的第一代训练家，还是在为游戏玩家寻找完美的极客礼物，这款手工编织的磁怪玩偶都已准备好加入您的队伍。",
    price: 149,
    currency: "USD",
    category: "Anime",
    image: "/images/products/p11_1.jpg",
    images: ["/images/products/p11_1.jpg", "/images/products/p11_2.jpg", "/images/products/p11_3.jpg", "/images/products/p11_4.jpg", "/images/products/p11_5.jpg", "/images/products/p11_6.jpg"],
    features: [
      "Handmade Quality: Tightly crocheted with soft, durable yarn",
      "True to Character: Gray metallic body, red and blue magnet tips",
      "Perfect Size: Small enough for desk, shelf, or PC tower",
      "Unique Gift: Perfect for Pokemon lovers or gamers"
    ],
    howToOrder: [
      "Add to cart and purchase",
      "Message me with any customization requests",
      "I'll craft your Magnemite with care"
    ]
  }
];
