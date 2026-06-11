export type SummerVacationBlock =
    | {
        type: "three_images";
        images: {
            href: string;
            img: string;
            alt: string;
        }[];
    }
    | {
        type: "single_image";
        image: {
            href: string;
            img: string;
            alt: string;
        };
    }
    | {
        type: "two_images";
        reverse?: boolean;
        large: {
            href: string;
            img: string;
            alt: string;
        };
        small: {
            href: string;
            img: string;
            alt: string;
        };
    };

export const rareOnesSummerVacationBlocks: SummerVacationBlock[] = [
    {
        type: "three_images",
        images: [
            {
                href: "/products/rare-ones-shirt-vacay-white",
                img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_web_1_78ef7db7-ae19-4ec0-a750-4efbce04afc2.webp?v=1779356171",
                alt: "Vacation Look 1",
            },
            {
                href: "#",
                img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_web_2_b4626f7d-2246-4fb3-8578-6d63a38e1965.webp?v=1779356175",
                alt: "Vacation Look 2",
            },
            {
                href: "/products/rare-ones-shirt-toile-s-rust",
                img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_web_3_3157bcac-9931-405f-bfa4-ab81985bdf9a.webp?v=1779356179",
                alt: "Vacation Look 3",
            },
        ],
    },

    {
        type: "single_image",
        image: {
            href: "/products/rare-ones-shirt-vacay-white",
            img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_web_4_ba1f12e7-d448-4340-919d-7b57909900fe.webp?v=1779356192",
            alt: "Vacation Look 4",
        },
    },

    {
        type: "three_images",
        images: [
            {
                href: "/products/rare-ones-t-shirt-ken-light-yellow",
                img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_web_5_4bc279ed-c462-460e-a099-d2880f0f52b3.webp?v=1779356215",
                alt: "Vacation Look 5",
            },
            {
                href: "#",
                img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_web_6_3de4ec6b-7b39-42cb-a90d-caf55e98274b.webp?v=1779356220",
                alt: "Vacation Look 6",
            },
            {
                href: "/products/rare-ones-shirt-adrin-s-off-white",
                img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_web_7_f910a64e-5722-4e7c-be61-39f65c0689b4.webp?v=1779356226",
                alt: "Vacation Look 7",
            },
        ],
    },

    {
        type: "single_image",
        image: {
            href: "/products/rare-ones-shirt-afix-k-light-yellow",
            img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_web_8_86cce0ed-81eb-4387-9bdb-c83d1f248628.webp?v=1779356235",
            alt: "Vacation Look 8",
        },
    },

    {
        type: "two_images",
        large: {
            href: "/products/rare-ones-shirt-afix-k-light-yellow",
            img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_web_9_0b7092a7-4e76-446f-8c9b-95c9ae8ae006.webp?v=1779356247",
            alt: "Vacation Look 9",
        },
        small: {
            href: "/products/rare-ones-shirt-zeno-light-purple",
            img: "https://86e75ac3.nitro.getn7.io/cdn/shop/files/vacation_web_10_add2fcc7-12b8-4bc4-808d-68f131dd7e98.webp?v=1779356252",
            alt: "Vacation Look 10",
        },
    },
];