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
    namePt: "Pelúcia de Border Collie Crochê Personalizada, Presente Memorial de Animal de Estimação",
    namePtBR: "Pelúcia de Border Collie Crochê Personalizada, Presente Memorial de Animal de Estimação",
    nameEs: "Peluche de Border Collie Crochet Personalizado, Regalo Conmemorativo de Mascota",
    nameFr: "Peluche Border Collie Crochet Personnalisé, Cadeau Commémoratif pour Animaux",
    nameDe: "Handgehäkeltes Border Collie Stofftier, Persönliches Haustier-Gedenkgeschenk",
    nameIt: "Peluche Border Collie All'uncinetto Personalizzato, Regalo Commemorativo per Animali",
    nameRu: "Вязаная крючком игрушка Бордер-колли, Персонализированный памятный подарок для питомца",
    nameAr: "دمية صوفية من خيوط الكروشيه لكلب الراعي الأسترالي، هدية تذكارية للحيوانات الأليفة",
    nameHi: "कस्टम क्रोकेट ऑस्ट्रेलियन शेफर्ड प्लश, पर्सनलाइज्ड पेट मेमोरियल गिफ्ट",
    nameTh: "ตุ๊กตาขนสังกัด ชูว่าชู ภูเขาออसเตรเลียน เชछเพิร์ด ตามสั่ง ของที่ระลึกสัตว์เลี้ยง",
    nameVi: "Thú bông Australian Shepherd Crochet Tùy Chỉnh, Quà Tưởng Nhớ Thú Cưng",
    nameId: "Boneka Australian Shepherd Rajutan Kustom, Hadiah Kenangan Hewan Peliharaan",
    nameMs: "Boneka Australian Shepherd Crochet Tersuai, Hadiah Kenangan Haiwan",
    nameTr: "Özel Yapım Tığ İşi Border Collie Oyuncak, Kişiselleştirilmiş Evcil Hayvan Anma Hediyesi",
    namePl: "Pluszowy Border Collie Na Szydełku, Spersonalizowany Prezent Pamiątkowy Dla Zwierzaka",
    nameNl: "Handgemaakte Border Collie Knuffel, Gepersonaliseerd Huisdier Herdenkingsgeschenk",
    description: "Bring your favorite pet to life with our custom crochet pets, handmade and personalized from your pet's photo. Each amigurumi plush is carefully crafted to capture your pet's unique colors and details, creating a meaningful keepsake and a thoughtful gift for pet lovers of all ages.",
    descriptionZh: "根据您宠物的照片定制手工编织玩偶，精心捕捉您宠物独特的颜色和细节，打造有意义的纪念品和贴心的礼物。",
    descriptionJa: "大切なペットの写真から、オーダーメードの編み物ペットが生まれます。各アミグリュミぬいぐるみは、ペットの独自の色と細部を丁寧にキャプチャし、あらゆる年齢のペット愛好家にとって意味のある記念品と心に残るギフトを作成します。",
    descriptionKo: "소중한 반려동물의 사진으로 맞춤 제작된 손뜨개질 인형이 탄생합니다. 각 아미구루미 인형은 반려동물의 독특한 색상과 디테일을 세심하게 포착하여, 모든 연령대의 반려동물 애호가에게 의미 있는 기념품과 마음을 움직이는 선물이 됩니다。",
    descriptionPt: "Dê vida ao seu animal de estimação favorito com nossos animais de estimação crochê personalizados, feitos à mão e personalizados a partir da foto do seu pet. Cada pelúcia amigurumi é cuidadosamente elaborada para capturar as cores e detalhes únicos do seu pet, criando uma lembrança significativa e um presente atencioso para amantes de animais de todas as idades。",
    descriptionPtBR: "Dê vida ao seu animal de estimação favorito com nossos animais de estimação crochê personalizados, feitos à mão e personalizados a partir da foto do seu pet. Cada pelúcia amigurumi é cuidadosamente elaborada para capturar as cores e detalhes únicos do seu pet, criando uma lembrança significativa e um presente atencioso para amantes de animais de todas as idades。",
    descriptionEs: "Dale vida a tu mascota favorita con nuestras mascotas de estimación crocheteras personalizadas, hechas a mano y personalizadas a partir de la foto de tu mascota. Cada peluche amigurumi está cuidadosamente elaborado para capturar los colores y detalles únicos de tu mascota, creando un recuerdo significativo y un regalo reflexivo para los amantes de mascotas de todas las edades。",
    descriptionFr: "Donnez vie à votre animal de compagnie préféré avec nos animaux de compagnie au crochet personnalisés, fabriqués à la main et personnalisés à partir de la photo de votre animal. Chaque peluche amigurumi est soigneusement fabriqué pour capturer les couleurs et détails uniques de votre animal, créant un souvenir significatif et un cadeau attentionné pour les amoureux des animaux de tous âges。",
    descriptionDe: "Bringen Sie Ihr Lieblingshaustier zum Leben mit unseren maßgeschneiderten gehäkelten Haustieren, die von Hand und personalisiert nach dem Foto Ihres Haustiers gefertigt werden. Jedes Amigurumi-Plüschtier wird sorgfältig gefertigt, um die einzigartigen Farben und Details Ihres Haustiers einzufangen, und schafft ein bedeutungsvolles Andenken und ein durchdachtes Geschenk für Tierliebhaber jeden Alters。",
    descriptionIt: "Dai vita al tuo animale domestico preferito con i nostri animali all'uncinetto personalizzati, fatti a mano e personalizzati dalla foto del tuo animale. Ogni peluche amigurumi è realizzato con cura per catturare i colori e i dettagli unici del tuo animale, creando un ricordo significativo e un regalo premuroso per gli amanti degli animali di tutte le età。",
    descriptionRu: "Воплотите вашего любимого питомца в жизнь с нашими связанными крючком питомцами, сделанными вручную и персонализированными по фотографии вашего питомца. Каждая плюшевая игрушка амигуруми тщательно создана, чтобы запечатлеть уникальные цвета и детали вашего питомца, создавая значимый памятный подарок и продуманный подарок для любителей животных всех возрастов。",
    descriptionAr: "أحيِ حيوانك الأليف المفضل مع حيواناتنا الأليفة المُحزَزة المُخصَّصة، المُصنَعة يدويًا والمُخصَّصة من صورة حيوانك الأليف. كل دمية أميجورومي مُصنَعة بعناية لالتقاط الألوان والتفاصيل الفريدة لحيوانك الأليف، مما يخلق ذكرى ذات معنى وهدية مدروسة لمحبي الحيوانات من جميع الأعمار。",
    descriptionHi: "अपने पालतू जानवर की तस्वीर से बनाए गए और हाथ से बने हमारे कस्टम क्रोकेट पालतू जानवरों के साथ अपने पसंदीदा पालतू जानवर को जीवंत करें। हर अमिगुरुमी प्लश को आपके पालतू जानवर के अद्वितीय रंगों और विवरणों को पकड़ने के लिए सावधानी से बनाया जाता है, जो सभी उम्र के पालतू जानवर lovers के लिए एक सार्थक स्मृति और एक विचारशील उपहार बनाता है।",
    descriptionTh: "ทำให้สัตว์เลี้ยงที่คุณชอบมีชีวิตชีวากับสัตว์เลี้ยงถักไหมที่ทำตามสั่งของเรา ทำด้วยมือและปรับแต่งจากรูปถ่ายของสัตว์เลี้ยงของคุณ ตุ๊กตาอมิกุรุมิแต่ละตัวถูกประดิษฐ์อย่างพิถีพิถันเพื่อจับสีและรายละเอียดเฉพาะตัวของสัตว์เลี้ยงของคุณ สร้างของที่ระลึกที่มีความหมายและของขวัญที่คิดมากสำหรับคนรักสัตว์เลี้ยงทุกวัย।",
    descriptionVi: "Mang hơi thở cuộc sống cho thú cưng yêu quý của bạn với những thú cưng đan len theo yêu cầu của chúng tôi, được làm thủ công và cá nhân hóa từ ảnh thú cưng của bạn. Mỗi búp bê amigurumi được chế tác cẩn thận để nắm bắt màu sắc và chi tiết độc đáo của thú cưng bạn, tạo ra một kỷ niệm có ý nghĩa và một món quà chu đáo cho những người yêu thú cưng mọi lứa tuổi。",
    descriptionId: "Hidupkan hewan peliharaan favorit Anda dengan hewan peliharaan rajutan kustom kami, dibuat dengan tangan dan dipersonalisasi dari foto hewan peliharaan Anda. Setiap boneka amigurumi dibuat dengan cermat untuk menangkap warna dan detail unik hewan peliharaan Anda, menciptakan kenang-kenangan yang bermakna dan hadiah yang penuh pertimbangan untuk pecinta hewan peliharaan dari segala usia。",
    descriptionMs: "Berikan kehidupan kepada haiwan kesayangan anda dengan haiwan peliharaan rajutan tersuai kami, dibuat dengan tangan dan diperibadikan dari foto haiwan peliharaan anda. Setiap boneka amigurumi dikraf dengan teliti untuk menangkap warna dan detail unik haiwan peliharaan anda, mewujudkan kenang-kenangan yang bermakna dan hadiah yang berfikir untuk pecinta haiwan peliharaan dari semua usia。",
    descriptionTr: "Evcil hayvanınızın fotoğrafından el yapımı ve kişiselleştirilmiş özel örme evcil hayvanlarımızla en sevdiğiniz evcil hayvanınızı hayata geçirin. Her amigurumi oyuncak, evcil hayvanınızın benzersiz renklerini ve detaylarını yakalamak için özenle hazırlanmıştır, her yaştan evcil hayvan severler için anlamlı bir hatıra ve düşünceli bir hediye yaratır。",
    descriptionPl: "Ożyw swojego ukochanego pupila naszymi personalizowanymi maskotkami szydełkowymi, wykonanymi ręcznie i spersonalizowanymi na podstawie zdjęcia Twojego pupila. Każda pluszowa maskotka amigurumi jest starannie wykonana, aby uchwycić unikalne kolory i detale Twojego pupila, tworząc znaczącą pamiątkę i przemyślany prezent dla miłośników zwierząt w każdym wieku。",
    descriptionNl: "Geef uw favoriete huisdier new leven met onze op maat gemaakte gehaakte huisdieren, met de hand gemaakt en gepersonaliseerd op basis van de foto van uw huisdier. Elke amigurumi knuffel wordt zorgvuldig vervaardigd om de unieke kleuren en details van uw huisdier te vangen, en creëert een betekenisvol aandenken en een doordacht geschenk voor huisdierenliefhebbers van alle leeftijden。",
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
    namePt: "Pelúcia de Buldogue Francês Crochê Personalizada, Presente Memorial de Animal de Estimação",
    namePtBR: "Pelúcia de Buldogue Francês Crochê Personalizada, Presente Memorial de Animal de Estimação",
    nameEs: "Peluche de Buldogue Francés Crochet Personalizado, Regalo Conmemorativo de Mascota",
    nameFr: "Peluche Buldogue Français Crochet Personnalisé, Cadeau Commémoratif pour Animaux",
    nameDe: "Handgehäkeltes Buldogg Français Stofftier, Persönliches Haustier-Gedenkgeschenk",
    nameIt: "Peluche Buldog Francese All'uncinetto Personalizzato, Regalo Commemorativo per Animali",
    nameRu: "Вязаная крючком игрушка Французский бульдог, Персонализированный памятный подарок для питомца",
    nameAr: "دمية صوفية من خيوط الكروشيه لكلب البولدوج الفرنسي، هدية تذكارية للحيوانات الأليفة",
    nameHi: "कस्टम क्रोकेट फ्रेंच बुलडॉग प्लश, पर्सनलाइज्ड पेट मेमोरियल गिफ्ट",
    nameTh: "ตุ๊กตาขนสังกัด ชูว่าชู บูลด็อกฝรั่งเศส ตามสั่ง ของที่ระลึกสัตว์เลี้ยง",
    nameVi: "Thú bông Buldog Pháp Crochet Tùy Chỉnh, Quà Tưởng Nhớ Thú Cưng",
    nameId: "Boneka Buldog Prancis Rajutan Kustom, Hadiah Kenangan Hewan Peliharaan",
    nameMs: "Boneka Buldog Perancis Crochet Tersuai, Hadiah Kenangan Haiwan",
    nameTr: "Özel Yapım Tığ İşi Fransız Bulldog Oyuncak, Kişiselleştirilmiş Evcil Hayvan Anma Hediyesi",
    namePl: "Pluszowy Buldog Francuski Na Szydełku, Spersonalizowany Prezent Pamiątkowy Dla Zwierzaka",
    nameNl: "Handgemaakte Franse Bulldog Knuffel, Gepersonaliseerd Huisdier Herdenkingsgeschenk",
    description: "Capture the iconic bat ears and squishy face of your best friend with a Custom Crochet French Bulldog! Whether you are a proud Frenchie Mom or looking for a meaningful pet memorial keepsake, this handmade Amigurumi replica is the perfect tribute.\n\nI specialize in turning your pet photos into a huggable Frenchie stuffed animal. I pay special attention to their unique markings—whether it's a complex Brindle, a spotted Pied, a classic Fawn, or a rare Blue/Merle coat—to create a true \"Mini Me\" version of your dog.",
    descriptionZh: "捕捉您最好朋友的标志性蝙蝠耳朵和柔软脸庞，定制的法国斗牛犬玩偶。无论您是骄傲的法国斗牛犬妈妈，还是在为失去爱宠寻找有意义的纪念品，这款手工编织的玩偶都是完美的致敬。",
    descriptionJa: "大切な相棒の特徴的なコウモリのような耳と柔らかい顔を、オーダーメードのフレンチブルドッグぬいぐるみで実現しましょう。",
    descriptionKo: "소중한 친구의 상징적인 박쥐 같은 귀와 촉촉한 얼굴을 맞춤 제작된 프렌치 불독 인형으로 간직하세요. 자부심 있는 프렌치불독 맘이거나 의미 있는 반려동물 기념품을 찾고 계시다면, 이 수제 아미구루미 레플리카가 완벽한 헌정입니다。",
    descriptionPt: "Capture as orelhas icônicas de morcego e o rostinho adorável do seu melhor amigo com um Buldogue Francês Crochê Personalizado! Seja você uma orgulhosa Frenchie Mom ou procurando uma lembrança significativa de animal de estimação, esta réplica de Amigurumi feita à mão é a homenagem perfeita。",
    descriptionPtBR: "Capture as orelhas icônicas de morcego e o rostinho adorável do seu melhor amigo com um Buldogue Francês Crochê Personalizado! Seja você uma orgulhosa Frenchie Mom ou procurando uma lembrança significativa de animal de estimação, esta réplica de Amigurumi feita à mão é a homenagem perfeita。",
    descriptionEs: "Captura las icónicas orejas de murciélago y la carita adorable de tu mejor amigo con un Buldogue Francés Crochet Personalizado. Ya sea que seas una orgullosa Frenchie Mom o busques una lembrança significativa de mascota, esta réplica de Amigurumi hecha a mano es el tributo perfecto。",
    descriptionFr: "Capturez les oreilles emblématiques de chauve-souris et le visage adorable de votre meilleur ami avec un Buldogue Français Crochet Personnalisé. Que vous soyez une fière Frenchie Mom ou que vous cherchiez un souvenir significatif d'animal de compagnie, cette réplique Amigurumi faite à la main est l'hommage parfait。",
    descriptionDe: "Fangen Sie die ikonischen Fledermausohren und das niedliche Gesicht Ihres besten Freundes mit einem Maßgefertigten Französischen Bulldogge-Crochet ein! Ob Sie ein stolzer Frenchie-Elternteil sind oder ein bedeutungsvolles Haustier-Gedenkstück suchen, diese handgemachte Amigurumi-Nachbildung ist die perfekte Huldigung。",
    descriptionIt: " Cattura le iconiche orecchie da pipistrello e il visino adorabile del tuo migliore amico con un Buldog Francese All'uncinetto Personalizzato. Che tu sia una orgogliosa Frenchie Mom o stia cercando un ricordo significativo per animali, questa replica Amigurumi fatta a mano è il tributo perfetto。",
    descriptionRu: "Запечатлейте культовые уши летучей мыши и очаровательное личико вашего лучшего друга с помощью Personalized French Bulldog Crochet! Являетесь ли вы гордым Frenchie Mom или ищете значимый памятный подарок для питомца, эта сделанная вручную реплика Amigurumi является идеальным данью уважения。",
    descriptionAr: "التقط الأذنين المميزتين كالخفاش والوجه اللطيف لأفضل صديق لك مع كلب البولدوج الفرنسي المُحزَّز المُخصَّص. سواء كنت فخورة بـ Frenchie Mom أو تبحث عن ذكرى ذات معنى للحيوانات الأليفة، فإن نسخة الأميجورومي المصنوعة يدويًا هذه هي إحياء مثالي。",
    descriptionHi: "कस्टम क्रोकेट फ्रेंच बुलडॉग के साथ अपने सबसे अच्छे दोस्त के प्रतिष्ठित चमगादड़ के कान और प्यारे चेहरे को कैप्चर करें। चाहे आप एक गर्विता Frenchie Mom हों या एक सार्थक पालतू जानवर की याददाश्त खोज रहे हों, यह हाथ से बना Amigurumi प्रतिकृति एकदम सही श्रद्धांजलि है।",
    descriptionTh: "จับหูค้างคาวไอคอนิกและใบหน้าน่ารักของเพื่อนที่ดีที่สุดของคุณด้วยบูลด็อกฝรั่งเศสชูว่าชูตามสั่ง ไม่ว่าคุณจะเป็น Frenchie Mom ที่ภาคภูมิใจหรือกำลังมองหาของที่ระลึกสัตว์เลี้ยงที่มีความหมาย รีพลิกา Amigurumi ทำมือนี้เป็นการไว้อาลัยที่สมบูรณ์แบบ",
    descriptionVi: "Nắm bắt đôi tai dơi đặc trưng và gương mặt dễ thương của người bạn tốt nhất với Buldog Pháp Crochet Tùy Chỉnh! Dù bạn là Frenchie Mom đầy tự hào hay đang tìm kiếm một kỷ niệm có ý nghĩa cho thú cưng, bản sao Amigurumi thủ công này là lời tri ân hoàn hảo。",
    descriptionId: "Tangkap telinga kelelawar ikonik dan wajah menggemaskan sahabat terbaik Anda dengan Buldog Prancis Rajutan Kustom! Baik Anda Frenchie Mom yang bangga atau mencari kenang-kenangan hewan peliharaan yang bermakna, replika amigurumi buatan tangan ini adalah penghormatan yang sempurna。",
    descriptionMs: "Tangkap telinga kelawar ikonik dan wajah comel sahabat terbaik anda dengan Buldog Perancis Crochet Tersuai! Sama ada anda Frenchie Mom yang bangga atau mencari kenang-kenangan haiwan peliharaan yang bermakna, replika amigurumi buatan tangan ini adalah penghormatan yang sempurna。",
    descriptionTr: "Özel Yapım Fransız Bulldog ile en iyi arkadaşınızın ikonik yarasa kulaklarını ve sevimli yüzünü yakalayın! Gururlu bir Frenchie Ebeveyni olun veya anlamlı bir evcil hayvan anı defteri arıyor olun, bu el yapımı Amigurumi kopyası mükemmel bir saygı gösterisidir。",
    descriptionPl: "Uchwyć kultowe uszy nietoperza i uroczą twarz swojego najlepszego przyjaciela z Custom French Bulldog Crochet! Czy jesteś dumną Frenchie Mom, czy szukasz znaczącej pamiątki dla zwierzaka, ta ręcznie wykonana replika Amigurumi jest idealnym hołdem。",
    descriptionNl: "Leg de iconische vleermuisoren en het schattige gezicht van je beste vast vriend vast met een Custom French Bulldog Crochet! Of je nu een trotse Frenchie-ouder bent of op zoek bent naar een betekenisvol aandenken aan huisdieren, dit met de hand gemaakte Amigurumi-replica is de perfecte tribut。",
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
    namePt: "Pelúcia de Dachshund Crochê Personalizada, Presente Memorial de Animal de Estimação",
    namePtBR: "Pelúcia de Dachshund Crochê Personalizada, Presente Memorial de Animal de Estimação",
    nameEs: "Peluche de Dachshund Crochet Personalizado, Regalo Conmemorativo de Mascota",
    nameFr: "Peluche Teckel Crochet Personnalisé, Cadeau Commémoratif pour Animaux",
    nameDe: "Handgehäkeltes Dackel Stofftier, Persönliches Haustier-Gedenkgeschenk",
    nameIt: "Peluche Bassotto All'uncinetto Personalizzato, Regalo Commemorativo per Animali",
    nameRu: "Вязаная крючком игрушка Такса, Персонализированный памятный подарок для питомца",
    nameAr: "دمية صوفية من خيوط الكروشيه لكلب الداشهوند، هدية تذكارية للحيوانات الأليفة",
    nameHi: "कस्टम क्रोकेट डैक्शहंड प्लश, पर्सनलाइज्ड पेट मेमोरियल गिफ्ट",
    nameTh: "ตุ๊กตาขนสังกัด ชูว่าชู แดชฮันด์ ตามสั่ง ของที่ระลึกสัตว์เลี้ยง",
    nameVi: "Thú bông Dachshund Crochet Tùy Chỉnh, Quà Tưởng Nhớ Thú Cưng",
    nameId: "Boneka Dachshund Rajutan Kustom, Hadiah Kenangan Hewan Peliharaan",
    nameMs: "Boneka Dachshund Crochet Tersuai, Hadiah Kenangan Haiwan",
    nameTr: "Özel Yapım Tığ İşi Dachshund Oyuncak, Kişiselleştirilmiş Evcil Hayvan Anma Hediyesi",
    namePl: "Pluszowy Jamnik Na Szydełku, Spersonalizowany Prezent Pamiątkowy Dla Zwierzaka",
    nameNl: "Handgemaakte Teckel Knuffel, Gepersonaliseerd Huisdier Herdenkingsgeschenk",
    description: "Capture the unique personality of your beloved Doxie with a Custom Crochet Dachshund made just for you! Whether you are celebrating a new puppy or honoring a furry friend who has crossed the rainbow bridge, this handmade Amigurumi replica is the perfect keepsake.\n\nTurn your favorite photos into a huggable Sausage Dog stuffed animal. I pay close attention to every detail—from their specific markings to their floppy ears—to create a true \"Mini Me\" version of your pet.",
    descriptionZh: "捕捉您心爱腊肠犬的独特个性，专为您定制的腊肠犬玩偶。无论是庆祝新小狗的到来，还是纪念已过彩虹桥的毛孩子，这款手工编织的玩偶都是完美的纪念品。",
    descriptionJa: "大切なドキシーの独特なパーソナリティを、オーダーメードのダックスフンドぬいぐるみで表現しましょう。新しい子犬の誕生祝いに、または虹の橋を渡った友人を偲んで手に取るのに、この手作りのアミグリュミ レプリカは完璧な記念品です。",
    descriptionKo: "사랑하는 닥시이의 독특한 개성을 맞춤 제작된 닥스훈트 인형으로 표현하세요. 새로운 강아지 축하 또는 무지개 다리를 건넌 털친구를 기리는 경우에도, 이 수제 아미구루미 레플리카가 완벽한 기념품입니다。",
    descriptionPt: "Capture a personalidade única do seu Doxie amado com um Dachshund Crochê Personalizado feito especialmente para você! Se você está comemorando um novo filhote ou honrando um amigo peludo que cruzou a ponte do arco-íris, esta réplica de Amigurumi feita à mão é a lembrança perfeita。",
    descriptionPtBR: "Capture a personalidade única do seu Doxie amado com um Dachshund Crochê Personalizado feito especialmente para você! Se você está comemorando um novo filhote ou honrando um amigo peludo que cruzou a ponte do arco-íris, esta réplica de Amigurumi feita à mão é a lembrança perfeita。",
    descriptionEs: "Captura la personalidad única de tu Doxie amado con un Dachshund Crochet Personalizado hecho especialmente para ti. Ya sea que estés celebrando un nuevo cachorro o honrando a un amigo peludo que ha cruzado el puente del arcoíris, esta réplica de Amigurumi hecha a mano es el recuerdo perfecto。",
    descriptionFr: "Capturez la personnalité unique de votre Doxie bien-aimé avec un Teckel Crochet Personnalisé fait juste pour vous! Que vous célébriez un nouveau chiot ou honoriez un ami à fourrure qui a traversé le pont de l'arc-en-ciel, cette réplique Amigurumi faite à la main est le souvenir parfait。",
    descriptionDe: "Fangen Sie die einzigartige Persönlichkeit Ihres geliebten Doxie mit einem maßgefertigten Dackel-Crochet ein, das speziell für Sie gemacht wurde! Ob Sie einen neuen Welpen feiern oder einen pelzigen Freund ehren, der die Regenbogenbrücke überquert hat, diese handgemachte Amigurumi-Nachbildung ist das perfekte Andenken。",
    descriptionIt: " Cattura la personalità unica del tuo Doxie amato con un Bassotto All'uncinetto Personalizzato fatto apposta per te! Che tu stia festeggiando un nuovo cucciolo o onorando un amico peloso che ha attraversato il ponte dell'arcobaleno, questa replica Amigurumi fatta a mano è il ricordo perfetto。",
    descriptionRu: "Запечатлейте уникальную личность вашего любимого Докси с помощью Personalized Dachshund Crochet, сделанного специально для вас! Отмечаете ли вы нового щенка или чествуете пушистого друга, который перешел радужный мост, эта сделанная вручную реплика Amigurumi является идеальным напоминанием。",
    descriptionAr: "التقط الشخصية الفريدة لـ Doxie المحبوب الخاص بك مع Dachshund المُحزَّز المُخصَّص المصنوع خصيصًا لك. سواء كنت تحتفل بجرو جديد أو تحيي صديقًا فرويًا عبر جسر قوس قزح، فإن نسخة الأميجورومي المصنوعة يدويًا هذه هي الذكرى المثالية。",
    descriptionHi: "आपके प्यारे Doxie की अनूठी व्यक्तित्व को कस्टम क्रोकेट Dachshund के साथ कैप्चर करें जो विशेष रूप से आपके लिए बनाया गया है! चाहे आप एक नए पिले का जश्न मना रहे हों या एक रेइनबो ब्रिज पार करने वाले रोएंदार दोस्त का सम्मान कर रहे हों, यह हाथ से बना Amigurumi प्रतिकृति एकदम सही स्मृति है।",
    descriptionTh: "จับบุคลิกภาพเฉพาะตัวของ Doxie ที่คุณรักด้วยแดชฮันด์ชูว่าชูตามสั่งที่ทำเฉพาะสำหรับคุณ! ไม่ว่าคุณจะเฉลิมฉลองลูกสุนัขตัวใหม่หรือรำลึกถึงเพื่อนขนฟูที่ข้ามสะพานรุ้ง รีพลิกา Amigurumi ทำมือนี้เป็นของที่ระลึกที่สมบูรณ์แบบ",
    descriptionVi: "Nắm bắt tính cách độc đáo của Doxie yêu quý với Dachshund Crochet Tùy Chỉnh được làm riêng cho bạn! Dù bạn đang ăn mừng chó con mới hay tưởng nhớ người bạn lông xù đã qua cầu vồng, bản sao Amigurumi thủ công này là kỷ niệm hoàn hảo。",
    descriptionId: "Tangkap kepribadian unik Doxie kesayangan Anda dengan Dachshund Rajutan Kustom yang dibuat khusus untuk Anda! Baik Anda merayakan anak anjing baru atau menghormati teman berbulu yang telah melintasi jembatan pelangi, replika amigurumi buatan tangan ini adalah kenang-kenangan yang sempurna。",
    descriptionMs: "Tangkap personaliti unik Doxie kesayangan anda dengan Dachshund Crochet Tersuai yang dibuat khas untuk anda! Sama ada anda meraikan anak anjing baru atau menghormati sahabat berbulu yang telah melintasi jambatan pelangi, replika amigurumi buatan tangan ini adalah kenang-kenangan yang sempurna。",
    descriptionTr: "Özel olarak sizin için yapılmış Custom Dachshund Crochet ile sevdiğiniz Doxie'nin benzersiz kişiliğini yakalayın! Yeni bir köpek yavrusunu kutluyor olun veya gökkuşağı köprüsünü geçmiş tüylü bir dostu onurlandırıyor olun, bu el yapımı Amigurumi kopyası mükemmel bir hatıradır。",
    descriptionPl: "Uchwyć unikalną osobowość ukochanego Doxie z Custom Dachshund Crochet wykonanym specjalnie dla Ciebie! Czy świętujesz nowego szczeniaka, czy honorujesz przyjaciela futrzastego, który przeszedł tęczowy most, ta ręcznie wykonana replika Amigurumi jest idealną pamiątką。",
    descriptionNl: "Leg de unieke persoonlijkheid van uw geliefde Doxie vast met een op maat gemaakte Dachshund Crochet, speciaal voor u gemaakt! Of u nu een nieuwe puppy viert of een harige vriend eert die de regenboogbrug is overgestoken, dit met de hand gemaakte Amigurumi-replica is het perfecte aandenken。",
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
    namePt: "Pelúcia de Rottweiler Crochê Personalizada, Presente Memorial de Animal de Estimação",
    namePtBR: "Pelúcia de Rottweiler Crochê Personalizada, Presente Memorial de Animal de Estimação",
    nameEs: "Peluche de Rottweiler Crochet Personalizado, Regalo Conmemorativo de Mascota",
    nameFr: "Peluche Rottweiler Crochet Personnalisé, Cadeau Commémoratif pour Animaux",
    nameDe: "Handgehäkeltes Rottweiler Stofftier, Persönliches Haustier-Gedenkgeschenk",
    nameIt: "Peluche Rottweiler All'uncinetto Personalizzato, Regalo Commemorativo per Animali",
    nameRu: "Вязаная крючком игрушка Ротвейлер, Персонализированный памятный подарок для питомца",
    nameAr: "دمية صوفية من خيوط الكروشيه لكلب الروتوایلر، هدية تذكارية للحيوانات الأليفة",
    nameHi: "कस्टम क्रोकेट रोटवेलर प्लश, पर्सनलाइज्ड पेट मेमोरियल गिफ्ट",
    nameTh: "ตุ๊กตาขนสังกัด ชูว่าชู โรตไวเลอร์ ตามสั่ง ของที่ระลึกสัตว์เลี้ยง",
    nameVi: "Thú bông Rottweiler Crochet Tùy Chỉnh, Quà Tưởng Nhớ Thú Cưng",
    nameId: "Boneka Rottweiler Rajutan Kustom, Hadiah Kenangan Hewan Peliharaan",
    nameMs: "Boneka Rottweiler Crochet Tersuai, Hadiah Kenangan Haiwan",
    nameTr: "Özel Yapım Tığ İşi Rottweiler Oyuncak, Kişiselleştirilmiş Evcil Hayvan Anma Hediyesi",
    namePl: "Pluszowy Rottweiler Na Szydełku, Spersonalizowany Prezent Pamiątkowy Dla Zwierzaka",
    nameNl: "Handgemaakte Rottweiler Knuffel, Gepersonaliseerd Huisdier Herdenkingsgeschenk",
    description: "Celebrate the loyalty and love of your \"gentle giant\" with a Custom Crochet Rottweiler made exclusively for you! Whether you are looking for a unique Rottie gift for a dog dad, or a comforting pet memorial keepsake to honor a best friend, this handmade Amigurumi replica is designed to warm your heart.\n\nI specialize in turning your favorite pictures into a huggable Rottweiler stuffed animal. From their signature black and tan markings to their expressive eyebrows, I carefully crochet every detail to create a true \"Mini Me\" of your dog.",
    descriptionZh: "为您专属定制的罗威纳犬玩偶，庆祝您温柔巨人的忠诚和爱。无论您是为狗爸爸寻找独特的礼物，还是想用贴心的宠物纪念品来纪念最好的朋友，这款手工编织的玩偶都能温暖您的心。",
    descriptionJa: "あなたの「優しい巨人」の忠誠と愛を祝う、オーダーメードのロットワイラーぬいぐるみを作成します。ユニークなロットワイラーギフトを探す方や、最良の友人を偲ぶ温かいペットメモリアルを探している方に、この手作りのアミグリュミ レプリカは心を温かくします。",
    descriptionKo: "당신의 \"부드러운 거인\"의 충성과 사랑을 기념하는 맞춤 제작 로트weiler 인형을 만나보세요. 독특한 로티 선물을 찾는 개아빠이든, 가장 친한 친구에 대한 위안적인 반려동물 기념품을 찾고 계시든, 이 수제 아미구루미 레플리카가 당신의 마음을 따뜻하게 해드립니다。",
    descriptionPt: "Celebre a lealdade e o amor do seu \"gente gentil\" com um Rottweiler Crochê Personalizado feito exclusivamente para você! Se você está procurando um presente Rottie único para um papai de cachorro, ou uma lembrança reconfortante de animal de estimação para honrar um melhor amigo, esta réplica de Amigurumi feita à mão é projetada para aquecer seu coração。",
    descriptionPtBR: "Celebre a lealdade e o amor do seu \"gente gentil\" com um Rottweiler Crochê Personalizado feito exclusivamente para você! Se você está procurando um presente Rottie único para um papai de cachorro, ou uma lembrança reconfortante de animal de estimação para honrar um melhor amigo, esta réplica de Amigurumi feita à mão é projetada para aquecer seu coração。",
    descriptionEs: "Celebra la lealtad y el amor de tu \"gente gentil\" con un Rottweiler Crochet Personalizado hecho exclusivamente para ti. Ya sea que estés buscando un regalo Rottie único para un papá de perro, o una lembrança reconfortante de mascota para honrar a un mejor amigo, esta réplica de Amigurumi feita a mão está diseñada para calentar tu corazón。",
    descriptionFr: "Célébrez la loyauté et l'amour de votre \"gentil géant\" avec un Rottweiler Crochet Personnalisé fait exclusivement pour vous! Que vous cherchiez un cadeau Rottie unique pour un papa chien, ou un souvenir réconfortant d'animal de compagnie pour honorer un meilleur ami, cette réplique Amigurumi faite à la main est conçue pour réchauffer votre cœur。",
    descriptionDe: "Feiern Sie die Loyalität und Liebe Ihres \"sanften Riesen\" mit einem maßgefertigten Rottweiler-Crochet, das ausschließlich für Sie gemacht wurde! Ob Sie ein einzigartiges Rottie-Geschenk für einen Hundepapa suchen oder ein tröstliches Haustier-Gedenkstück, um einen besten Freund zu ehren, diese handgemachte Amigurumi-Nachbildung ist darauf ausgelegt, Ihr Herz zu wärmen。",
    descriptionIt: "Celebra la lealtà e l'amore del tuo \"gente gentile\" con un Rottweiler All'uncinetto Personalizzato fatto esclusivamente per te! Che tu stia cercando un regalo Rottie unico per un papà di cane, o un ricordo confortante per animali per onorare un migliore amico, questa replica Amigurumi fatta a mano è progettata per riscaldare il tuo cuore。",
    descriptionRu: "Отпразднуйте лояльность и любовь вашего \"нежного гиганта\" с помощью Personalized Rottweiler Crochet, сделанного специально для вас! Ищете ли вы уникальный подарок Rottie для папы-собаки или утешительный памятный подарок для питомца, чтобы почтить лучшего друга, эта сделанная вручную реплика Amigurumi создана, чтобы согреть ваше сердце。",
    descriptionAr: "احتفل بالولاء والحب الخاص بـ \"عملاقك اللطيف\" مع Rottweiler المُحزَّز المُخصَّص المصنوع حصريًا لك. سواء كنت تبحث عن هدية Rottie فريدة لأبي الكلاب، أو ذكرى مريحة للحيوانات الأليفة لتكريم صديق أفضل، فإن نسخة الأميجورومي المصنوعة يدويًا هذه مصممة لتدفئ قلبك。",
    descriptionHi: "आपके \"सौम्य दिग्गज\" की निष्ठा और प्यार को कस्टम क्रोकेट Rottweiler के साथ मनाएं जो विशेष रूप से आपके लिए बनाया गया है! चाहे आप कुत्ते के पिता के लिए एक अनूठा Rottie उपहार खोज रहे हों, या एक सबसे अच्छे दोस्त का सम्मान करने के लिए एक आरामदायक पालतू जानवर की याददाश्त खोज रहे हों, यह हाथ से बना Amigurumi प्रतिकृति आपके दिल को गर्म करने के लिए डिज़ाइन की गई है।",
    descriptionTh: "เฉลิมฉลองความซื่อสัตย์และความรักของ \"ยักษ์ใจดี\" ของคุณด้วยโรตไวเลอร์ชูว่าชูตามสั่งที่ทำเฉพาะสำหรับคุณ! ไม่ว่าคุณจะมองหาของขวัญ Rottie ที่เป็นเอกลักษณ์สำหรับพ่อสุนัข หรือของที่ระลึกสัตว์เลี้ยงที่สบายใจเพื่อเป็นเกียรติแก่เพื่อนที่ดีที่สุด รีพลิกา Amigurumi ทำมือนี้ออกแบบมาให้อบอุ่นหัวใจคุณ",
    descriptionVi: "Kỷ niệm lòng trung thành và tình yêu của \"người khổng lồ dịu dàng\" với Rottweiler Crochet Tùy Chỉnh được làm riêng cho bạn! Dù bạn đang tìm kiếm món quà Rottie độc đáo cho ông bố chó, hay một kỷ niệm thú cưng an ủi để tôn vinh người bạn tốt nhất, bản sao Amigurumi thủ công này được thiết kế để sưởi ấm trái tim bạn。",
    descriptionId: "Rayakan kesetiaan dan cinta \"raksasa lembut\" Anda dengan Rottweiler Rajutan Kustom yang dibuat secara eksklusif untuk Anda! Baik Anda mencari hadiah Rottie unik untuk ayah anjing, atau kenang-kenangan hewan peliharaan yang menenangkan untuk menghormati sahabat terbaik, replika amigurumi buatan tangan ini dirancang untuk menghangatkan hati Anda。",
    descriptionMs: "Rayakan kesetiaan dan cinta \"raksasa lembut\" anda dengan Rottweiler Crochet Tersuai yang dibuat secara eksklusif untuk anda! Sama ada anda mencari hadiah Rottie unik untuk bapa anjing, atau kenang-kenangan haiwan peliharaan yang menenangkan untuk menghormati sahabat terbaik, replika amigurumi buatan tangan ini direka untuk memanaskan hati anda。",
    descriptionTr: "Sizin için özel olarak yapılmış Custom Rottweiler Crochet ile \"nazik dev\" in sadakatini ve sevgisini kutlayın! Köpek babası için benzersiz bir Rottie hediyesi arıyor olun veya en iyi dostu onurlandırmak için rahatlatıcı bir evcil hayvan anı defteri arıyor olun, bu el yapımı Amigurumi kopyası kalbinizi ısıtmak için tasarlanmıştır。",
    descriptionPl: "Uczcij lojalność i miłość swojego \"łagodnego olbrzyma\" dzięki Custom Rottweiler Crochet wykonanemu wyłącznie dla Ciebie! Czy szukasz unikalnego prezentu Rottie dla taty psa, czy pocieszającej pamiątki dla zwierzaka, aby uczcić najlepszego przyjaciela, ta ręcznie wykonana replika Amigurumi została zaprojektowana, aby rozgrzać twoje serce。",
    descriptionNl: "Vi de loyaliteit en liefde van je \"zachte reus\" met een op maat gemaakte Rottweiler Crochet, speciaal voor jou gemaakt! Of je nu op zoek bent naar een uniek Rottie-cadeau voor een hondenvader, of een troostrijke herdenking voor huisdieren om een beste vriend te eren, dit met de hand gemaakte Amigurumi-replica is ontworpen om je hart te verwarmen。",
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
    nameJa: "ビーグルぬいぐるみ, ペットメモリアルギフト",
    nameKo: "비글 아미구루미 인형, 반려동물 기념 선물",
    namePt: "Pelúcia de Beagle Crochê Personalizada, Presente Memorial de Animal de Estimação",
    namePtBR: "Pelúcia de Beagle Crochê Personalizada, Presente Memorial de Animal de Estimação",
    nameEs: "Peluche de Beagle Crochet Personalizado, Regalo Conmemorativo de Mascota",
    nameFr: "Peluche Beagle Crochet Personnalisé, Cadeau Commémoratif pour Animaux",
    nameDe: "Handgehäkeltes Beagle Stofftier, Persönliches Haustier-Gedenkgeschenk",
    nameIt: "Peluche Beagle All'uncinetto Personalizzato, Regalo Commemorativo per Animali",
    nameRu: "Вязаная крючком игрушка Бигль, Персонализированный памятный подарок для питомца",
    nameAr: "دمية صوفية من خيوط الكروشيه لكلب البيجل، هدية تذكارية للحيوانات الأليفة",
    nameHi: "कस्टम क्रोकेट बीगल प्लश, पर्सनलाइज्ड पेट मेमोरियल गिफ्ट",
    nameTh: "ตุ๊กตาขนสังกัด ชูว่าชู บีเกิล ตามสั่ง ของที่ระลึกสัตว์เลี้ยง",
    nameVi: "Thú bông Beagle Crochet Tùy Chỉnh, Quà Tưởng Nhớ Thú Cưng",
    nameId: "Boneka Beagle Rajutan Kustom, Hadiah Kenangan Hewan Peliharaan",
    nameMs: "Boneka Beagle Crochet Tersuai, Hadiah Kenangan Haiwan",
    nameTr: "Özel Yapım Tığ İşi Beagle Oyuncak, Kişiselleştirilmiş Evcil Hayvan Anma Hediyesi",
    namePl: "Pluszowy Beagle Na Szydełku, Spersonalizowany Prezent Pamiątkowy Dla Zwierzaka",
    nameNl: "Handgemaakte Beagle Knuffel, Gepersonaliseerd Huisdier Herdenkingsgeschenk",
    description: "Capture the floppy ears and soulful eyes of your favorite hound with a Custom Crochet Beagle! Whether you are looking for a unique Beagle Mom gift or a touching pet memorial keepsake to honor a furry friend, this handmade Amigurumi replica is crafted with love.\n\nI specialize in turning your cherished photos into a huggable Beagle stuffed animal. I pay special attention to their distinct tri-color markings (or lemon/bi-color patterns) and adorable expressions to create a true \"Mini Me\" version of your dog.",
    descriptionZh: "捕捉您心爱猎犬的垂耳和深情眼睛，定制的比格犬玩偶。无论您是想为比格犬妈妈寻找独特的礼物，还是想用贴心的宠物纪念品来纪念毛孩子，这款手工编织的玩偶都是用爱精心制作的。",
    descriptionJa: "大切な猟犬の垂れ耳と魂の目を、オーダーメードのビーグルぬいぐるみで表現しましょう。ユニークなビーグルママへのギフトを探す方や、毛皮の手法を偲んで心に訴えるペットメモリアルを探している方に、この手作りのアミグリュミ レプリカは愛情込めて作られています。",
    descriptionKo: "사랑하는 사냥개의 처진 귀와 깊은 눈빛을 맞춤 제작된 비글 인형으로 포착하세요. 독특한 비글맘 선물을 찾거나 소중한 털친구를 기리는 감동적인 반려동물 기념품을 원하신다면, 이 수제 아미구루미 레플리카가 사랑으로 만들어졌습니다。",
    descriptionPt: "Capture as orelhas caídas e os olhos cheios de alma do seu sabujo favorito com um Beagle Crochê Personalizado! Se você está procurando um presente único para uma Beagle Mom ou uma lembrança comovente de animal de estimação para honrar um amigo peludo, esta réplica de Amigurumi feita à mão é feita com amor。",
    descriptionPtBR: "Capture as orelhas caídas e os olhos cheios de alma do seu sabujo favorito com um Beagle Crochê Personalizado! Se você está procurando um presente único para uma Beagle Mom ou uma lembrança comovente de animal de estimação para honrar um amigo peludo, esta réplica de Amigurumi feita à mão é feita com amor。",
    descriptionEs: "Captura las orejas caídas y los ojos llenos de alma de tu sabueso favorito con un Beagle Crochet Personalizado. Ya sea que estés buscando un regalo único para una Beagle Mom o uma lembrança comovente de mascota para honrar a un amigo peludo, esta réplica de Amigurumi feita a mão é feita com amor。",
    descriptionFr: "Capturez les oreilles tombantes et les yeux animés de votre chien de chasse préféré avec un Beagle Crochet Personnalisé! Que vous cherchiez un cadeau unique pour une Beagle Mom ou un souvenir'émouvant d'animal de compagnie pour honorer un ami à fourrure, cette réplique Amigurumi faite à la main est fabriqués avec amour。",
    descriptionDe: "Fangen Sie die schlaffen Ohren und die seelenvollen Augen Ihres Lieblingshundes mit einem maßgefertigten Beagle-Crochet ein! Ob Sie ein einzigartiges Geschenk für eine Beagle-Mama oder ein ergreifendes Haustier-Gedenkstück suchen, um einen pelzigen Freund zu ehren, diese handgemachte Amigurumi-Nachbildung ist mit Liebe gefertigt。",
    descriptionIt: " Cattura le orecchie flosce e gli occhi pieni di anima del tuo segugio preferito con un Beagle All'uncinetto Personalizzato! Che tu stia cercando un regalo unico per una Beagle Mom o un ricordo commovente per animali per onorare un amico peloso, questa replica Amigurumi fatta a mano è realizzata con amore。",
    descriptionRu: "Запечатлейте висячие уши и душевные глаза вашей любимой гончей с помощью Personalized Beagle Crochet! Ищете ли вы уникальный подарок для Beagle Mom или трогательный памятный подарок для питомца, чтобы почтить пушистого друга, эта сделанная вручную реплика Amigurumi сделана с любовью。",
    descriptionAr: "التقط الأذنين المتدليتين والعيون الممتلئة بالروح لصيادك المفضل مع Beagle المُحزَّز المُخصَّص. سواء كنت تبحث عن هدية فريدة لـ Beagle Mom أو ذكرى مؤثرة للحيوانات الأليفة لتكريم صديق فروي، فإن نسخة الأميجورومي المصنوعة يدويًا هذه مصنوعة بحب。",
    descriptionHi: "अपने पसंदीदा शिकारी के झूलते कान और आत्मा से भरी आंखों को कस्टम क्रोकेट बीगल के साथ कैप्चर करें! चाहे आप एक अनूठा बीगल मॉम उपहार खोज रहे हों या एक रोएंदार दोस्त का सम्मान करने के लिए एक हृदयस्पर्शी पालतू जानवर की याददाश्त खोज रहे हों, यह हाथ से बना Amigurumi प्रतिकृति प्यार से बनाई गई है।",
    descriptionTh: "จับหูที่ตกและดวงตาที่เต็มไปด้วยจิตวิญญาณของนักล่าที่คุณชอบด้วยบีเกิลชูว่าชูตามสั่ง! ไม่ว่าคุณจะมองหาของขวัญที่เป็นเอกลักษณ์สำหรับ Beagle Mom หรือของที่ระลึกสัตว์เลี้ยงที่สะเทรอนเพื่อเป็นเกียรติแก่เพื่อนขนฟู รีพลิกา Amigurumi ทำมือนี้ทำด้วยความรัก",
    descriptionVi: "Nắm bắt đôi tai cụp và đôi mắt đầy linh hồn của người săn mồi yêu quý với Beagle Crochet Tùy Chỉnh! Dù bạn đang tìm kiếm món quà Beagle Mom độc đáo hay một kỷ niệm thú cưng xúc động để tôn vinh người bạn lông xù, bản sao Amigurumi thủ công này được làm bằng tình yêu。",
    descriptionId: "Tangkap telinga terkulai dan mata penuh jiwa dari anjing pemburu favorit Anda dengan Beagle Rajutan Kustom! Baik Anda mencari hadiah Beagle Mom yang unik atau kenang-kenangan hewan peliharaan yang menyentuh untuk menghormati teman berbulu, replika amigurumi buatan tangan ini dibuat dengan cinta。",
    descriptionMs: "Tangkap telinga terkulai dan mata penuh jiwa dari anjing pemburu favourite anda dengan Beagle Crochet Tersuai! Sama ada anda mencari hadiah Beagle Mom yang unik atau kenang-kenangan haiwan peliharaan yang menyentuh untuk menghormati sahabat berbulu, replika amigurumi buatan tangan ini dibuat dengan cinta。",
    descriptionTr: "En sevdiğiniz av köpeğinin sarkan kulaklarını ve ruh dolu gözlerini Custom Beagle Crochet ile yakalayın! Benzersiz bir Beagle Mom hediyesi arıyor olun veya bir tüylü dostu onurlandırmak için dokunaklı bir evcil hayvan anı defteri arıyor olun, bu el yapımı Amigurumi kopyası aşkla yapılmıştır。",
    descriptionPl: "Uchwyć zwiotczałe uszy i pełne duszy oczy ulubionego psa gończego dzięki Custom Beagle Crochet! Czy szukasz unikalnego prezentu Beagle Mom, czy wzruszającej pamiątki dla zwierzaka, aby uczcić futrzastego przyjaciela, ta ręcznie wykonana replika Amigurumi jest wykonana z miłością。",
    descriptionNl: "Leg de hangende oren en zielvolle ogen van je favoriete jachthond vast met een Custom Beagle Crochet! Of je nu op zoek bent naar een uniek Beagle Mom-cadeau of een ontroerend aandenken voor huisdieren om een harige vriend te eren, dit met de hand gemaakte Amigurumi-replica is met liefde gemaakt。",
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
    namePt: "Pelúcia de Buldogue Inglês Crochê Personalizada, Presente Memorial de Animal de Estimação",
    namePtBR: "Pelúcia de Buldogue Inglês Crochê Personalizada, Presente Memorial de Animal de Estimação",
    nameEs: "Peluche de Buldog Inglés Crochet Personalizado, Regalo Conmemorativo de Mascota",
    nameFr: "Peluche Bouledogue Anglais Crochet Personnalisé, Cadeau Commémoratif pour Animaux",
    nameDe: "Handgehäkeltes English Bulldog Stofftier, Persönliches Haustier-Gedenkgeschenk",
    nameIt: "Peluche Bulldog Inglese All'uncinetto Personalizzato, Regalo Commemorativo per Animali",
    nameRu: "Вязаная крючком игрушка Английский бульдог, Персонализированный памятный подарок для питомца",
    nameAr: "دمية صوفية من خيوط الكروشيه لكلب البولدوج الإنجليزي، هدية تذكارية للحيوانات الأليفة",
    nameHi: "कस्टम क्रोकेट इंग्लिश बुलडॉग प्लश, पर्सनलाइज्ड पेट मेमोरियल गिफ्ट",
    nameTh: "ตุ๊กตาขนสังกัด ชูว่าชู บูลด็อกอังกฤษ ตามสั่ง ของที่ระลึกสัตว์เลี้ยง",
    nameVi: "Thú bông Buldog Anh Crochet Tùy Chỉnh, Quà Tưởng Nhớ Thú Cưng",
    nameId: "Boneka English Bulldog Rajutan Kustom, Hadiah Kenangan Hewan Peliharaan",
    nameMs: "Boneka English Bulldog Crochet Tersuai, Hadiah Kenangan Haiwan",
    nameTr: "Özel Yapım Tığ İşi English Bulldog Oyuncak, Kişiselleştirilmiş Evcil Hayvan Anma Hediyesi",
    namePl: "Pluszowy Buldog Angielski Na Szydełku, Spersonalizowany Prezent Pamiątkowy Dla Zwierzaka",
    nameNl: "Handgemaakte English Bulldog Knuffel, Gepersonaliseerd Huisdier Herdenkingsgeschenk",
    description: "Capture the irresistible wrinkles and grumpy-cute expression of your beloved \"Bully\" with a Custom Crochet English Bulldog! Whether you are looking for a unique gift for a Bulldog Mom or a touching pet memorial keepsake, this handmade Amigurumi replica is the perfect tribute.\n\nI specialize in turning your favorite photos into a huggable English Bulldog stuffed animal. I pay special attention to their iconic rolls, underbite, and stocky build to create a true \"Mini Me\" version of your dog.",
    descriptionZh: "捕捉您心爱斗牛犬无法抗拒的皱纹和可爱的表情，定制的英国斗牛犬玩偶。无论您是想为斗牛犬妈妈寻找独特的礼物，还是想用贴心的宠物纪念品来纪念忠诚的伙伴，这款手工编织的玩偶都是完美的致敬。",
    descriptionJa: "大切な「暴れん坊」の抗いがたい皺と不機嫌可愛い表情を、オーダーメードのイングリッシュブルドッグぬいぐるみで表現しましょう。ユニークなブルドッグママへのギフトを探す方や、忠実な相棒を偲ぶ心に訴えるペットメモリアルを探している方に、この手作りのアミグリュミ レプリカは完璧なトリビュートです。",
    descriptionKo: "사랑하는 \"말괄량이\"의 저항할 수 없는 주름과 시무룩하게可爱的 표정을 맞춤 제작된 잉글리시 불독 인형으로 표현하세요. 독특한 불독맘 선물을 찾거나 충실한 친구에 대한 마음에 와닿는 반려동물 기념품을 원하신다면, 이 수제 아미구루미 레플리카가 완벽한 헌정입니다。",
    descriptionPt: "Capture os vincos irresistíveis e a expressão mal-humorada e fofa do seu \"Bully\" amado com um Buldogue Inglês Crochê Personalizado! Se você está procurando um presente único para uma Bulldog Mom ou uma lembrança comovente de animal de estimação, esta réplica de Amigurumi feita à mão é a homenagem perfeita。",
    descriptionPtBR: "Capture os vincos irresistíveis e a expressão mal-humorada e fofa do seu \"Bully\" amado com um Buldogue Inglês Crochê Personalizado! Se você está procurando um presente único para uma Bulldog Mom ou uma lembrança comovente de animal de estimação, esta réplica de Amigurumi feita à mão é a homenagem perfeita。",
    descriptionEs: "Captura los vincos irresistibles y la expresión gruñón-y-linda de tu \"Bully\" amado con un Buldog Inglés Crochet Personalizado. Ya sea que estés buscando un regalo único para una Bulldog Mom o uma lembrança comovente de mascota, esta réplica de Amigurumi feita a mão é a homenagem perfeita。",
    descriptionFr: "Capturez les rides irrésistibles et l'expression grognon-mignonne de votre \"Bully\" bien-aimé avec un Bouledogue Anglais Crochet Personnalisé! Que vous cherchiez un cadeau unique pour une Bulldog Mom ou un souvenir'émouvant d'animal de compagnie, cette réplique Amigurumi faite à la main est l'hommage parfait。",
    descriptionDe: "Fangen Sie die unwiderstehlichen Falten und das mürrisch-niedliche Gesicht Ihres geliebten \"Bully\" mit einem maßgefertigten English Bulldog-Crochet ein! Ob Sie ein einzigartiges Geschenk für eine Bulldog-Mama oder ein ergreifendes Haustier-Gedenkstück suchen, diese handgemachte Amigurumi-Nachbildung ist die perfekte Huldigung。",
    descriptionIt: " Cattura le rughe irresistibili e l'espressione imbronciata-e-carina del tuo \"Bully\" amato con un Bulldog Inglese All'uncinetto Personalizzato! Che tu stia cercando un regalo unico per una Bulldog Mom o un ricordo commovente per animali, questa replica Amigurumi fatta a mano è il tributo perfetto。",
    descriptionRu: "Запечатлейте неотразимые морщинки и ворчливо-милое выражение вашего любимого \"Булли\" с помощью Personalized English Bulldog Crochet! Ищете ли вы уникальный подарок для Bulldog Mom или трогательный памятный подарок для питомца, эта сделанная вручную реплика Amigurumi является идеальным данью уважения。",
    descriptionAr: "التقط التجاعيد التي لا تُقاوم والتعبير الكئيب-اللطيف لـ \"Bully\" المحبوب الخاص بك مع English Bulldog المُحزَّز المُخصَّص. سواء كنت تبحث عن هدية فريدة لـ Bulldog Mom أو ذكرى مؤثرة للحيوانات الأليفة، فإن نسخة الأميجورومي المصنوعة يدويًا هذه هي إحياء مثالي。",
    descriptionHi: "अपने प्यारे \"बुली\" के अवरोधनीय झुर्रियों और चिड़चिड़े-प्यारे भाव को कस्टम क्रोकेट इंग्लिश बुलडॉग के साथ कैप्चर करें! चाहे आप एक अनूठा बुलडॉग मॉम उपहार खोज रहे हों या एक हृदयस्पर्शी पालतू जानवर की याददाश्त खोज रहे हों, यह हाथ से बना Amigurumi प्रतिकृति एकदम सही श्रद्धांजलि है।",
    descriptionTh: "จับริ้วรอยที่ไม่อาจต้านทานได้และสีหน้าที่ขุ่นมีแต่น่ารักของ \"Bully\" ที่คุณรักด้วยบูลด็อกอังกฤษชูว่าชูตามสั่ง! ไม่ว่าคุณจะมองหาของขวัญที่เป็นเอกลักษณ์สำหรับ Bulldog Mom หรือของที่ระลึกสัตว์เลี้ยงที่สะเทรอน รีพลิกา Amigurumi ทำมือนี้เป็นการไว้อาลัยที่สมบูรณ์แบบ",
    descriptionVi: "Nắm bắt những nếp nhăn không thể cưỡng lại và biểu cảm cáu gắt-yêu của \"Bully\" yêu quý với Buldog Anh Crochet Tùy Chỉnh! Dù bạn đang tìm kiếm món quà Bulldog Mom độc đáo hay một kỷ niệm thú cưng xúc động, bản sao Amigurumi thủ công này là lời tri ân hoàn hảo。",
    descriptionId: "Tangkap kerutan yang tak terelakkan dan ekspresi ketus-menggemaskan dari \"Bully\" kesayangan Anda dengan English Bulldog Rajutan Kustom! Baik Anda mencari hadiah yang unik untuk Bulldog Mom atau kenang-kenangan hewan peliharaan yang menyentuh, replika amigurumi buatan tangan ini adalah penghormatan yang sempurna。",
    descriptionMs: "Tangkap kedutan yang tidak dapat ditolak dan ekspresi ketus-comel \"Bully\" kesayangan anda dengan English Bulldog Crochet Tersuai! Sama ada anda mencari hadiah unik untuk Bulldog Mom atau kenang-kenangan haiwan peliharaan yang menyentuh, replika amigurumi buatan tangan ini adalah penghormatan yang sempurna。",
    descriptionTr: "Sevdiğiniz \"Bully\" in direnilemez kırışıklıklarını ve somurtkan-sevimli ifadesini Custom English Bulldog Crochet ile yakalayın! Bulldog Mom için benzersiz bir hediye arıyor olun veya dokunaklı bir evcil hayvan anı defteri arıyor olun, bu el yapımı Amigurumi kopyası mükemmel bir saygı gösterisidir。",
    descriptionPl: "Uchwyć nieodparte zmarszczki i naburmuszone-urocze wyrażenie ukochanego \"Bully\" dzięki Custom English Bulldog Crochet! Czy szukasz unikalnego prezentu dla Bulldog Mom, czy wzruszającej pamiątki dla zwierzaka, ta ręcznie wykonana replika Amigurumi jest idealnym hołdem。",
    descriptionNl: "Leg de onweerstaanbare rimpels en de norse-leuke uitdrukking van je geliefde \"Bully\" vast met een Custom English Bulldog Crochet! Of je nu op zoek bent naar een uniek cadeau voor Bulldog Mom of een ontroerend aandenken voor huisdieren, dit met de hand gemaakte Amigurumi-replica is de perfecte tribut。",
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
    namePt: "Pelúcia de Poodle Crochê Personalizada, Presente Memorial de Animal de Estimação",
    namePtBR: "Pelúcia de Poodle Crochê Personalizada, Presente Memorial de Animal de Estimação",
    nameEs: "Peluche de Caniche Crochet Personalizado, Regalo Conmemorativo de Mascota",
    nameFr: "Peluche Caniche Crochet Personnalisé, Cadeau Commémoratif pour Animaux",
    nameDe: "Handgehäkeltes Pudel Stofftier, Persönliches Haustier-Gedenkgeschenk",
    nameIt: "Peluche Barboncino All'uncinetto Personalizzato, Regalo Commemorativo per Animali",
    nameRu: "Вязаная крючком игрушка Пудель, Персонализированный памятный подарок для питомца",
    nameAr: "دمية صوفية من خيوط الكروشيه لكلب بودل، هدية تذكارية للحيوانات الأليفة",
    nameHi: "कस्टम क्रोकेट पूडल प्लश, पर्सनलाइज्ड पेट मेमोरियल गिफ्ट",
    nameTh: "ตุ๊กตาขนสังกัด ชูว่าชู พูเดิล ตามสั่ง ของที่ระลึกสัตว์เลี้ยง",
    nameVi: "Thú bông Poodle Crochet Tùy Chỉnh, Quà Tưởng Nhớ Thú Cưng",
    nameId: "Boneka Poodle Rajutan Kustom, Hadiah Kenangan Hewan Peliharaan",
    nameMs: "Boneka Poodle Crochet Tersuai, Hadiah Kenangan Haiwan",
    nameTr: "Özel Yapım Tığ İşi Poodle Oyuncak, Kişiselleştirilmiş Evcil Hayvan Anma Hediyesi",
    namePl: "Pluszowy Pinczer Na Szydełku, Spersonalizowany Prezent Pamiątkowy Dla Zwierzaka",
    nameNl: "Handgemaakte Poedel Knuffel, Gepersonaliseerd Huisdier Herdenkingsgeschenk",
    description: "Capture the elegance and curly cuteness of your furry friend with a Custom Crochet Poodle! Whether you have a tiny Toy Poodle or a majestic Standard Poodle, this handmade Amigurumi replica is crafted to look just like them.\n\nI specialize in turning your pet photos into a huggable Poodle stuffed animal. I pay special attention to reproducing their signature curly fur texture and specific haircut (from \"Teddy Bear\" cuts to show clips) to create a true \"Mini Me\" of your dog.",
    descriptionZh: "捕捉您毛茸茸朋友的优雅和卷曲可爱，定制的贵宾犬玩偶。无论您有 tiny 的玩具贵宾犬还是威严的标准贵宾犬，这款手工编织的玩偶都精心制作，力求惟妙惟肖。",
    descriptionJa: "毛皮の手法の優雅と巻き毛のかわいさを、オーダーメードのプードルぬいぐるみで表現しましょう。小さなトイプードルでも、威厳のあるスタンダードプードルでも、この手作りのアミグリュミ レプリカは、まるでそのままのような外観を実現します。",
    descriptionKo: "털친구의 우아함과 곱게 말린 털의 귀여움을 맞춤 제작된 푸들 인형으로 표현하세요. 작은 토이 푸들이든 위엄 있는 스탠다드 푸들이든, 이 수제 아미구루미 레플리카는 마치 원본과 같은 외관을 구현합니다。",
    descriptionPt: "Capture a elegância e a fofura cacheada do seu amigo peludo com um Poodle Crochê Personalizado! Se você tem um Toy Poodle pequeno ou um majestoso Standard Poodle, esta réplica de Amigurumi feita à mão é feita para parecer exatamente com eles。",
    descriptionPtBR: "Capture a elegância e a fofura cacheada do seu amigo peludo com um Poodle Crochê Personalizado! Se você tem um Toy Poodle pequeno ou um majestoso Standard Poodle, esta réplica de Amigurumi feita à mão é feita para parecer exatamente com eles。",
    descriptionEs: "Captura la elegancia y la ternura rizada de tu amigo peludo con un Caniche Crochet Personalizado. Ya tengas un pequeño Toy Poodle o un majestuoso Standard Poodle, esta réplica de Amigurumi feita a mão é feita para parecer exatamente com eles。",
    descriptionFr: "Capturez l'élégance et la mignonneur bouclée de votre ami à fourrure avec un Caniche Crochet Personnalisé! Que vous ayez un petit Toy Poodle ou un majestueux Standard Poodle, cette réplique Amigurumi faite à la main est faite pour leur ressembler exactement。",
    descriptionDe: "Fangen Sie die Eleganz und die lockige Niedlichkeit Ihres pelzigen Freundes mit einem maßgefertigten Poodle-Crochet ein! Ob Sie einen kleinen Spielzeug-Pudel oder einen majestätischen Standard-Pudel haben, diese handgemachte Amigurumi-Nachbildung ist so gestaltet, dass sie genau wie sie aussieht。",
    descriptionIt: " Cattura l'eleganza e il ricciolo carino del tuo amico peloso con un Barboncino All'uncinetto Personalizzato! Che tu abbia un piccolo Toy Poodle o un maestoso Standard Poodle, questa replica Amigurumi fatta a mano è realizzata per sembrare proprio come loro。",
    descriptionRu: "Запечатлейте элегантность и кудрявую прелесть вашего пушистого друга с помощью Personalized Poodle Crochet! Есть ли у вас крошечная игрушка Poodle или величественный стандартный пудель, эта сделанная вручную реплика Amigurumi создана так, чтобы выглядеть точно как они。",
    descriptionAr: "التقط الأناقة ورقة الذيل الرقيق لصديقك الفروي مع Poodle المُحزَّز المُخصَّص. سواء كان لديك Toy Poodle صغير أو Standard Poodle المهيب، فإن نسخة الأميجورومي المصنوعة يدويًا هذه مصنوعة لتبدو تمامًا مثلهم。",
    descriptionHi: "अपने रोएंदार दोस्त की सुंदरता और घुंघराले प्यारेपन को कस्टम क्रोकेट पूडल के साथ कैप्चर करें! चाहे आपके पास एक छोटा टॉय पूडल हो या एक भव्य स्टैंडर्ड पूडल, यह हाथ से बना Amigurumi प्रतिकृति उनके जैसा दिखने के लिए बनाई गई है।",
    descriptionTh: "จับความสง่างามและความน่ารักที่เป็นลอนของเพื่อนขนฟูของคุณด้วยพูเดิลชูว่าชูตามสั่ง! ไม่ว่าคุณจะมีท็อยพูเดิลตัวเล็กหรือสแตนดาร์ดพูเดิลที่สง่างาม รีพลิกา Amigurumi ทำมือนี้ทำให้ดูเหมือนพวกเขาจริงๆ",
    descriptionVi: "Nắm bắt sự thanh lịch và vẻ đáng yêu xoăn của người bạn lông xù với Poodle Crochet Tùy Chỉnh! Dù bạn có Toy Poodle nhỏ hay Standard Poodle oai vệ, bản sao Amigurumi thủ công này được chế tác để trông giống họ。",
    descriptionId: "Tangkap keanggunan dan ke可爱-an keriting teman berbulu Anda dengan Poodle Rajutan Kustom! Baik Anda memiliki Toy Poodle kecil atau Standard Poodle yang megah, replika amigurumi buatan tangan ini dibuat agar terlihat seperti mereka。",
    descriptionMs: "Tangkap keanggunan dan ke-comel-an bergelung teman berbulu anda dengan Poodle Crochet Tersuai! Sama ada anda memiliki Toy Poodle kecil atau Standard Poodle yang megah, replika amigurumi buatan tangan ini dibuat untuk kelihatan seperti mereka。",
    descriptionTr: "Tüylü arkadaşınızın zarafetini ve kıvırcık sevimliliğini Custom Poodle Crochet ile yakalayın! Küçük bir Toy Poodle'ınız veya görkemli bir Standard Poodle'ınız olsun, bu el yapımı Amigurumi kopyası onlar gibi görünmek üzere yapılmıştır。",
    descriptionPl: "Uchwyć elegancję i kędzierzawą słodkość swojego futrzastego przyjaciela dzięki Custom Poodle Crochet! Czy masz małego Toy Poodle, czy majestatycznego Standard Poodle, ta ręcznie wykonana replika Amigurumi jest wykonana, aby wyglądać dokładnie jak one。",
    descriptionNl: "Leg de elegantie en krullende schattigheid van je harige vriend vast met een Custom Poodle Crochet! Of je nu een kleine Speelgoed-Poodle of een majestic Standard Poodle hebt, dit met de hand gemaakte Amigurumi-replica is gemaakt om er precies zo uit te zien。",
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
    descriptionJa: "最良の友人の忠誠と勇気を、オーダーメードのジャーマンシェパードぬいぐるみで敬意を表しましょう。大切な家族の番犬、退職した警察犬を祝う方に、または意味のあるジャーマンシェパード メモリアルギフトを探している方に、この手作りのアミグリュミ レプリカは完璧なトリビュートです。",
    descriptionKo: "가장 친한 친구의 충성과 용기를 기념하여 맞춤 제작된 저먼 셰퍼드 인형으로 존경을 표하세요. 사랑하는 가족의 경비견, 퇴역한 경찰견을 축하하거나 의미 있는 저먼 셰퍼드 기념 선물을 찾고 계시다면, 이 수제 아미구루미 레플리카가 완벽한 헌정입니다。",
    descriptionPt: "Honre a lealdade e a coragem do seu melhor amigo com um Pastor Alemão Crochê Personalizado feito especialmente para você. Se você está comemorando um guarda de família amado, um K9 policial aposentado, ou procurando um presente de lembrança significativo de GSD, esta réplica de Amigurumi feita à mão é a homenagem perfeita。",
    descriptionPtBR: "Honre a lealdade e a coragem do seu melhor amigo com um Pastor Alemão Crochê Personalizado feito especialmente para você. Se você está comemorando um guarda de família amado, um K9 policial aposentado, ou procurando um presente de lembrança significativo de GSD, esta réplica de Amigurumi feita à mão é a homenagem perfeita。",
    descriptionEs: "Honra la lealtad y la valentía de tu mejor amigo con un Pastor Alemán Crochet Personalizado hecho especialmente para ti. Ya sea que estés celebrando un guardián de familia amado, un K9 policial jubilado, o buscando un regalo de lembrança significativo de GSD, esta réplica de Amigurumi feita a mão é a homenagem perfeita。",
    descriptionFr: "Honrez la loyauté et le courage de votre meilleur ami avec un Berger Allemand Crochet Personnalisé fait juste pour vous! Que vous célébriez un gardien de famille bien-aimé, un K9 policier à la retraite, ou cherchiez un cadeau commémoratif GSD significatif, cette réplique Amigurumi faite à la main est l'hommage parfait。",
    descriptionDe: "Ehren Sie die Loyalität und Tapferkeit Ihres besten Freundes mit einem maßgefertigten Deutschen Schäferhund-Crochet, das speziell für Sie gemacht wurde! Ob Sie einen geliebten Familienwächter, einen pensionierten Polizei-K9 feiern oder ein bedeutungsvolles GSD-Gedenkgeschenk suchen, diese handgemachte Amigurumi-Nachbildung ist die perfekte Huldigung。",
    descriptionIt: "Onora la lealtà e il coraggio del tuo migliore amico con un Pastore Tedesco All'uncinetto Personalizzato fatto apposta per te! Che tu stia festeggiando un guardiano di famiglia amato, un K9 poliziotto in pensione, o cercando un regalo commemorativo GSD significativo, questa replica Amigurumi fatta a mano è il tributo perfetto。",
    descriptionRu: "Почтите лояльность и храбрость вашего лучшего друга с помощью Personalized German Shepherd Crochet, сделанного специально для вас! Отмечаете ли вы любимого семейного охранника, бывшую полицейскую собаку K9 или ищете значимый памятный подарок GSD, эта сделанная вручную реплика Amigurumi является идеальным данью уважения。",
    descriptionAr: "كرّم الولاء والشجاعة لأفضل صديق لك مع German Shepherd المُحزَّز المُخصَّص المصنوع خصيصًا لك. سواء كنت تحتفل بحارس العائلة المحبوب، أو K9 الشرطي المتقاعد، أو تبحث عن هدية تذكارية GSD ذات معنى، فإن نسخة الأميجورومي المصنوعة يدويًا هذه هي إحياء مثالي。",
    descriptionHi: "आपके सबसे अच्छे दोस्त की निष्ठा और बहादुरी का सम्मान कस्टम क्रोकेट जर्मन शेफर्ड के साथ करें जो विशेष रूप से आपके लिए बनाया गया है! चाहे आप एक प्यारे पारिवारिक रक्षक, सेवानिवृत्त पुलिस K9 का जश्न मना रहे हों, या एक सार्थक GSD स्मृति उपहार खोज रहे हों, यह हाथ से बना Amigurumi प्रतिकृति एकदम सही श्रद्धांजलि है।",
    descriptionTh: "เชิดชูความซื่อสัตย์และความกล้าหาญของเพื่อนที่ดีที่สุดของคุณด้วยเชฟเฟอร์ดเยอรมันชูว่าชูตามสั่งที่ทำเฉพาะสำหรับคุณ! ไม่ว่าคุณจะเฉลิมฉลองผู้พิทักษ์ครอบครัวที่รัก หมาตำรวจเกษียณ หรือมองหาของขวัญที่ระลึก GSD ที่มีความหมาย รีพลิกา Amigurumi ทำมือนี้เป็นการไว้อาลัยที่สมบูรณ์แบบ",
    descriptionVi: "Tôn vinh lòng trung thành và sự dũng cảm của người bạn tốt nhất với German Shepherd Crochet Tùy Chỉnh được làm riêng cho bạn! Dù bạn đang ăn mừng người bảo vệ gia đình yêu quý, chó cảnh sát nghỉ hưu, hay tìm kiếm món quà kỷ niệm GSD có ý nghĩa, bản sao Amigurumi thủ công này là lời tri ân hoàn hảo。",
    descriptionId: "Hormati kesetiaan dan keberanian sahabat terbaik Anda dengan German Shepherd Rajutan Kustom yang dibuat khusus untuk Anda! Baik Anda merayakan penjaga keluarga tercinta, K9 polisi yang pensiun, atau mencari hadiah kenangan GSD yang bermakna, replika amigurumi buatan tangan ini adalah penghormatan yang sempurna。",
    descriptionMs: "Hormati kesetiaan dan keberanian sahabat terbaik anda dengan German Shepherd Crochet Tersuai yang dibuat khas untuk anda! Sama ada anda meraikan penjaga keluarga tercinta, K9 polis yang bersara, atau mencari hadiah kenangan GSD yang bermakna, replika amigurumi buatan tangan ini adalah penghormatan yang sempurna。",
    descriptionTr: "Sizin için özel olarak yapılmış Custom German Shepherd ile en iyi arkadaşınızın sadakatini ve cesaretini onurlandırın! Sevilen bir aile koruyucusu, emekli polis K9'ini kutluyor olun veya anlamlı bir GSD anı hediyesi arıyor olun, bu el yapımı Amigurumi kopyası mükemmel bir saygı gösterisidir。",
    descriptionPl: "Uczcij lojalność i odwagę swojego najlepszego przyjaciela dzięki Custom German Shepherd Crochet wykonanemu specjalnie dla Ciebie! Czy świętujesz ukochanego strażnika rodziny, emerytowanego psa policyjnego K9, czy szukasz znaczącego prezentu pamiątkowego GSD, ta ręcznie wykonana replika Amigurumi jest idealnym hołdem。",
    descriptionNl: "Eer de loyaliteit en moed van je beste vriend met een op maat gemaakte German Shepherd Crochet, speciaal voor jou gemaakt! Of je nu een geliefde gezinsbeschermer, gepensioneerde politie-K9 viert of op zoek bent naar een betekenisvol GSD-herdenkingsgeschenk, dit met de hand gemaakte Amigurumi-replica is de perfecte tribut。",
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
    namePt: "Pelúcia de Labrador Retriever Crochê Personalizada, Presente Memorial de Animal de Estimação",
    namePtBR: "Pelúcia de Labrador Retriever Crochê Personalizada, Presente Memorial de Animal de Estimação",
    nameEs: "Peluche de Labrador Retriever Crochet Personalizado, Regalo Conmemorativo de Mascota",
    nameFr: "Peluche Labrador Retriever Crochet Personnalisé, Cadeau Commémoratif pour Animaux",
    nameDe: "Handgehäkeltes Labrador Retriever Stofftier, Persönliches Haustier-Gedenkgeschenk",
    nameIt: "Peluche Labrador Retriever All'uncinetto Personalizzato, Regalo Commemorativo per Animali",
    nameRu: "Вязаная крючком игрушка Лабрадор ретривер, Персонализированный памятный подарок для питомца",
    nameAr: "دمية صوفية من خيوط الكروشيه لكلب لابرادور ريتريفر، هدية تذكارية للحيوانات الأليفة",
    nameHi: "कस्टम क्रोकेट लैब्राडोर रिट्रीवर प्लश, पर्सनलाइज्ड पेट मेमोरियल गिफ्ट",
    nameTh: "ตุ๊กตาขนสังกัด ชูว่าชู ลาบราดอร์ ริทรีฟเวอร์ ตามสั่ง ของที่ระลึกสัตว์เลี้ยง",
    nameVi: "Thú bông Labrador Retriever Crochet Tùy Chỉnh, Quà Tưởng Nhớ Thú Cưng",
    nameId: "Boneka Labrador Retriever Rajutan Kustom, Hadiah Kenangan Hewan Peliharaan",
    nameMs: "Boneka Labrador Retriever Crochet Tersuai, Hadiah Kenangan Haiwan",
    nameTr: "Özel Yapım Tığ İşi Labrador Retriever Oyuncak, Kişiselleştirilmiş Evcil Hayvan Anma Hediyesi",
    namePl: "Pluszowy Labrador Retriever Na Szydełku, Spersonalizowany Prezent Pamiątkowy Dla Zwierzaka",
    nameNl: "Handgemaakte Labrador Retriever Knuffel, Gepersonaliseerd Huisdier Herdenkingsgeschenk",
    description: "Celebrate the unconditional love of your best friend with a Custom Crochet Labrador or Golden Retriever! Whether you have a goofy Black Lab, a loyal Chocolate Lab, or a fluffy Golden Retriever, this handmade Amigurumi replica is crafted to match them perfectly.\n\nI specialize in turning your pet photos into a huggable stuffed animal. I pay close attention to the specific details—from the Golden's feathery tail to the Labrador's smooth coat and otter tail—to create a true \"Mini Me\" version of your dog.",
    descriptionZh: "庆祝您最好朋友无条件的爱，定制的拉布拉多或金毛寻回犬玩偶。无论您有傻乎乎的黑色拉布拉多、忠诚的巧克力色拉布拉多，还是毛茸茸的金毛寻回犬，这款手工编织的玩偶都精心制作，力求完美匹配。",
    descriptionJa: "最良の友人の無条件の愛を祝う、オーダーメードのラブラドールまたはゴールデンレトリーバーぬいぐるみ。面白いブラックラブラドール、忠実なチョコレートラブラドール、またはふわふわのゴールデンレトリーバーに関わらず、この手作りのアミグリュミ レプリカは完璧にマッチします。",
    descriptionKo: "가장 친한 친구의 조건 없는 사랑을 기념하여 맞춤 제작된 라브라도 또는 골든 리트리버 인형을 만나보세요. 재미있는 블랙 라브라도, 충실한 초콜릿 라브라도, 또는 부드러운 골든 리트리버에 관계없이, 이 수제 아미구루미 레플리카가 완벽하게 어울립니다。",
    descriptionPt: "Celebre o amor incondicional do seu melhor amigo com um Labrador ou Golden Retriever Crochê Personalizado! Se você tem um Black Lab engraçado, um Chocolate Lab leal, ou um Golden Retriever fofo, esta réplica de Amigurumi feita à mão é feita para combiná-los perfeitamente。",
    descriptionPtBR: "Celebre o amor incondicional do seu melhor amigo com um Labrador ou Golden Retriever Crochê Personalizado! Se você tem um Black Lab engraçado, um Chocolate Lab leal, ou um Golden Retriever fofo, esta réplica de Amigurumi feita à mão é feita para combiná-los perfeitamente。",
    descriptionEs: "Celebra el amor incondicional de tu mejor amigo con un Labrador o Golden Retriever Crochet Personalizado. Ya tengas un Black Lab tonto, un Chocolate Lab leal, o un Golden Retriever esponjoso, esta réplica de Amigurumi feita a mão é feita para combiná-los perfeitamente。",
    descriptionFr: "Célébrez l'amour inconditionnel de votre meilleur ami avec un Labrador ou Golden Retriever Crochet Personnalisé! Que vous ayez un Black Lab comique, un Chocolate Lab loyal, ou un Golden Retriever fluffy, cette réplique Amigurumi faite à la main est faite pour les combiner parfaitement。",
    descriptionDe: "Feiern Sie die bedingungslose Liebe Ihres besten Freundes mit einem maßgefertigten Labrador oder Golden Retriever-Crochet! Ob Sie einen albernen Black Lab, einen loyalen Chocolate Lab oder einen flauschigen Golden Retriever haben, diese handgemachte Amigurumi-Nachbildung ist so gestaltet, dass sie perfekt zu ihnen passt。",
    descriptionIt: "Celebra l'amore incondizionato del tuo migliore amico con un Labrador o Golden Retriever All'uncinetto Personalizzato! Che tu abbia un Black Lab divertente, un Chocolate Lab leale, o un Golden Retriever soffice, questa replica Amigurumi fatta a mano è realizzata per abbinarli perfettamente。",
    descriptionRu: "Отпразднуйте безусловную любовь вашего лучшего друга с помощью Personalized Labrador или Golden Retriever Crochet! Есть ли у вас смешной Black Lab, верный Chocolate Lab или пушистый Golden Retriever, эта сделанная вручную реплика Amigurumi создана так, чтобы идеально подходить им。",
    descriptionAr: "احتفل بالحب غير المشروط لأفضل صديق لك مع Labrador أو Golden Retriever المُحزَّز المُخصَّص. سواء كان لديك Black Lab مرح، أو Chocolate Lab مخلص، أو Golden Retriever ناعم، فإن نسخة الأميجورومي المصنوعة يدويًا هذه مصنوعة لتتناسب معهم تمامًا。",
    descriptionHi: "अपने सबसे अच्छे दोस्त के बिना शर्त प्यार को कस्टम क्रोकेट लैब्राडोर या गोल्डन रिट्रीवर के साथ मनाएं! चाहे आपके पास एक मजेदार ब्लैक लैब, एक वफादार चॉकलेट लैब, या एक सुंदर गोल्डन रिट्रीवर हो, यह हाथ से बना Amigurumi प्रतिकृति उनके साथ पूरी तरह मेल खाने के लिए बनाई गई है।",
    descriptionTh: "เฉลิมฉลองความรักไม่มีเงื่อนไขของเพื่อนที่ดีที่สุดของคุณด้วยลาบราดอร์หรือโกลเด้นริทรีฟเวอร์ชูว่าชูตามสั่ง! ไม่ว่าคุณจะมี Black Lab ตลก, Chocolate Lab ซื่อสัตย์ หรือ Golden Retriever ขนฟู รีพลิกา Amigurumi ทำมือนี้ทำให้เข้ากันได้อย่างสมบูรณ์แบบ",
    descriptionVi: "Kỷ niệm tình yêu vô điều kiện của người bạn tốt nhất với Labrador hoặc Golden Retriever Crochet Tùy Chỉnh! Dù bạn có Black Lab hài hước, Chocolate Lab trung thành, hay Golden Retriever bông xù, bản sao Amigurumi thủ công này được chế tác để phù hợp hoàn hảo với chúng。",
    descriptionId: "Rayakan cinta tanpa syarat sahabat terbaik Anda dengan Labrador atau Golden Retriever Rajutan Kustom! Baik Anda memiliki Black Lab yang lucu, Chocolate Lab yang setia, atau Golden Retriever yang berbulu halus, replika amigurumi buatan tangan ini dibuat agar sesuai sempurna dengan mereka。",
    descriptionMs: "Rayakan cinta tanpa syarat sahabat terbaik anda dengan Labrador atau Golden Retriever Crochet Tersuai! Sama ada anda memiliki Black Lab yang comel, Chocolate Lab yang setia, atau Golden Retriever yang berbulu, replika amigurumi buatan tangan ini dibuat untuk padanan sempurna dengan mereka。",
    descriptionTr: "En iyi arkadaşınızın koşulsuz sevgisini Custom Labrador veya Golden Retriever Crochet ile kutlayın! Havalı bir Black Lab'ınız, sadık bir Chocolate Lab'ınız veya kabarık bir Golden Retriever'ınız olsun, bu el yapımı Amigurumi kopyası onlarla mükemmel eşleşecek şekilde yapılmıştır。",
    descriptionPl: "Uczcij bezwarunkową miłość swojego najlepszego przyjaciela dzięki Custom Labrador lub Golden Retriever Crochet! Czy masz głupkowatego Black Lab, wiernego Chocolate Lab, czy puszystego Golden Retriever, ta ręcznie wykonana replika Amigurumi jest wykonana, aby pasować do nich idealnie。",
    descriptionNl: "Vi de onvoorwaardelijke liefde van je beste vriend met een op maat gemaakte Labrador of Golden Retriever Crochet! Of je nu een grappige Black Lab, loyale Chocolate Lab of pluizige Golden Retriever hebt, dit met de hand gemaakte Amigurumi-replica is gemaakt om ze perfect te matchen。",
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
    nameJa: "手作りコイルぬいぐるみ, アニメポケモンギフト",
    nameKo: "수제 마그emite 아미구루미 인형, 포켓몬 애니메이션 선물",
    namePt: "Pelúcia de Magnemite Crochê Feita à Mão, Presente de Anime Pokemon",
    namePtBR: "Pelúcia de Magnemite Crochê Feita à Mão, Presente de Anime Pokemon",
    nameEs: "Peluche de Magnemite Crochet Hecho a Mano, Regalo de Anime Pokemon",
    nameFr: "Peluche Magnemite Crochet Fait Main, Cadeau d'Anime Pokemon",
    nameDe: "Handgehäkeltes Magnemite Stofftier, Anime Pokemon Geschenk",
    nameIt: "Peluche Magnemite All'uncinetto Fatto a Mano, Regalo Anime Pokemon",
    nameRu: "Вязаная крючком игрушка Магнемайт, Подарок из аниме Покемон",
    nameAr: "دمية صوفية من خيوط الكروشيه مصنوعة يدويًا لميغنيميت، هدية أنيمي بوكيمون",
    nameHi: "हैंडमेड मैग्नेमाइट क्रोकेट प्लश, एनीमे पोकेमॉन स्टफ्ड एनिमल गिफ्ट",
    nameTh: "ตุ๊กตาขนสังกัด ชูว่าชู แมกนีไมท์ ทำมือ ของขวัญอนิเมะโปเกมอน",
    nameVi: "Thú bông Magnemite Crochet Thủ Công, Quà Đồ Chơi Anime Pokemon",
    nameId: "Boneka Magnemite Rajutan Buatan Tangan, Hadiah Anime Pokemon",
    nameMs: "Boneka Magnemite Crochet Buatan Tangan, Hadiah Anime Pokemon",
    nameTr: "El Yapımı Magnemite Tığ İşi Oyuncak, Anime Pokemon Hediyesi",
    namePl: "Pluszowy Magnemite Na Szydełku Ręcznie Wykonany, Prezent Anime Pokemon",
    nameNl: "Handgemaakte Magnemite Gehaakt Knuffel, Anime Pokemon Geschenk",
    description: "Attract some good vibes with this adorable Magnemite Crochet Plush! Whether you are a classic Gen 1 trainer or looking for the perfect geeky gift for a gamer, this handmade Amigurumi Magnemite is ready to join your team. With its iconic magnets and big singular eye, it makes for a unique desk companion or a standout piece in any anime collection.\n\nHandmade Quality: Tightly crocheted with soft, durable yarn to hold its shape perfectly.\nTrue to Character: I pay close attention to the details—from the gray metallic body to the red and blue tips of its magnets.",
    descriptionZh: "用这只可爱的磁怪钩针玩偶吸引一些好运气！无论您是经典的第一代训练家，还是在为游戏玩家寻找完美的极客礼物，这款手工编织的磁怪玩偶都已准备好加入您的队伍。",
    descriptionJa: "この可愛らしいコイルぬいぐるみで良い雰囲気を呼び込みましょう！クラシックな第1世代トレーナーでも、ゲーマーに最適なレトロなギフトを探している方に、この手作りのア미구루미 コイルはチームに加わる準備ができています。",
    descriptionKo: "이 귀여운 코일 인형으로 좋은 분위기를 불러일으키세요! 클래식한 1세대 트레이너이든, 게이머에게 완벽한 레트로 선물을 찾고 계시든, 이 수제 아미구루미 코일이 팀에 합류할 준비가 되어 있습니다。",
    descriptionPt: "Atraia boas vibrações com esta adorable Pelúcia Magnemite Crochê! Se você é um Treinador Gen 1 clássico ou procurando o presente perfeito para um gamer, esta Magnemite Amigurumi feita à mão está pronta para se juntar à sua equipe. Com seus ímãs icônicos e um grande olho singular, faz um companheiro de mesa único ou uma peça de destaque em qualquer coleção de anime。",
    descriptionPtBR: "Atraia boas vibrações com esta adorable Pelúcia Magnemite Crochê! Se você é um Treinador Gen 1 clássico ou procurando o presente perfeito para um gamer, esta Magnemite Amigurumi feita à mão está pronta para se juntar à sua equipe. Com seus ímãs icônicos e um grande olho singular, faz um companheiro de mesa único ou uma peça de destaque em qualquer coleção de anime。",
    descriptionEs: "¡Atrae buenas vibraciones con esta adorable Pelúcia Magnemite Crochet! Si eres un Entrenador Gen 1 clásico o buscas el regalo perfecto para un gamer, este Magnemite Amigurumi hecho a mano está listo para unirse a tu equipo. Con sus ímãs icónicos y un gran ojo singular, hace un compañero de escritorio único o una pieza destacada en cualquier colección de anime。",
    descriptionFr: "Attirez de bonnes vibrations avec ce adorable Peluche Magnemite Crochet! Que vous soyez un Dresseur Gen 1 classique ou cherchiez le cadeau parfait pour un gamer, ce Magnemite Amigurumi fait à la main est prêt à rejoindre votre équipe. Avec ses aimants emblématiques et son grand œil unique, il fait un compagnon de bureau unique ou une pièce remarquable dans toute collection d'anime。",
    descriptionDe: "Ziehen Sie gute Vibes mit diesem entzückenden Magnemite-Crochet-Plüsch an! Ob Sie ein klassischer Gen 1-Trainer sind oder das perfekte Geschenk für einen Gamer suchen, dieses handgemachte Magnemite-Amigurumi ist bereit, Ihrem Team beizutreten. Mit seinen ikonischen Magneten und einem großen einzelnen Auge ist es ein einzigartiger Tischbegleiter oder ein herausragendes Stück in jeder Anime-Sammlung。",
    descriptionIt: "Attrai buone vibrazioni con questo adorabile Peluche Magnemite All'uncinetto! Che tu sia un Allenatore Gen 1 classico o stia cercando il regalo perfetto per un gamer, questo Magnemite Amigurumi fatto a mano è pronto a unirsi alla tua squadra. Con i suoi iconici magneti e un grande occhio singolo, fa un compagno da scrivania unico o un pezzo distintivo in qualsiasi collezione anime。",
    descriptionRu: "Притяните хорошие вибрации с этим очаровательным плюшевым Magnemite Crochet! Являетесь ли вы классическим тренером поколения 1 или ищете идеальный подарок для геймера, этот сделанный вручную Magnemite Amigurumi готов присоединиться к вашей команде. С его культовыми магнитами и большим единственным глазом, он становится уникальным настольным компаньоном или выдающимся экспонатом в любой коллекции аниме。",
    descriptionAr: "اجذب vibrations جيدة مع هذه الدمية Magnemite المُحزَّزة الرائعة! سواء كنت مدربًا من الجيل الأول كلاسيكيًا أو تبحث عن الهدية المثالية لهواة الألعاب، فإن Magnemite Amigurumi المصنوعة يدويًا هذه جاهزة للانضمام إلى فريقك. مع مغناطيساتها الأيقونية وعينها الكبيرة الفردية، فإنها تشكل رفيق مكتب فريد أو قطعة بارزة في أي مجموعة أنيمي。",
    descriptionHi: "इस प्यारे मैग्नेमाइट क्रोकेट प्लश के साथ अच्छे वाइब्स को आकर्षित करें! चाहे आप एक क्लासिक जेन 1 ट्रेनर हों या एक गेमर के लिए सही उपहार खोज रहे हों, यह हाथ से बना मैग्नेमाइट अमिगुरुमी आपकी टीम में शामिल होने के लिए तैयार है। इसके प्रतिष्ठित चुंबकों और बड़ी एकल आँख के साथ, यह किसी भी एनीमे संग्रह में एक अनूठा डेस्क साथी या एक उत्कृष्ट टुकड़ा बनाता है।",
    descriptionTh: "ดึงดูดบรรยากาศที่ดีด้วยตุ๊กตาขนสังกัด ชูว่าชู แมกนีไมท์ที่น่ารักนี้! ไม่ว่าคุณจะเป็นผู้ฝึก Gen 1 แบบคลาสสิกหรือมองหาของขวัญที่เหมาะสำหรับเกมเมอร์ แมกนีไมท์ Amigurumi ทำมือนี้พร้อมเข้าร่วมทีมของคุณ ด้วยแม่เหล็กไอคอนิกและตาใหญ่เดี่ยว ทำให้เป็นเพื่อนบนโต๊ะที่เป็นเอกลักษณ์หรือชิ้นส่วนโดดเด่นในคอลเลกชันอนิเมะใดก็ตาม",
    descriptionVi: "Thu hút những năng lượng tích cực với thú bông Magnemite Crochet dễ thương này! Dù bạn là Huấn luyện viên Gen 1 cổ điển hay đang tìm kiếm món quà hoàn hảo cho game thủ, Amigurumi Magnemite thủ công này đã sẵn sàng gia nhập đội của bạn. Với nam châm đặc trưng và con mắt đơn lớn, nó làm cho một người bạn bàn độc đáo hoặc một món nổi bật trong bất kỳ bộ sưu tập anime nào。",
    descriptionId: "Tarik getaran baik dengan boneka Magnemite Rajutan yang menggemaskan ini! Baik Anda seorang Pelatih Gen 1 klasik atau mencari hadiah sempurna untuk gamers, Magnemite Amigurumi buatan tangan ini siap bergabung dengan tim Anda. Dengan magnet ikonik dan mata besar tunggal, ini membuat teman meja yang unik atau potongan yang menonjol di koleksi anime apa pun。",
    descriptionMs: "Tarik getaran baik dengan boneka Magnemite Crochet yang comel ini! Sama ada anda seorang Jurulatih Gen 1 klasik atau mencari hadiah sempurna untuk gamers, Magnemite Amigurumi buatan tangan ini siap menyertai pasukan anda. Dengan magnet ikonik dan mata besar tunggal, ia menjadikan teman meja yang unik atau potongan yang menonjol dalam mana-mana koleksi anime。",
    descriptionTr: "Bu sevimli Magnemite Crochet peluş ile iyi titreşimler çekin! Klasik bir 1. Nesil eğitmeni olun veya bir oyuncu için mükemmel bir hediye arıyor olun, bu el yapımı Magnemite Amigurumi takımınıza katılmaya hazır. İkonik mıknatısları ve büyük tek gözü ile herhangi bir anime koleksiyonunda benzersiz bir masa arkadaşı veya göze çarpan bir parça yapar。",
    descriptionPl: "Przyciągnij dobre wibracje z tym uroczym Pluszowym Magnemite Crochet! Czy jesteś klasycznym trenerem Gen 1, czy szukasz prezentu idealnego dla gracza, ten ręcznie wykonany Magnemite Amigurumi jest gotowy do dołączenia do Twojej drużyny. Z ikonicznymi magnesami i dużym pojedynczym okiem, tworzy unikalnego towarzysza biurkowego lub wyróżniający się element w każdej kolekcji anime。",
    descriptionNl: "Trekt goede vibraties aan met dit schattige Magnemite Crochet Knuffel! Of je nu een klassieke Gen 1-trainer bent of op zoek bent naar het perfecte cadeau voor een gamer, deze handgemaakte Magnemite Amigurumi is klaar om bij je team te komen. Met zijn iconische magneten en grote enkele oog, maakt het een unieke bureaumat of een opvallend stuk in elke anime-verzameling。",
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
