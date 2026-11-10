const catalogData = [
    {
        category: "🎂 ТОРТЫ БЕЗ САХАРА",
        items: [
            { name: "Молочная девочка", price: "2 700 ₽", weight: "900 грамм", kbzhu: "КБЖУ на 100 г: 149/7,9/9,1/8,8", desc: "Нежные миндальные коржи, пропитанные сметанным кремом с добавлением ягод.", image: "img/molochnaya.jpg", ingredients: "<strong>Коржи:</strong> Мука миндальная, яйцо куриное, молоко, сухое обезжиренное молоко, масло кокосовое, разрыхлитель, сахарозаменитель (эритрит, сукралоза), лимонная кислота, соль, ванилин.<br><br><strong>Крем:</strong> Сметана, сливки, рикотта, голубика, кокосовая стружка, клубника, желатин, сахарозаменитель (эритрит, сукралоза), ванилин." },
            { name: "Медовик классический", price: "1 900 ₽", weight: "800 грамм", kbzhu: "КБЖУ на 100 г: 200/5.3/7/27,4", desc: "Мягкие коржи со сметанным кремом и приятным медовым вкусом.", image: "img/medovik.jpg", ingredients: "<strong>Коржи:</strong> Мука кукурузная, йогурт натуральный, мёд, яйцо куриное, сода.<br><br><strong>Крем:</strong> Рикотта, сметана, мёд, шоколад без сахара." },
            { name: "Красный бархат", price: "2 700 ₽", weight: "1000 грамм", kbzhu: "КБЖУ на 100 г: 300/7,7/17,8/30,8", desc: "Влажный бисквит насыщенного красного цвета с нежным кремом на основе сливочного сыра с добавлением пюре малины.", image: "img/krasny-barhat.jpg", ingredients: "<strong>Коржи:</strong> Сироп топинамбура, мука пшеничная, яйцо, какао, краситель красный, сахарозаменитель.<br><br><strong>Крем:</strong> Сыр творожный, сливки, сироп топинамбура." },
            { name: "Морковный торт", price: "1 600 ₽", weight: "900 грамм", kbzhu: "КБЖУ на 100 г: 202/4,5/14,4/13,6", desc: "Ароматный морковный торт с ноткой цитруса и классическим сметанным кремом.", image: "img/morkovny.jpg", ingredients: "<strong>Коржи:</strong> Морковь, яйцо, мука пшеничная, масло подсолнечное, сахарозаменитель, цедра апельсина, корица.<br><br><strong>Крем:</strong> Сметана, сахарозаменитель, ванилин, апельсин, желатин." },
            { name: "Наполеон без сахара", price: "2 200 ₽", weight: "840 грамм", kbzhu: "КБЖУ на 100 г: 260/5,2/21,7/19,8", desc: "Легендарный десерт, который покоряет своей воздушностью и сливочным вкусом.", image: "img/napoleon.jpg", ingredients: "<strong>Тесто:</strong> Слоеное тесто бездрожжевое.<br><br><strong>Крем:</strong> Молоко, яйцо, мука, сахарозаменитель, ванилин, масло сливочное." },
            { name: "Прага без сахара", price: "3 000 ₽", weight: "950 грамм", kbzhu: "КБЖУ на 100 г: 222/6,4/15,5/14,1", desc: "Для ценителей настоящего глубокого шоколадного вкуса.", image: "img/praga.jpg", ingredients: "<strong>Коржи:</strong> Мука цельнозерновая, йогурт, яйцо, какао, сахарозаменитель.<br><br><strong>Крем:</strong> Горький шоколад без сахара, молоко кокосовое, сливки, какао, сироп топинамбура." }
        ]
    },
    {
        category: "🌀 РУЛЕТЫ С САХАРОМ",
        items: [
            { name: "Меренговый рулет с клубникой", price: "2 800 ₽", weight: "700 грамм", kbzhu: "КБЖУ на 100 г: 320/3,2/8,2/38,8", desc: "Хрустящий меренговый рулет с нежнейшим кремом и клубнично-черничным джемом.", image: "img/rulet-klubnika.jpg", ingredients: "<strong>Основа:</strong> Яичный белок, сахарная пудра, лимонная кислота, крахмал.<br><br><strong>Крем:</strong> Сливки, рикотта, сахар, ванилин.<br><br><strong>Джем:</strong> Клубника, черника, сахар, пектин." },
            { name: "Меренговый рулет с малиной", price: "2 800 ₽", weight: "700 грамм", kbzhu: "КБЖУ на 100 г: 310/3,6/5,9/47,0", desc: "Хрустящий белковый корж и кисло-сладкий малиновый джем.", image: "img/rulet-malina.jpg", ingredients: "<strong>Основа:</strong> Яичный белок, сахарная пудра, лимонная кислота.<br><br><strong>Крем:</strong> Сливки, рикотта, сахар.<br><br><strong>Джем:</strong> Малина, сахар, пектин." },
            { name: "Меренговый рулет с облепихой", price: "2 800 ₽", weight: "700 грамм", kbzhu: "КБЖУ на 100 г: 308/3,5/5,7/47,7", desc: "Хрустящий снаружи и мягкий внутри меренговый рулет с облепиховым джемом.", image: "img/rulet-oblepiha.jpg", ingredients: "<strong>Основа:</strong> Яичный белок, сахарная пудра.<br><br><strong>Крем:</strong> Сливки, рикотта, сахар.<br><br><strong>Джем:</strong> Облепиха, сахар, пектин." },
            { name: "Меренговый рулет фисташковый", price: "2 800 ₽", weight: "700 грамм", kbzhu: "КБЖУ на 100 г: 350/5,7/14,5/42,1", desc: "Хрустящая меренга и бархатный фисташковый крем.", image: "img/rulet-fistashka.jpg", ingredients: "<strong>Основа:</strong> Яичный белок, сахарная пудра.<br><br><strong>Крем:</strong> Сливки, сыр, фисташковая паста, сахар." }
        ]
    },
    {
        category: "🌀 РУЛЕТЫ БЕЗ САХАРА",
        items: [
            { name: "Шпинатный рулет", price: "2 800 ₽", weight: "800 грамм", kbzhu: "КБЖУ на 100 г: 256/3,5/15,0/22,8", desc: "Шпинатный бисквит на рисовой муке с нежным творожно-сметанным кремом и чёрной смородиной.", image: "img/rulet-shpinat.jpg", ingredients: "<strong>Тесто:</strong> Яичный белок, сироп топинамбура, мука рисовая, шпинат.<br><br><strong>Крем:</strong> Сыр творожный, сметана, сахарозаменитель.<br><br><strong>Начинка:</strong> Черная смородина, кокосовая стружка, голубика." }
        ]
    },
    {
        category: "🧁 ПИРОЖНЫЕ С САХАРОМ",
        items: [
            { name: "Кролик", price: "260 ₽", weight: "70 грамм", kbzhu: "КБЖУ на 100 г: 320/4,0/7,4/34,2", desc: "Лёгкий, воздушный муссовый десерт с изысканным сочетанием сливочного белого шоколада и свежей клубничной кислинки.", image: "img/krolik.jpg", ingredients: "<strong>Мусс:</strong> Шантипак, сливки, молоко, сахар, желатиновая масса, творог, йогурт, шоколад белый.<br><br><strong>Начинка:</strong> Клубничное пюре, сахар, пектин." },
            { name: "Эклер ваниль/банан", price: "190 ₽", weight: "60 грамм", kbzhu: "Банан: 280/5,0/15,5/21,9 | Ваниль: 295/4,8/21,1/23,3", desc: "Классические заварные пирожные с нежным кремом.", image: "img/ekler.jpg", ingredients: "<strong>Тесто:</strong> Масло сливочное, вода, мука, яйцо, сахар.<br><br><strong>Крем:</strong> Молоко, банан/ваниль, крахмал, сахар." },
            { name: "Картошка", price: "180 ₽", weight: "80 грамм", kbzhu: "КБЖУ на 100 г: 268/6,8/15,1/27,3", desc: "Нежный бисквитный десерт с масляным кремом и сгущённым молоком.", image: "img/kartoshka.jpg", ingredients: "<strong>Состав:</strong> Мука пшеничная, яйцо, сахар, какао, коньяк, крем масляный, шоколад молочный, сгущеное молоко." }
        ]
    },
    {
        category: "🧁 ПИРОЖНЫЕ БЕЗ САХАРА",
        items: [
            { name: "Вишня мусс", price: "350 ₽", weight: "100 грамм", kbzhu: "КБЖУ на 100 г: 320/12,6/22,9/16,9", desc: "Воздушная муссовая текстура с бархатистыми нотками кокоса и легкой кислинкой вишневого пюре.", image: "img/vishnya-muss.jpg", ingredients: "<strong>Мусс:</strong> Желатиновая масса, сливки, шантипак, шоколад, молоко кокосовое, пюре вишня.<br><br><strong>Начинка:</strong> Вишня, желатин." },
            { name: "Груша мусс", price: "350 ₽", weight: "80 грамм", kbzhu: "КБЖУ на 100 г: 282/6,7/16,2/13,5", desc: "Нежнейший йогуртовый мусс с кремовой текстурой и сочной грушей внутри.", image: "img/grusha-muss.jpg", ingredients: "<strong>Мусс:</strong> Йогурт, сироп топинамбура, желатиновая масса, сливки.<br><br><strong>Начинка:</strong> Пюре груши, пектин." },
            { name: "Яблоко мусс", price: "350 ₽", weight: "80 грамм", kbzhu: "КБЖУ на 100 г: 292/7,1/18,4/14,1", desc: "Невесомый йогуртовый мусс с бархатистой текстурой и теплым ароматом корицы.", image: "img/yabloko-muss.jpg", ingredients: "<strong>Мусс:</strong> Йогурт, сироп топинамбура, желатиновая масса, сливки, корица.<br><br><strong>Начинка:</strong> Пюре яблоко, пектин." },
            { name: "Малина мусс", price: "350 ₽", weight: "60 грамм", kbzhu: "КБЖУ на 100 г: 300/3,5/16,3/27,5", desc: "Легкий, как облако, мусс на кокосовом молоке с освежающей кислинкой малинового пюре.", image: "img/malina-muss.jpg", ingredients: "<strong>Мусс:</strong> Желатиновая масса, сливки 33%, шантипак, шоколад, молоко кокосовое.<br><br><strong>Корпус:</strong> Молочный шоколад без сахара." },
            { name: "Паннакотик шоколадный", price: "310 ₽", weight: "130 грамм", kbzhu: "КБЖУ на 100 г: 320/7,1/15,0/14,9", desc: "Воплощение нежности и благородства в одном миниатюрном десерте.", image: "img/pannakotik.jpg", ingredients: "<strong>Тело:</strong> Сливки 33%, молоко 1,5%, сироп миндаль, желатиновая масса, какао.<br><br><strong>Украшение:</strong> Масло кокосовое, кандурин." },
            { name: "Лимонный тарт", price: "262 ₽", weight: "90 грамм", kbzhu: "КБЖУ на 100 г: 358/5,9/25,4/26,4", desc: "Песочная корзинка с начинкой из нежного крема «пломбир» и яркого лимонного курда.", image: "img/tart-limon.jpg", ingredients: "<strong>Тарт:</strong> Мука пшеничная, масло сливочное, желток, сахарозаменитель.<br><br><strong>Начинка:</strong> Сметана, яйцо, лимонный курд." },
            { name: "Кокосовый рай", price: "410 ₽", weight: "90 грамм", kbzhu: "КБЖУ на 100 г: 298/5,1/22/19,8", desc: "Кокосовый мусс с кислосладким пюре маракуйи.", image: "img/kokosovyy-ray.jpg", ingredients: "<strong>Мусс:</strong> Сливки, шоколад белый без сахара, молоко кокосовое, стружка кокосовая.<br><br><strong>Начинка:</strong> Пюре маракуйи, пюре манго." },
            { name: "Птичье НЕмолоко", price: "250 ₽", weight: "80 грамм", kbzhu: "КБЖУ на 100 г: 149/4,1/5,7/20,3", desc: "Любимый поколениями десерт в новом исполнении. Теперь без сахара, лактозы и глютена.", image: "img/ptichye-nemoloko.jpg", ingredients: "<strong>Оформление:</strong> Кокосовое молоко, какао, желатин.<br><br><strong>Суфле:</strong> Сироп топинамбура, яичный белок, кокосовое молоко, агар." }
        ]
    }
];

