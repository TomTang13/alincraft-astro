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
  },

  // Product 12: Little Prince Doll
  {
    id: 12,
    name: "Handmade Crochet The Little Prince Doll, Custom Amigurumi Plush, Crochet Character Figure",
    nameZh: "手工编织小王子玩偶, 定制 amigurumi 毛绒, 钩针角色人偶",
    nameJa: "手編みリトルプリンス人形, カスタムアミグリュミぬいぐるみ, 钩针キャラクター人形",
    nameKo: "수제 아미구루미 리틀 프린스 인형, 커스텀 인형, 커스텀 피규어",
    namePt: "Boneco O Pequeno Príncipe Crochê Feito à Mão, Amigurumi Personalizado, Figura de Personagem",
    namePtBR: "Boneco O Pequeno Príncipe Crochê Feito à Mão, Amigurumi Personalizado, Figura de Personagem",
    nameEs: "Muñeco El Principito Ganchillo Hecho a Mano, Amigurumi Personalizado, Figura de Personaje",
    nameFr: "Poupée Le Petit Prince Crochetée Main, Amigurumi Personnalisé, Figurine de Personnage",
    nameDe: "Handgehäkelte Der Kleine Prinz Puppe, Amigurumi Maßanfertigung, Figur",
    nameIt: "Bambola Il Piccolo Principe All'uncinetto Fatta a Mano, Amigurumi Personalizzato",
    nameRu: "Вязаная Кукла Маленький Принц, Амигуруми Ручной Работы, Персонаж",
    nameAr: "دمية الأمير الصغير المُحزَزة يدويًا، أميجورومي مُخصَّص، شخصية",
    nameHi: "हाथ से बना क्रोकेट द लिटिल प्रिंस डॉल, कस्टम अमिगुरुमी प्लश, क्रोकेट कैरेक्टर फिगर",
    nameTh: "ตุ๊กตาหนุ่มน้อยเจ้าชายดาว ทำมือ, อมิกุรุมิตามสั่ง, ตุ๊กตาตัวละคร",
    nameVi: "Búp bế Hoàng Tử Bé Thủ Công, Amigurumi Theo Yêu Cầu, Mô Hình Nhân Vật",
    nameId: "Boneka Pangeran Kecil Rajutan Buatan Tangan, Amigurumi Kustom, Figur Karakter",
    nameMs: "Boneka Putera Kecil Rajutan Buatan Tangan, Amigurumi Tersuai, Watak",
    nameTr: "El Yapımı Örgü Küçük Prens Bebek, Özel Amigurumi Oyuncak, Karakter Figürü",
    namePl: "Lalka Mały Książę Na Szydełku, Amigurumi Na Zamówienie, Figurka Postaci",
    nameNl: "Handgemaakte Haakde Kleine Prins Pop, Amigurumi Op Maat, Karakter Figuur",
    description: "This handmade crochet Little Prince doll can be customized to your preferences, including clothing colors, small details, and overall styling. Carefully crafted by hand with soft, high-quality yarn, this amigurumi figure is inspired by the gentle and timeless character from the classic story.\n\nThe doll features a delicate expression, balanced proportions, and a neat crochet texture, making it perfect for display as a collectible figure, a decorative piece, or a lovely gift for fans of handmade crafts.\n\nSize\nApproximately 20-25 cm (8-10 inches) tall\n(Size may vary slightly due to the handmade nature)\n\nPlease note: The doll is sold without a glass dome, so you can display it however you like!",
    descriptionZh: "这款手工钩针小王子玩偶可根据您的喜好定制，包括服装颜色、细节和整体造型。采用柔软的高品质毛线手工精心制作，这款 amigurumi 玩偶的灵感来自经典故事中温柔而永恒的角色。\n\n玩偶具有精致的表情、均衡的比例和整洁的钩针纹理，非常适合作为收藏品、装饰品展示，或作为送给手工爱好者们的可爱礼物。\n\n尺寸\n高度约 20-25 厘米（8-10 英寸）\n（由于手工制作，尺寸可能略有不同）\n\n请注意：玩偶不包含玻璃罩，您可以自行决定展示方式！",
    descriptionJa: "この手編みのリトルプリンス人形は、服の色、小さい細部、全体のスタイルなど、お客様のご希望に合わせてカスタマイズできます。柔らかく高品質の糸で丁寧に作られたこのアミグリュミ人形は、優しく永遠のキャラクター、インスピレーションを得ています。\n\n人形は繊細な表情、バランスの取れた割合、整洁な钩针纹理を持ち、コレクティブル人形、装飾品、または手作りクラフトのファンへの可愛いギフトとして最適です。\n\nサイズ\n約 20-25 cm (8-10 インチ) の高さ\n(手作りのため、サイズは多少異なる場合があります)\n\n注意事項: 人形はガラスドームなしで販売ですので、どのように展示するかはお客様次第です！",
    descriptionKo: "이 수제 뜨개질 리틀 프린스 인형은 의상 색상, 세부 사항, 전반적인 스타일을 포함하여 귀하의 선호도에 따라 맞춤 제작할 수 있습니다. 부드럽고 고품질의 실로 세심하게 수제로 제작된 이 아미구루미 인형은 온화하고 영원한 캐릭터에서 영감을 받았습니다.\n\n인형은 섬세한 표현, 균형 잡힌 비율, 깔끔한 뜨개질 질감을 갖추고 있어 컬렉터블 인형, 장식용으로 완벽하며 수제 공예 팬들에게可爱的 선물입니다.\n\n크기\n약 20-25cm (8-10인치) 높이\n(수제로 제작 특성상 크기가 약간 다를 수 있습니다)\n\n참고사항: 인형은 글래스 돔 없이 판매되므로 원하는 방식으로 전시할 수 있습니다!",
    descriptionPt: "Esta boneca The Little Prince crochê feita à mão pode ser personalizada de acordo com suas preferências, incluindo cores de roupas, pequenos detalhes e estilo geral. Feito à mão com cuidado com fios macios e de alta qualidade, esta figura amigurumi é inspirada no personagem gentil e atemporal da história clássica.\n\nA boneca apresenta uma expressão delicada, proporções equilibradas e uma textura de crochê limpa, tornando-a perfeita para exibição como figura de coleção, peça decorativa ou presente encantador para fãs de artesanato feito à mão.\n\nTamanho\nAproximadamente 20-25 cm de altura\n(O tamanho pode variar ligeiramente devido à natureza artesanal)\n\nPor favor, note: A boneca é vendida sem cúpula de vidro, então você pode exibi-la como quiser!",
    descriptionEs: "Esta muñeca El Principito crochetada a mano puede personalizarse según sus preferencias, incluyendo colores de ropa, pequeños detalles y estilo general. Elaborada a mano con cuidado con hilo suave y de alta calidad, esta figura amigurumi está inspirada en el personaje tierno y atemporal de la historia clásica.\n\nLa muñeca presenta una expresión delicada, proporciones equilibradas y una textura de crochê ordenada, haciéndola perfecta para exhibirla como figura de colección, pieza decorativa o regalo encantador para los fãs de manualidades hechas a mano.\n\nTamaño\nAproximadamente 20-25 cm de alto\n(El tamaño puede variar ligeramente debido a la naturaleza artesanal)\n\nTenga en cuenta: La muñeca se vende sin cúpula de vidrio, ¡así que puede exhibirla como desee!",
    descriptionFr: "Cette poupée Le Petit Prince crocheted à la main peut être personnalisée selon vos préférences, y compris les couleurs des vêtements, les petits détails et le style général. Fait à la main avec soin avec un fil doux et de haute qualité, cette figure amigurumi est inspirée du personnage doux et intemporel de l'histoire classique.\n\nLa poupée présente une expression délicate, des proportions équilibrées et une texture de crochet soignée, la rendant parfaite pour l'affichage comme figure de collection, pièce décorative ou cadeau charmant pour les amateurs d'artisanat fait à la main.\n\nTaille\nEnviron 20-25 cm de haut\n(La taille peut varier légèrement en raison de la nature artisanale)\n\nVeuillez noter: La poupée est vendue sans dome en verre, donc vous pouvez l'exposer comme vous le souhaitez!",
    descriptionDe: "Diese handgehäkelte Der Kleine Prinz Puppe kann nach Ihren Wünschen personalisiert werden, einschließlich Kleiderfarben, kleinen Details und Gesamtstyling. Sorgfältig von Hand mit weichem, hochwertigem Garn gefertigt, ist diese Amigurumi-Figur vom sanften und zeitlosen Charakter der klassischen Geschichte inspiriert.\n\nDie Puppe zeichnet sich durch einen sanften Ausdruck, proportionierte Körper und eine ordentliche Häkeltextur aus, was sie perfekt als Sammlerfigur, Dekorationsstück oder entzückendes Geschenk für Fans von Handarbeiten macht.\n\nGröße\nUngefähr 20-25 cm hoch\n(Die Größe kann aufgrund der handgefertigten Natur leicht variieren)\n\nBitte beachten Sie: Die Puppe wird ohne Glaskuppel verkauft, sodass Sie sie nach Belieben ausstellen können!",
    descriptionIt: "Questa bambola Il Piccolo Principe all'uncinetto può essere personalizzata secondo le tue preferenze, inclusi i colori dei vestiti, i piccoli dettagli e lo stile generale. Realizzata a mano con cura con filati morbidi e di alta qualità, questa figura amigurumi è ispirata al personaggio gentile e senza tempo della storia classica.\n\nLa bambola presenta un'espressione delicata, proporzioni equilibrate e una texture di uncinetto ordinata, rendendola perfetta per l'esposizione come figura da collezione, pezzo decorativo o regalo incantevole per gli appassionati di artigianato fatto a mano.\n\nDimensioni\nCirca 20-25 cm di altezza\n(La dimensione può variare leggermente a causa della natura artigianale)\n\nSi prega di notare: La bambola viene venduta senza cupola di vetro, quindi puoi esporla come preferisci!",
    descriptionRu: "Эта связанная вручную кукла Маленький Принц может быть персонализирована по вашим предпочтениям, включая цвета одежды, мелкие детали и общий стиль. Тщательно связанная вручную из мягкой высококачественной пряжи, эта фигурка амигуруми вдохновлена нежным и вневременным персонажем из классической истории.\n\nКукла имеет нежное выражение, сбалансированные пропорции и аккуратную вязаную текстуру, что делает её идеальной для демонстрации как коллекционная фигурка, декоративный элемент или очаровательный подарок для поклонников рукоделия.\n\nРазмер\nПриблизительно 20-25 см в высоту\n(Размер может незначительно отличаться из-за ручной работы)\n\nОбратите внимание: Кукла продается без стеклянного купола, так что вы можете выставить её как угодно!",
    descriptionAr: "يمكن تخصيص هذه الدمى الأمير الصغير المُحزَزة يدويًا وفقًا لتفضيلاتك، بما في ذلك ألوان الملابس والتفاصيل الصغيرة والأسلوب العام. صُنعت بعناية يدويًا باستخدام خيوط ناعمة وعالية الجودة، مستوحاة من الشخصية اللطيفة والخالدة من القصة الكلاسيكية.\n\nتتميز الدمى بتعبير رقيق ونسب متوازنة ونسيج كروشيه مرتب، مما يجعلها مثالية للعرض كشكل قابل للتجميع أو قطعة ديكور أو هدية رائعة لمحبي الحرف اليدوية.\n\nالحجم\nحوالي 20-25 سم ارتفاع\n(قد يختلف الحجم قليلاً بسبب الطبيعة اليدوية)\n\nيرجى ملاحظة: تُباع الدمى بدون قبة زجاجية، لذا يمكنك عرضها كما تشاء!",
    descriptionHi: "यह हाथ से बना क्रोकेट लिटिल प्रिंस डॉल आपकी पसंद के अनुसार कस्टमाइज़ किया जा सकता है, जिसमें कपड़ों के रंग, छोटे विवरण और समग्र स्टाइलिंग शामिल हैं। मुलायम, उच्च गुणवत्ता वाले धागे से सावधानी से हाथ से बनाया गया, यह अमिगुरुमी फिगर क्लासिक कहानी के कोमल और कालातीत चरित्र से प्रेरित है।\n\nडॉल में एक कोमल भाव, संतुलित अनुपात और साफ क्रोकेट टेक्सचर है, जो इसे एक संग्रहणीय आकृति, सजावटी टुकड़े या हाथ से बने शिल्प के प्रशंसकों के लिए एक प्यारा उपहार के रूप में प्रदर्शन के लिए आदर्श बनाता है।\n\nआकार\nलगभग 20-25 सेमी (8-10 इंच) ऊंचाई\n(हाथ से बने स्वरूप के कारण आकार थोड़ा भिन्न हो सकता है)\n\nकृपया ध्यान दें: डॉल बिना ग्लास डोम के बेचा जाता है, इसलिए आप इसे जैसे चाहें प्रदर्शित कर सकते हैं!",
    descriptionTh: "ตุ๊กตาหนุ่มน้อยเจ้าชายดาวทำมือนี้สามารถปรับแต่งตามความชอบของคุณได้ รวมถึงสีเสื้อผ้า รายละเอียดเล็กๆ และสไตล์โดยรวม ถูกประดิษฐ์อย่างพิถีพิถันด้วยมือด้วยด้ายนุ่มมือคุณภาพสูง ตุ๊กตาอมิกุรุมินี้ได้รับแรงบันดาลใจจากตัวละครที่อ่อนโยนและไม่มีวันตายจากเรื่องราวคลาสสิก\n\nตุ๊กตามีใบหน้าที่ละเอียดอ่อน สัดส่วนที่สมดุล และเนื้อผ้าถักที่เรียบร้อย ทำให้เหมาะสำหรับแสดงเป็นตุ๊กตาสะสม ชิ้นส่วนตกแต่ง หรือของขวัญที่น่ารักสำหรับแฟนงานหัตถกรรมทำมือ\n\nขนาด\nสูงประมาณ 20-25 ซม. (8-10 นิ้ว)\n(ขนาดอาจแตกต่างเล็กน้อยเนื่องจากเป็นงานมือ)\n\nโปรดทราบ: ตุ๊กตาขายโดยไม่มีโดมแก้ว คุณจึงแสดงได้ตามที่ต้องการ!",
    descriptionVi: "Búp bê Hoàng Tử Bé đan tay này có thể được tùy chỉnh theo sở thích của bạn, bao gồm màu quần áo, chi tiết nhỏ và phong cách tổng thể. Được làm thủ công cẩn thận bằng len mềm chất lượng cao, búp bê amigurumi này được lấy cảm hứng từ nhân vật dịu dàng và vượt thời gian từ câu chuyện kinh điển.\n\nBúp bê có biểu cảm tinh tế, tỷ lệ cân đối và kết đan gọn gàng, khiến nó hoàn hảo để trưng bày như một bộ sưu tập, vật trang trí hoặc món quà dễ thương cho những người đam mê thủ công mỹ nghệ.\n\nKích thước\nCao khoảng 20-25 cm (8-10 inch)\n(Kích thước có thể hơi khác do làm thủ công)\n\nXin lưu ý: Búp bê được bán không có bình thủy tinh, nên bạn có thể trưng bày theo cách bạn muốn!",
    descriptionId: "Boneka Pangeran Kecil rajutan buatan tangan ini dapat disesuaikan sesuai preferensi Anda, termasuk warna pakaian, detail kecil, dan gaya keseluruhan. Dibuat dengan hati-hati dengan benang lembut berkualitas tinggi, figur amigurumi ini terinspirasi dari karakter yang lembut dan abadi dari cerita klasik.\n\nBoneka memiliki ekspresi halus, proporsi seimbang, dan tekstur rajutan yang rapi, menjadikannya sempurna untuk pajangan sebagai figur koleksi, piece dekoratif, atau hadiah lovely untuk penggemar kerajinan tangan.\n\nUkuran\nTinggi sekitar 20-25 cm\n(Ukuran dapat bervariasi sedikit karena sifat buatan tangan)\n\nHarap dicatat: Boneka dijual tanpa kubah kaca, jadi Anda dapat memajangnya sesuka hati!",
    descriptionMs: "Boneka Putera Kecil rajutan buatan tangan ini boleh disesuaikan mengikut pilihan anda, termasuk warna pakaian, butiran kecil dan gaya keseluruhan. Dibuat dengan teliti dengan benang lembut berkualiti tinggi, figur amigurumi ini diilhamkan oleh watak yang lembut dan abadi dari cerita klasik.\n\nBoneka menampilkan ekspresi halus, perkadaran seimbang dan tekstur rajutan yang kemas, menjadikannya sempurna untuk paparan sebagai figur koleksi, hiasan atau hadiah comel untuk peminat kraf tangan.\n\nSaiz\nTinggi kira-kira 20-25 cm\n(Saiz mungkin berbeza sedikit kerana sifat buatan tangan)\n\nSila maklum: Boneka dijual tanpa kubah kaca, jadi anda boleh memaparkannya bagaimana yang anda suka!",
    descriptionTr: "Bu el yapımı örgü Küçük Prens bebeğiniz, kıyafet renkleri, küçük detaylar ve genel stil dahil tercihlerinize göre özelleştirilebilir. Yumuşak, yüksek kaliteli iplikle özenle el yapımı olan bu amigurumi figür, klasik hikayenin nazik ve zamansız karakterinden ilham almıştır.\n\nBebek, nazik bir ifade, dengeli oranlar ve düzenli bir örgü dokusuna sahiptir, bu da onu bir koleksiyon figürü, dekoratif bir parça veya el yapımı işlerin hayranları için güzel bir hediye olarak sergilemek için mükemmel kılar.\n\nBoyut\nYaklaşık 20-25 cm yüksekliğinde\n(Boyut, el yapımı doğası nedeniyle biraz farklılık gösterebilir)\n\nLütfen dikkat: Bebek cam kubbe olmadan satılmaktadır, bu nedenle istediğiniz gibi sergileyebilirsiniz!",
    descriptionPl: "Ta lalka Mały Książę na szydełku może być spersonalizowana zgodnie z Twoimi preferencjami, w tym kolory ubrań, drobne detale i ogólny styl. Wykonana ręcznie z miękkiej, wysokiej jakości przędzy, ta figurka amigurumi jest inspirowana łagodną i ponadczasową postacią z klasycznej historii.\n\nLalka ma delikatny wyraz, zrównoważone proporcje i schludną szydełkową teksturę, co czyni ją idealną do wystawiania jako figurka kolekcjonerska, element dekoracyjny lub uroczy prezent dla fanów rękodzieła.\n\nRozmiar\nWysokość około 20-25 cm\n(Rozmiar może nieznacznie różnić się ze względu na ręczne wykonanie)\n\nNależy pamiętać: Lalka jest sprzedawana bez szklanej kopuły, więc możesz ją wystawić według własnego uznania!",
    descriptionNl: "Deze handgemaakte Haakde Kleine Prins pop kan worden aangepast aan uw voorkeuren, inclusief kledingkleuren, kleine details en algemene stijl. Zorgvuldig met de hand gemaakt van zachte, hoogwaardige garen, is deze amigurumi figuur geïnspireerd door het zachte en tijdloze karakter uit het klassieke verhaal.\n\nDe pop heeft een delicate uitdrukking, evenredige verhoudingen en een nette haaktextuur, waardoor hij perfect is voor display als verzamelfiguur, decoratief stuk of schattig cadeau voor fans van handgemaakte ambachtelijke producten.\n\nAfmeting\nOngeveer 20-25 cm hoog\n(De grootte kan licht variëren door de handgemaakte aard)\n\nLet op: De pop wordt verkocht zonder glazen koepel, dus u kunt hem naar eigen wens tentoonstellen!",
    price: 99,
    currency: "USD",
    category: "Characters",
    image: "/images/products/p12_1.jpg",
    images: ["/images/products/p12_1.jpg", "/images/products/p12_2.jpg", "/images/products/p12_3.jpg", "/images/products/p12_4.jpg", "/images/products/p12_5.jpg"],
    features: {
      en: [
        "Handmade with Love: Each piece crocheted individually with soft, premium yarn",
        "Customizable: Choose clothing colors and details to match your vision",
        "Perfect Size: Approximately 20-25cm tall, ideal for display",
        "Meaningful Gift: Perfect for book lovers, The Little Prince fans, or collectors"
      ],
      zh: [
        "手工制作：每件作品都用柔软的高级毛线单独钩针",
        "可定制：选择服装颜色和细节以匹配您的设想",
        "完美尺寸：约 20-25cm 高，适合展示",
        "有意义的礼物：非常适合书籍爱好者、小王子粉丝或收藏家"
      ]
    },
    howToOrder: {
      en: [
        "Add this listing to your cart",
        "Message me with your customization preferences (color, accessories, etc.)",
        "I'll craft your unique Little Prince companion"
      ],
      zh: [
        "将此商品加入购物车",
        "请告诉我您的定制偏好（颜色、配饰等）",
        "我将为您制作独特的小王子伴侣"
      ]
    }
  },
  // Product 13: Frog Plush with Banana Float
  {
    id: 13,
    name: "Handmade Crochet Frog Plush, Custom Beach Amigurumi Doll with Banana Float",
    nameZh: "手工编织青蛙玩偶, 定制海滩 amigurumi 香蕉救生圈",
    nameJa: "手編みカエルぬいぐるみ, カスタムビーチアミグリュミ バナナの浮き輪",
    nameKo: "수제 아미구루미 개구리 인형, 커스텀 비치 바나나 보트",
    namePt: "Boneca Sapo Crochê Feito à Mão, Amigurumi Praia Personalizado com Boia de Banana",
    namePtBR: "Boneca Sapo Crochê Feito à Mão, Amigurumi Praia Personalizado com Boia de Banana",
    nameEs: "Muñeca Rana Ganchillo Hecho a Mano, Amigurumi Playa Personalizado con Flotador de Plátano",
    nameFr: "Poupée Grenouille Crochetée Main, Amigurumi Plage Personnalisée avec Flotteur Banane",
    nameDe: "Handgehäkelter Frosch Stofftier, Strand Amigurumi Maßanfertigung mit Bananen-Schwimmring",
    nameIt: "Rana Peluche All'uncinetto Fatta a Mano, Amigurumi Spiaggia Personalizzato con Ciambella Banana",
    nameRu: "Вязаная Лягушка Плюшевая Игрушка, Амигуруми Пляж Персонализированный с Банановым Поплавком",
    nameAr: "دمية ضفدع مُحزَزة يدويًا، أميجورومي شاطئ مُخصَّص مع طوافة موز",
    nameHi: "हाथ से बना क्रोकेट मेंढक प्लश, कस्टम बीच अमिगुरुमी डॉल विद बनाना फ्लोट",
    nameTh: "ตุ๊กตากบทำมือ, อมิกุรุมิชายหาดตามสั่งพร้อมแบนาน่าลอยน้ำ",
    nameVi: "Búp bê Ếch Thủ Công, Amigurumi Biển Tùy Chỉnh với Phao Chuối",
    nameId: "Boneka Katak Rajutan Buatan Tangan, Amigurumi Pantai Kustom dengan Pelampung Pisang",
    nameMs: "Boneka Katak Rajutan Buatan Tangan, Amigurumi Pantai Tersuai dengan Pelampung Pisang",
    nameTr: "El Yapımı Örgü Kurbağa Oyuncak, Özel Plaj Amigurumi Oyuncak Muz Salıncak",
    namePl: "Ręcznie Zrobiona Pluszowa Żaba, Amigurumi Plażowe Na Zamówienie z Bananowym Pływakiem",
    nameNl: "Handgemaakte Haakde Kikker Knuffel, Amigurumi Strand Op Maat met Bananenvlot",
    description: "This handmade crochet frog can be customized based on your preferences, including clothing colors, swim ring style, and small accessory details. Designed as a relaxed beach character, it's full of playful details and personality. Carefully crocheted with soft yarn, the frog features a green body, a woven hat, purple shorts, a banana float, and a small drink accessory. Every element is stitched by hand, making each piece slightly unique.\n\nThis item works well as a collectible crochet figure, shelf decoration, or a cozy companion for frog and amigurumi lovers. Its expressive eyes and relaxed pose create a calm, joyful beach vibe that stands out from standard plush toys.\n\nEach piece is made in small batches with close attention to texture, color balance, and durability.",
    descriptionZh: "这款手工钩针青蛙可以根据您的喜好定制，包括服装颜色、救生圈款式和小配饰细节。作为一个轻松的海滩角色，它充满了俏皮的细节和个性。青蛙采用柔软毛线精心钩针编织，具有绿色身体、编织帽、紫色短裤、香蕉救生圈和小饮料配饰。每个元素都是手工缝制的，使每件作品都略有独特。\n\n这件作品非常适合作为收藏钩针玩偶、书架装饰，或送给青蛙和 amigurumi 爱好者的温馨伴侣。它富有表现力的眼睛和放松的姿态营造出平静、快乐的海滩氛围，与标准毛绒玩具截然不同。\n\n每件作品都是小批量制作的，密切关注质感、色彩平衡和耐用性。",
    descriptionJa: "この手編みのカエルは、衣服の色、浮き輪スタイル、小物の詳細など、お客様のご希望に合わせてカスタマイズできます。のリラックスしたビーチキャラクターとして、遊び心のある詳細と個性に満ちています。柔らかく高档な糸で丁寧に編み込まれたカエルは緑の体、編み物帽子、紫色の短裤、バナナの浮き輪、小さなドリンクアクセサリーを特徴としています。すべての要素は手縫いされており、各作品がわずかにユニークになります。\n\nこの作品は、コレクティブル钩针人形、棚の装飾、またはカエルとアミグリュミ愛好家向けの快適なコンパニオンとして適しています。表現力豊かな目とリラックスしたポーズは、標準的なぬいぐるみとは異なる静かで楽しいビーチバイブを作り出します。\n\n各作品は小ロットで制作され、質感、色彩のバランス、耐久性に細心の注意を払っています。",
    descriptionKo: "이 수제 뜨개질 개구리는 의상 색상, 물놀이 스타일, 작은 액세서리 세부 사항을 포함하여 귀하의 선호도에 따라 맞춤 제작할 수 있습니다. 편안한 비치 캐릭터로 디자인되어 장난기 넘치는 세부 사항과 개성을 담고 있습니다. 부드러운 실로 세심하게 뜨개질된 개구리는 녹색 몸체, 직조 모자, 보라색 반바지, 바나나 보트, 작은 음료 액세서리를 갖추고 있습니다. 모든 요소가 수동으로 봉제되어 각 작품이 약간씩 독특합니다.\n\n이 아이템은 수집용 뜨개질 인형, 선반 장식 또는 개구리와 아미구루미 애호가를 위한 편안한 동료로 잘 어울립니다. 표현력 있는 눈과 편안한 포즈는 표준 플러시 토이들과 구별되는 차분하고 기쁜 비치 분위기를 조성합니다.\n\n각 작품은 질감, 색상 균형, 내구성에 각별한 주의를 기울여 소량 생산됩니다.",
    descriptionPt: "Este sapo crochê feito à mão pode ser personalizado de acordo com suas preferências, incluindo cores de roupas, estilo de boia e detalhes de pequenos acessórios. Projetado como um personagem relaxado de praia, está cheio de detalhes brincalhões e personalidade. Crochê com cuidado com fio macio, o sapo apresenta um corpo verde, um chapéu tecido, shorts roxos, uma boia de banana e um pequeno acessório para beber. Cada elemento é costurado à mão, tornando cada peça levemente única.\n\nEste item funciona bem como uma figura de crochet de coleção, decoração de prateleira ou companheiro aconchegante para fãs de sapos e amigurumi. Seus olhos expressivos e pose relaxada criam uma vibração de praia calma e alegre que se destaca dos brinquedos de pelúcia padrão.\n\nCada peça é feita em pequenas quantidades com muita atenção à textura, equilíbrio de cores e durabilidade.",
    descriptionEs: "Esta rana crochetada a mano puede personalizarse según sus preferencias, incluyendo colores de ropa, estilo de flotador y detalles de pequeños accesorios. Diseñado como un personaje relajado de playa, está lleno de detalles juguetones y personalidad. Crochetado con cuidado con hilo suave, la rana presenta un cuerpo verde, un sombrero tejido, shorts morados, un flotador de plátano y un pequeño accesorio para beber. Cada elemento se cose a mano, lo que hace que cada pieza sea ligeramente única.\n\nEste artículo funciona bien como figura de crochet de colección, decoración de estante o compañero cómodo para amantes de ranas y amigurumi. Sus ojos expresivos y su pose relajada crean un ambiente de playa tranquilo y alegre que destaca de los juguetes de peluche estándar.\n\nCada pieza se fabrica en pequeñas cantidades con gran atención a la textura, equilibrio de colores y durabilidad.",
    descriptionFr: "Cette grenouille crocheted à la main peut être personnalisée selon vos préférences, y compris les couleurs de vêtements, le style de flotteur et les détails des petits accessoires. Conçu comme un personnage décontracté de plage, il est plein de détails ludiques et de personnalité. Crocheté avec soin avec un fil doux, la grenouille présente un corps vert, un chapeau tissé, des short violets, un flotteur banane et un petit accessoire à boire. Chaque élément est cousu à la main, rendant chaque pièce légèrement unique.\n\nCet article fonctionne bien comme figure de crochet de collection, décoration d'étagère ou compagnon confortable pour les amoureux des grenouilles et amigurumi. Ses yeux expressifs et sa pose détendue créent une atmosphère de plage calme et joyeuse qui se distingue des jouets en peluche standard.\n\nChaque pièce est fabriqués en petites quantités avec une attention particulière à la texture, l'équilibre des couleurs et la durabilité.",
    descriptionDe: "Dieser handgehäutete Frosch kann nach Ihren Wünschen personalisiert werden, einschließlich Kleiderfarben, Schwimmring-Stil und kleinen Accessoire-Details. Als entspannter Strandcharakter konzipiert, steckt er voller verspielter Details und Persönlichkeit. Sorgfältig mit weichem Garn gehäkelt, zeichnet sich der Frosch durch einen grünen Körper, einen gewebten Hut, lila Shorts, einen Bananen-Schwimmring und ein kleines Getränke-Accessoire aus. Jedes Element wird von Hand genäht, was jedes Stück einzigartig macht.\n\nDieser Artikel eignet sich hervorragend als Sammler-Häkelfigur, Regal-Dekoration oder gemütlicher Begleiter für Frosch- und Amigurumi-Liebhaber. Seine ausdrucksvollen Augen und entspannte Haltung schaffen eine ruhige, fröhliche Strandatmosphäre, die sich von Standard-Plüschtieren abhebt.\n\nJedes Stück wird in kleinen Chargen mit besonderer Aufmerksamkeit auf Textur, Farbbalance und Haltbarkeit hergestellt.",
    descriptionIt: "Questa rana all'uncinetto può essere personalizzata secondo le tue preferenze, inclusi i colori dei vestiti, lo stile del galleggiante e i dettagli dei piccoli accessori. Progettato come un personaggio rilassato da spiaggia, è pieno di dettagli giocosi e personalità. Realizzata all'uncinetto con cura con filato morbido, la rana presenta un corpo verde, un cappello intrecciato, shorts viola, un galleggiante banana e un piccolo accessorio per bevande. Ogni elemento viene cucito a mano, rendendo ogni pezzo leggermente unico.\n\nQuesto articolo funziona bene come figura da collezione all'uncinetto, decorazione per scaffale o compagno accogliente per gli amanti delle rane e degli amigurumi. I suoi occhi espressivi e la posa rilassata creano un'atmosfera da spiaggia calma e gioiosa che si distingue dai giocattoli di peluche standard.\n\nOgni pezzo è realizzato in piccoli lotti con particolare attenzione alla texture, all'equilibrio dei colori e alla durata.",
    descriptionRu: "Эта связанная вручную лягушка может быть персонализирована по вашим предпочтениям, включая цвета одежды, стиль поплавка и мелкие детали аксессуаров. Созданный как расслабленный пляжный персонаж, он полон игривых деталей и индивидуальности. Связанная крючком с заботой из мягкой пряжи, лягушка имеет зелёное тело, плетёную шляпу, фиолетовые шорты, банановый поплавок и маленький аксессуар для напитка. Каждый элемент сшит вручную, что делает каждую работу немного уникальной.\n\nЭта работа хорошо подходит как коллекционная вязаная фигурка, украшение для полки или уютный компаньон для любителей лягушек и амигуруми. Его выразительные глаза и расслабленная поза создают спокойную, радостную пляжную атмосферу, которая выделяется среди стандартных плюшевых игрушек.\n\nКаждая работа выполняется небольшими партиями с особой тщательностью к текстуре, цветовому балансу и долговечности.",
    descriptionAr: "يمكن تخصيص هذه الضفدع المُحزَزة يدويًا وفقًا لتفضيلاتك، بما في ذلك ألوان الملابس ونمط الطوافة وتفاصيل الملحقات الصغيرة. مصمم كشخصية شاطئية متسريحة، إنه مليء بالتفاصيل المرحة والشخصية. مُحزَز بعناية باستخدام خيوط ناعمة، يتميز الضفدع بجسم أخضر، وقبعة منسوجة، وشورتات أرجوانية، وطوافة موز، وملحق مشروب صغير. كل عنصر يُخيط يدويًا، مما يجعل كل قطعة فريدة قليلاً.\n\nهذه القطعة تعمل بشكل جيد كشكل قابل للتجميع من الكروشيه، أو ديكور رف، أو رفيق مريح لعشاق الضفادع والأميجورومي. تخلق عيناه التعبيرية ووضعته المتسريحة جوًا شاطئيًا هادئًا وممتعًا يبرز من بين ألعاب الأطفال المحشوة القياسية.\n\nكل قطعة تُصنع بكميات صغيرة مع اهتمام وثيق بالملمس وتوازن الألوان والمتانة.",
    descriptionHi: "यह हाथ से बना क्रोकेट मेंढक आपकी पसंद के अनुसार कस्टमाइज़ किया जा सकता है, जिसमें कपड़ों के रंग, स्विम रिंग स्टाइल और छोटे एक्सेसरीज़ विवरण शामिल हैं। एक आरामदायक बीच कैरेक्टर के रूप में डिज़ाइन किया गया, यह खेलूं-भरोसे वाले विवरण और व्यक्तित्व से भरा है। मुलायम धागे से सावधानी से क्रोकेट किया गया, मेंढक में हरा शरीर, बुनी हुई टोपी, बैंगनी शॉर्ट्स, केले का फ्लोट और एक छोटा ड्रिंक एक्सेसरी है। हर तत्व हाथ से सिला जाता है, जिससे हर टुकड़ा थोड़ा अद्वितीय बनता है।\n\nयह आइटम एक कलेक्टिबल क्रोकेट फिगर, शेल्फ डेकोरेशन, या मेंढक और अमिगुरुमी लवर्स के लिए एक आरामदायक साथी के रूप में अच्छा काम करता है। इसकी अभिव्यंजक आँखें और आरामदायक मुद्रा एक शांत, खुश बीच वाइब बनाती है जो मानक प्लश खिलौनों से अलग दिखती है।\n\nहर टुकड़ा छोटी बैचों में बनाया जाता है, जिसमें टेक्सचर, कलर बैलेंस और टिकाऊपन पर काफी ध्यान दिया जाता है।",
    descriptionTh: "กบถักทำมือนี้สามารถปรับแต่งตามความชอบของคุณได้ รวมถึงสีเสื้อผ้า สไตล์แหวนว่ายน้ำ และรายละเอียดอุปกรณ์เสริมขนาดเล็ก ออกแบบเป็นตัวละครชายหาดที่ผ่อนคลาย มันเต็มไปด้วยรายละเอียดที่มีอารมณ์ขันและบุคลิกภาพ ถักอย่างพิถีพิถันด้วยด้ายนุ่มๆ กบมีลำตัวสีเขียว หมวกทอ กางเกงขาสั้นสีม่วง ที่ลอยน้ำกล้วย และอุปกรณ์เสริมดื่มขนาดเล็ก ทุกองค์ประกอบถูกเย็บด้วยมือ ทำให้แต่ละชิ้นมีความเป็นเอกลักษณ์เล็กน้อย\n\nสิ่งนี้ใช้งานได้ดีเป็นรูปทรงถักที่สะสมได้ การตกแต่งชั้นวาง หรือเพื่อนที่อบอุ่นสำหรับคนรักกบและอมิกุรุมิ ดวงตาที่มีความหมายและท่าทางผ่อนคลายสร้างบรรยากาศชายหาดที่สงบและมีความสุขที่โดดเด่นจากของเล่นชนิดนุ่มๆ มาตรฐาน\n\nแต่ละชิ้นทำในล็อตเล็กๆ พร้อมความใส่ใจอย่างใกล้ชิดกับเนื้อสัมผัส ความสมดุลของสี และความทนทาน",
    descriptionVi: "Con ếch đan tay này có thể được tùy chỉnh theo sở thích của bạn, bao gồm màu quần áo, kiểu phao và chi tiết phụ kiện nhỏ. Được thiết kế như một nhân vật bãi biển thoải mái, nó đầy những chi tiết vui nhộn và cá tính. Được đan cẩn thận bằng len mềm, con ếch có thân màu xanh lá, mũ dệt, quần đùi màu tím, phao chuối và phụ kiện đồ uống nhỏ. Mỗi phần tử được khâu tay, làm cho mỗi sản phẩm hơi khác biệt.\n\nMặt hàng này hoạt động tốt như một bức tượng đan sưu tập, trang trí kệ sách, hoặc người bạn ấm áp cho những người yêu ếch và amigurumi. Đôi mắt biểu cảm và tư thế thoải mái của nó tạo ra bầu không khí bãi biển yên bình, vui vẻ nổi bật so với những đồ chơi bông tiêu chuẩn.\n\nMỗi sản phẩm được làm thành từng đợt nhỏ với sự chú ý kỹ lưỡng đến kết cấu, cân bằng màu sắc và độ bền.",
    descriptionId: "Katak rajutan buatan tangan ini dapat disesuaikan sesuai preferensi Anda, termasuk warna pakaian, gaya pelampung, dan detail aksesori kecil. Didesain sebagai karakter pantai yang rileks, ini penuh dengan detail playful dan kepribadian. Dirajut dengan hati-hati dengan benang lembut, katak memiliki tubuh hijau, topi rajutan, celana pendek ungu, pelampung pisang, dan aksesori minuman kecil. Setiap elemen dijahit dengan tangan, membuat setiap karya sedikit unik.\n\nItem ini bekerja dengan baik sebagai figur rajutan koleksi, dekorasi rak, atau teman nyaman untuk pecinta katak dan amigurumi. Matanya yang ekspresif dan pose rileksnya menciptakan suasana pantai yang tenang dan gembira yang menonjol dari mainan plush standar.\n\nSetiap karya dibuat dalam jumlah kecil dengan perhatian dekat pada tekstur, keseimbangan warna, dan daya tahan.",
    descriptionMs: "Katak rajutan buatan tangan ini boleh disesuaikan mengikut pilihan anda, termasuk warna pakaian, gaya pelampung dan butiran aksesori kecil. Direka sebagai watak pantai yang rileks, ia penuh dengan butiran playful dan personaliti. Dirajut dengan teliti dengan benang lembut, katak mempunyai tubuh hijau, topi rajut, seluar pendek ungu, pelampung pisang dan aksesori minuman kecil. Setiap elemen dijahit dengan tangan, menjadikan setiap karya sedikit unik.\n\nItem ini berfungsi dengan baik sebagai figur rajutan koleksi, dekorasi rak atau teman selesa untuk pecinta katak dan amigurumi. Matanya yang ekspresif dan pose rileksnya mewujudkan suasana pantai yang tenang dan gembira yang menonjol daripada mainan plush standard.\n\nSetiap karya dibuat dalam kuantiti kecil dengan perhatian dekat pada tekstur, keseimbangan warna dan ketahanan.",
    descriptionTr: "Bu el yapımı örgü kurbağa, kıyafet renkleri, yüzme halkası stili ve küçük aksesuar detayları dahil tercihlerinize göre özelleştirilebilir. Rahat bir plaj karakteri olarak tasarlanmış, oyuncu detaylar ve kişilikle doludur. Yumuşak iplikle özenle örülen kurbağa, yeşil bir vücut, örülmüş şapka, mor şort, muz yüzer ve küçük bir içecek aksesuarına sahiptir. Her eleman elde dikilir, bu da her parçayı biraz benzersiz kılar.\n\nBu öğe, koleksiyon bir örgü figürü, raf dekorasyonu veya kurbağa ve amigurumi severler için rahat bir arkadaş olarak iyi çalışır. İfadeli gözleri ve rahat pozu, standart peluş oyuncaklardan ayrılan sakin, neşeli bir plaj havası yaratır.\n\nHer parça, doku, renk dengesi ve dayanıklılığına yakın dikkatle küçük partiler halinde yapılır.",
    descriptionPl: "Ta żaba na szydełku może być spersonalizowana zgodnie z Twoimi preferencjami, w tym kolory ubrań, styl pływaka i drobne szczegóły akcesoriów. Zaprojektowana jako zrelaksowana postać plażowa, jest pełna zabawnych szczegółów i osobowości. Starannie wykonana na szydełku z miękkiej przędzy, żaba ma zielone ciało, pleciony kapelusz, fioletowe szorty, pływak bananowy i mały dodatek do napojów. Każdy element jest zszywany ręcznie, co sprawia, że każdy egzemplarz jest nieco unikalny.\n\nTen przedmiot dobrze sprawdza się jako kolekcjonerska figurka na szydełku, ozdoba na półkę lub wygodny towarzysz dla miłośników żab i amigurumi. Jej wyraziste oczy i zrelaksowana poza tworzą spokojną, radosną atmosferę plażową, która wyróżnia się wśród standardowych pluszowych zabawek.\n\nKażdy egzemplarz jest wykonywany w małych partiach z bliską uwagą na teksturę, równowagę kolorów i trwałość.",
    descriptionNl: "Deze handgemaakte haakkikker kan worden aangepast aan uw voorkeuren, inclusief kledingkleuren, drijfstijl en kleine accessoire-details. Ontworpen als een ontspannen strandfiguur, zit het vol speelse details en persoonlijkheid. Zorgvuldig gehaakt met zacht garen, heeft de kikker een groen lichaam, een geweven hoed, paarse shorts, een banaan drijver en een kleine drinkaccessoire. Elk element wordt met de hand genaaid, waardoor elk stuk iets unieks wordt.\n\nDit item werkt goed als verzamelhaakfiguur, plankdecoratie of knusse metgezel voor kikker- en amigurumi-liefhebbers. De expressieve ogen en ontspannen houding creëren een kalm, vrolijk strandgevoel dat opvalt bij standaard pluchen speelgoed.\n\nElk stuk wordt in kleine batches gemaakt met veel aandacht voor textuur, kleurenbalans en duurzaamheid.",
    price: 99,
    currency: "USD",
    category: "Characters",
    image: "/images/products/p13_1.jpg",
    images: ["/images/products/p13_1.jpg", "/images/products/p13_2.jpg", "/images/products/p13_3.jpg", "/images/products/p13_4.jpg"],
    features: {
      en: [
        "Handmade Quality: Each piece crocheted individually with soft, durable yarn",
        "Customizable: Choose clothing colors, hat style, and accessory details",
        "Beach Vibes: Green frog with woven hat, purple shorts, and banana float",
        "Unique Gift: Perfect for frog lovers, beach theme collectors, or unique gifts"
      ],
      zh: [
        "手工品质：每件作品都用柔软耐用的毛线单独钩针",
        "可定制：选择服装颜色、帽子款式和配饰细节",
        "海滩氛围：绿色青蛙配编织帽、紫色短裤和香蕉救生圈",
        "独特礼物：非常适合青蛙爱好者、海滩主题收藏家或独特礼物"
      ]
    },
    howToOrder: {
      en: [
        "Add this listing to your cart",
        "Message me with your customization preferences (colors, accessories, etc.)",
        "I'll craft your unique beach frog companion"
      ],
      zh: [
        "将此商品加入购物车",
        "请告诉我您的定制偏好（颜色、配饰等）",
        "我将为您制作独特的海滩青蛙伴侣"
      ]
    }
  }
];
