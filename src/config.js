const config = {
    gmailLink: 'https://gmail.com',
    imagesLink: 'https://www.google.com.ua/imghp?hl=uk&ogbl',
    // menu1: [
    //     ['Обліковий запис', 'https://myaccount.google.com/?utm_source=OGB&utm_medium=app', 0],
    //     ['Пошук', 'https://www.google.com.ua/webhp', -1794],
    //     ['Карти', 'https://maps.google.com.ua/maps?hl=uk', -483],
    //     ['Youtube', 'https://www.youtube.com/?gl=UA', -2622],
    //     ['Новини', 'https://news.google.com/', -1311],
    //     ['Gmail', 'https://mail.google.com/mail/', -2001],
    //     ['Meet', 'https://meet.google.com?hs=197&pli=1&authuser=0', -690],
    //     ['Чат', 'https://chat.google.com/', -1656],
    //     ['Контакти', 'https://contacts.google.com/?hl=uk', -2898],
    //     ['Диск', 'https://drive.google.com/?authuser=0', -2967],
    //     ['Календар', 'https://calendar.google.com/calendar', -2553],
    //     ['Перекладач', 'https://translate.google.com.ua/?hl=uk', -1932],
    //     ['Фото', 'https://photos.google.com/?pageId=none', -2829],
    //     ['Duo', 'https://duo.google.com/?usp=duo_ald', -2484]
    // ],
    menu1: [
        {
            name: 'Обліковий запис',
            link: 'https://myaccount.google.com/?utm_source=OGB&utm_medium=app',
            position: 0
        },
        {
            name: 'Пошук',
            link: 'https://www.google.com.ua/webhp',
            position: -1794
        },
        {
            name: 'Карти',
            link: 'https://maps.google.com.ua/maps?hl=uk',
            position: -483
        },
        {
            name: 'Youtube',
            link: 'https://www.youtube.com/?gl=UA',
            position: -2622
        },
        {
            name: 'Новини',
            link: 'https://news.google.com/',
            position: -1311
        },
        {
            name: 'Gmail',
            link: 'https://mail.google.com/mail/',
            position: -2001
        },
        {
            name: 'Meet',
            link: 'https://meet.google.com?hs=197&pli=1&authuser=0',
            position: -690
        },
        {
            name: 'Чат',
            link: 'https://chat.google.com/',
            position: -1656
        },
        {
            name: 'Контакти',
            link: 'https://contacts.google.com/?hl=uk',
            position: -2898
        },
        {
            name: 'Диск',
            link: 'https://drive.google.com/?authuser=0',
            position: -2967
        },
        {
            name: 'Календар',
            link: 'https://calendar.google.com/calendar',
            position: -2553
        },
        {
            name: 'Перекладач',
            link: 'https://translate.google.com.ua/?hl=uk',
            position: -1932
        },
        {
            name: 'Фото',
            link: 'https://photos.google.com/?pageId=none',
            position: -2829
        },
        {
            name: 'Duo',
            link: 'https://duo.google.com/?usp=duo_ald',
            position: -2484
        }
    ],
    // menu2: [
    //     ['Документи', 'https://docs.google.com/document/?usp=docs_alc&authuser=0', -1242],
    //     ['Таблиці', 'https://docs.google.com/spreadsheets/?usp=sheets_alc&authuser=0', -2208],
    //     ['Презентації', 'https://docs.google.com/presentation/?usp=slides_alc&authuser=0', -2277],
    //     ['Книги', 'https://books.google.com.ua/?hl=uk', -2760],
    //     ['Blogger', 'https://www.blogger.com/', -1863],
    //     ['Hangouts', 'https://hangouts.google.com/', -2415],
    //     ['Keep', 'https://keep.google.com/u/0', -276],
    //     ['Jumboard', 'https://jamboard.google.com/?authuser=0&usp=jam_ald', -2070],
    //     ['Клас', 'https://classroom.google.com/?authuser=0', -966],
    //     ['Земля', 'https://earth.google.com/web/', -1380],
    //     ['Колекції', 'https://www.google.com.ua/save', -621],
    //     ['Arts and culture', 'https://artsandculture.google.com/?hl=uk&utm_source=ogs.google.com&utm_medium=referral&authuser=0', -1518],
    //     ['Google ads', 'https://ads.google.com/home/?subid=ww-ww-et-g-aw-a-vasquette_ads_cons_1!o2', -414],
    //     ['Подкасти', 'https://podcasts.google.com/', -552],
    //     ['Google one', 'https://one.google.com/', -2691],
    //     ['Поїздки', 'https://www.google.com/travel/?dest_src=al', -3036],
    //     ['Форми', 'https://docs.google.com/forms/?authuser=0&usp=forms_alc', -2139]
    // ],
    menu2: [
        {
            name: 'Документи',
            link: 'https://docs.google.com/document/?usp=docs_alc&authuser=0',
            position: -1242
        },
        {
            name: 'Таблиці',
            link: 'https://docs.google.com/spreadsheets/?usp=sheets_alc&authuser=0',
            position: -2208
        },
        {
            name: 'Презентації',
            link: 'https://docs.google.com/presentation/?usp=slides_alc&authuser=0',
            position: -2277
        }, 
        {
            name: 'Книги',
            link: 'https://books.google.com.ua/?hl=uk',
            position: -2760
        },
        {
            name: 'Blogger',
            link: 'https://www.blogger.com/',
            position: -1863
        },
        {
            name: 'Hangouts',
            link: 'https://hangouts.google.com/',
            position: -2415
        }, 
        {
            name: 'Keep',
            link: 'https://keep.google.com/u/0',
            position: -276
        },
        {
            name: 'Jumboard',
            link: 'https://jamboard.google.com/?authuser=0&usp=jam_ald',
            position: -2070
        },
        {
            name: 'Клас',
            link: 'https://classroom.google.com/?authuser=0',
            position: -966
        }, 
        {
            name: 'Земля',
            link: 'https://earth.google.com/web/',
            position: -1380
        },
        {
            name: 'Колекції',
            link: 'https://www.google.com.ua/save',
            position: -621
        },
        {
            name: 'Arts and culture',
            link: 'https://artsandculture.google.com/?hl=uk&utm_source=ogs.google.com&utm_medium=referral&authuser=0',
            position: -1518
        }, 
        {
            name: 'Google ads',
            link: 'https://ads.google.com/home/?subid=ww-ww-et-g-aw-a-vasquette_ads_cons_1!o2',
            position: -414
        },
        {
            name: 'Подкасти',
            link: 'https://podcasts.google.com/',
            position: -552
        },
        {
            name: 'Google one',
            link: 'https://one.google.com/',
            position: -2691
        }, 
        {
            name: 'Поїздки',
            link: 'https://www.google.com/travel/?dest_src=al',
            position: -3036
        },
        {
            name: 'Форми',
            link: 'https://docs.google.com/forms/?authuser=0&usp=forms_alc',
            position: -2139
        }
    ],
    menuLink: 'https://www.google.com.ua/intl/uk/about/products?tab=rh',
    swapLanguage: 'https://www.google.com/setprefs?sig=0_N6n_0-UOc6mGMI3b6mVfTYS7MvU%3D&hl=ru&source=homepage&sa=X&ved=0ahUKEwiJv4Ct-_7yAhUPE6YKHYD2CbgQ2ZgBCA4',
    footer: {
        aboutGoogle: 'https://about.google/?utm_source=google-UA&utm_medium=referral&utm_campaign=hp-footer&fg=1',
        advertising: 'https://www.google.com/intl/uk_ua/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1',
        forBusiness: 'https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1',
        howWorkSearch: 'https://google.com/search/howsearchworks/?fg=1',
        confidentiality: 'https://policies.google.com/privacy?hl=uk&fg=1',
        conditions: 'https://policies.google.com/terms?hl=uk&fg=1'
    }
};

export default config;