const hitsData = [
    { name: "Молочная девочка", price: "2 700 ₽", desc: "Нежные миндальные коржи, пропитанные сметанным кремом с добавлением ягод.", image: "img/molochnaya.jpg" },
    { name: "Наполеон без сахара", price: "2 200 ₽", desc: "Легендарный десерт, который покоряет своей воздушностью и сливочным вкусом.", image: "img/napoleon.jpg" },
    { name: "Лимонный тарт", price: "262 ₽", desc: "Песочная корзинка с начинкой из нежного крема «пломбир» и яркого лимонного курда.", image: "img/tart-limon.jpg" }
];

// Универсальная ссылка WhatsApp - работает и на телефоне, и на компьютере
const waLink = "https://api.whatsapp.com/send?phone=79529362368&text=";

function renderCatalog() {
    const catalogGrid = document.getElementById('catalog-container');
    if (!catalogGrid) return;

    catalogGrid.innerHTML = '';
    
    catalogData.forEach(section => {
        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = section.category;
        catalogGrid.appendChild(categoryTitle);

        const sectionGrid = document.createElement('div');
        sectionGrid.className = 'catalog-grid';

        section.items.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'product-card-detailed';
            
            const imgTag = prod.image ? `<img src="${prod.image}" alt="${prod.name}" class="product-img">` : '';
            
            card.innerHTML = `
                ${imgTag}
                <div class="card-header">
                    <h3>${prod.name}</h3>
                    <span class="price-tag">${prod.price}</span>
                </div>
                <p class="short-desc">${prod.desc}</p>
                <div class="product-meta">
                    <span class="meta-item">⚖️ ${prod.weight}</span>
                    <span class="meta-item">📊 ${prod.kbzhu}</span>
                </div>
                <div class="ingredients-box">${prod.ingredients}</div>
                <a href="order.html" class="btn btn-primary full-width">Заказать</a>
            `;
            sectionGrid.appendChild(card);
        });

        catalogGrid.appendChild(sectionGrid);
    });
}

function renderHits() {
    const hitsGrid = document.getElementById('hits-container');
    if (!hitsGrid) return;

    hitsGrid.innerHTML = '';
    
    hitsData.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const imgTag = prod.image ? `<img src="${prod.image}" alt="${prod.name}" class="product-img">` : '';
        
        card.innerHTML = `
            ${imgTag}
            <h3>${prod.name}</h3>
            <p class="price">${prod.price}</p>
            <p class="description">${prod.desc}</p>
            <a href="order.html" class="btn btn-primary" style="padding: 10px 20px; font-size: 0.9rem;">Заказать</a>
        `;
        hitsGrid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderCatalog();
    renderHits();
});
