export interface ThorDenimFilter {
    image: string;
    imageMobile?: string;
    filterTitle: string;
    facetTitle: string;
}

export interface ThorDenimDesktopBlock {
    type: "three_images" | "single_image";
    images: {
        image: string;
        link: string;
    }[];
}

export interface ThorDenimMobileBlock {
    type: "two_images" | "full_image";
    images: {
        image: string;
        link: string;
    }[];
}

export const thorDenimTabsData = {
    title: "LOOKBOOK",
    collectionTitle: "COLLECTION",
    collectionLink: "/collections/thor-jeans",
    collectionHandle: "thor-jeans",
    facetTitle: "gender",
    subFacetTitle: "fit",
};

export const thorDenimFilters: ThorDenimFilter[] = [
    {
        image:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/VENIZIA-BROWN1555_fccdfd83-000a-406a-9d89-bf88fffecc98.jpg",
        filterTitle: "men",
        facetTitle: "",
    },
    {
        image:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/DESKTOP_-_HAWK_SLIM_FIT_6.58.02_PM.webp",
        imageMobile:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/MOBILE-_DENIM-_HAWK_SLIM_FIT_6.58.02_PM.webp",
        filterTitle: "hawk slim",
        facetTitle: "men",
    },
    {
        image:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/DESKTOP_-_MORRIS_REGULAR_FIT_6.58.02_PM.webp",
        imageMobile:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/MOBILE-_DENIM-_MORRIS_REGULAR_FIT_6.58.02_PM.webp",
        filterTitle: "morris regular",
        facetTitle: "men",
    },
    {
        image:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/DESKTOP_-_CARROT_FIT.webp",
        imageMobile:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/MOBILE-_DENIM-_CARROT_FIT.webp",
        filterTitle: "kurt carrot",
        facetTitle: "men",
    },
    {
        image:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/RR266041_7.webp",
        filterTitle: "women",
        facetTitle: "",
    },
    {
        image:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/TALL_STRAIGHT_09e372b3-05bd-4d76-801b-4139f0b905d0.webp",
        imageMobile:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/TALL_STRAIGHT_f5071925-024a-4b3e-8161-df77d71481e9.webp",
        filterTitle: "tall straight",
        facetTitle: "women",
    },
    {
        image:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/HIGH_WIDE_60a0977b-d1a9-4e66-8bde-1c26dfa60543.webp",
        imageMobile:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/HIGH_WIDE_5bc5c06d-7e63-4b01-a55b-498353bbe602.webp",
        filterTitle: "sculpt high wide",
        facetTitle: "women",
    },
    {
        image:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/DESKTOP_-_DENIM_WOMEN-3.webp",
        imageMobile:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/MOBILE-_DENIM-_WOMEN-3.webp",
        filterTitle: "tall barrel",
        facetTitle: "women",
    },
    {
        image:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/BOOTCUT_f3ed3fc7-2b8c-4613-aded-484f14c967d1.webp",
        imageMobile:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/BOOTCUT_e36422b3-8b44-43c6-af5a-2b04c3bbd6a3.webp",
        filterTitle: "classic bootcut",
        facetTitle: "women",
    },
    {
        image:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/RELAXED_REGULAR_55adfc8f-345c-4513-b27d-abb19ef1530e.webp",
        imageMobile:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/RELAXED_REGULAR_43ff2bcc-124b-493f-98dc-ef701ae1d111.webp",
        filterTitle: "relaxed regular",
        facetTitle: "women",
    },
    {
        image:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/MOM_FIT_e2fab5ed-047c-4ef3-8ec0-e4aab4265ee9.webp",
        imageMobile:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/MOM_FIT_334e8cdb-5b51-4ffe-8064-4c30662c2e86.webp",
        filterTitle: "mom fit",
        facetTitle: "women",
    },
    {
        image:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/EC4N_YELLOW_8.webp",
        filterTitle: "kids",
        facetTitle: "",
    },
    {
        image:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/DESKTOP_-_REGULAR.webp",
        imageMobile:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/MOBILE-_REGULAR.webp",
        filterTitle: "regular",
        facetTitle: "kids",
    },
    {
        image:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/DESKTOP_-_SLIM_FIT.webp",
        imageMobile:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/MOBILE-_SLIM_FIT.webp",
        filterTitle: "slim",
        facetTitle: "kids",
    },
    {
        image:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/DESKTOP_-_RELAXED_FIT.webp",
        imageMobile:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/MOBILE-_RELAXED_FIT.webp",
        filterTitle: "relaxed",
        facetTitle: "kids",
    },
    {
        image:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/DESKTOP_-_CARGO.webp",
        imageMobile:
            "https://cdn.shopify.com/s/files/1/0000/0000/files/MOBILE-_CARGO.webp",
        filterTitle: "cargo",
        facetTitle: "kids",
    },
];

export const thorDenimDesktopBlocks: ThorDenimDesktopBlock[] = [
    {
        type: "three_images",
        images: [
            {
                image: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/RR_-_WEB.webp",
                link: "/pages/rare-rabbit-denim",
            },
            {
                image: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/RO_-_WEB.webp",
                link: "/pages/rare-ones-denim",
            },
            {
                image: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/RSM_-_WEB.webp",
                link: "/pages/rareism-denim",
            },
        ],
    },
    {
        type: "single_image",
        images: [
            {
                image: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/Frame_2147226762.webp",
                link: "/products/rilo-m-mens-jeans-dark-blue",
            },
        ],
    },
    {
        type: "three_images",
        images: [
            {
                image: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/Frame_2147226766.webp",
                link: "/products/rilo-m-mens-jeans-dark-blue",
            },
            {
                image: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/Frame_2147226763_802dbc2e-5ccb-4bc9-a627-96e09ef1bc1b.webp",
                link: "",
            },
            {
                image: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/Frame_2147226767.webp",
                link: "/products/rare-ones-shorts-sifo-black",
            },
        ],
    },
    {
        type: "single_image",
        images: [
            {
                image: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/Frame_2147226765_08cf687a-06dd-4574-9285-8abcd294d7f2.webp",
                link: "/products/strefin-womens-jeans-light-blue",
            },
        ],
    },
];

export const thorDenimMobileBlocks: ThorDenimMobileBlock[] = [
    {
        type: "two_images",
        images: [
            {
                image: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/RSM-_MOBILE.webp",
                link: "/pages/rareism-denim",
            },
            {
                image: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/RR-_MOBILE.webp",
                link: "/pages/rare-rabbit-denim",
            },
        ],
    },
    {
        type: "two_images",
        images: [
            {
                image: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/RO_MOBILE.webp",
                link: "/pages/rare-ones-denim",
            },
            {
                image: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/Frame_2147226769_dde6ff55-d55b-40de-92a2-ab18338a3b45.webp",
                link: "",
            },
        ],
    },
    {
        type: "full_image",
        images: [
            {
                image: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/Frame_2147226771_7db06dc9-aece-46b7-a957-b3790d0eefb8.webp",
                link: "",
            },
        ],
    },
    {
        type: "full_image",
        images: [
            {
                image: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/Frame_2147226774_605c0eb6-201a-4456-a8dd-328ce6ac3772.webp",
                link: "",
            },
        ],
    },
];