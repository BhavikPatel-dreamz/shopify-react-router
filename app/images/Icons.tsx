import type { SVGProps } from "react";

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            {...props}
        >
            <path
                d="M11.1797 11.1895L14.1631 13.9994"
                stroke="currentColor"
                strokeWidth="1.26354"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.96674 12.9462C10.2621 12.9462 12.9335 10.2748 12.9335 6.97943C12.9335 3.68409 10.2621 1.0127 6.96674 1.0127C3.6714 1.0127 1 3.68409 1 6.97943C1 10.2748 3.6714 12.9462 6.96674 12.9462Z"
                stroke="currentColor"
                strokeWidth="1.26354"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function AccountIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
            width="18"
            height="18"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M8.72493 0.742188C9.74932 0.742188 10.7318 1.14912 11.4561 1.87348C12.1805 2.59783 12.5874 3.58026 12.5874 4.60465C12.5874 5.62904 12.1805 6.61148 11.4561 7.33583C10.7318 8.06018 9.74932 8.46712 8.72493 8.46712C7.70054 8.46712 6.71811 8.06018 5.99376 7.33583C5.2694 6.61148 4.86247 5.62904 4.86247 4.60465C4.86247 3.58026 5.2694 2.59783 5.99376 1.87348C6.71811 1.14912 7.70054 0.742188 8.72493 0.742188ZM8.72493 11.6484C11.0745 11.6484 13.1759 12.1252 14.6715 12.873C16.1968 13.6356 16.9499 14.597 16.9499 15.5108V17.1921H0.5V15.5108C0.5 14.597 1.25304 13.6356 2.77838 12.873C4.27394 12.1252 6.3754 11.6484 8.72493 11.6484Z"
            />
        </svg>
    );
}

export function WishlistIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 13 19"
            width="13"
            height="19"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M6.88901 14.4045L6.68833 14.2909L6.48763 14.4045L1.4502 17.2593V1.50001C1.4502 1.27092 1.53162 1.05684 1.66838 0.903495C1.80421 0.751184 1.98197 0.671875 2.16065 0.671875H11.216C11.3947 0.671875 11.5724 0.751184 11.7083 0.903495C11.845 1.05684 11.9264 1.27092 11.9264 1.50001V17.2593L6.88901 14.4045Z"
            />
        </svg>
    );
}

export function CartIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 20"
            width="16"
            height="20"
            {...props}
        >
            <path
                stroke="currentColor"
                d="M14.9258 4H0.925781V18.9333H14.9258V4Z"
            />
            <line
                stroke="currentColor"
                x1="4.65918"
                y1="0.5"
                x2="11.1925"
                y2="0.5"
            />
        </svg>
    );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="17"
            {...props}
        >
            <path d="M8.59082 1L1.00005 8.49933L8.59082 16" stroke="#000000" stroke-width="1" stroke-linejoin="round"></path>
        </svg>
    );
}

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244.62 123.12" width="12" height="9"  {...props}>
            <path d="M122.31,123.12l6-5.44,113.33-102A9,9,0,0,0,242.32,3h0a9,9,0,0,0-12.72-.69L122.31,98.84,15,2.31A9,9,0,0,0,2.29,3h0A9,9,0,0,0,3,15.68l113.33,102,6,5.44Z"></path>
        </svg>
    );
}
    

export function SubscripbeArrowIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg className="icon icon-arrow-subscribe" width="31" height="6" viewBox="0 0 31 6" fill="none" xmlns="http://www.w3.org/2000/svg"  {...props}>
            <path d="M30.2475 3.24749C30.3842 3.11081 30.3842 2.8892 30.2475 2.75251L28.0201 0.525128C27.8834 0.388445 27.6618 0.388445 27.5251 0.525128C27.3884 0.661812 27.3884 0.883419 27.5251 1.0201L29.505 3L27.5251 4.9799C27.3884 5.11658 27.3884 5.33819 27.5251 5.47488C27.6618 5.61156 27.8834 5.61156 28.0201 5.47488L30.2475 3.24749ZM-3.91068e-08 3.35L30 3.35L30 2.65L3.91068e-08 2.65L-3.91068e-08 3.35Z" fill="currentColor"></path>
        </svg>
    );
}

export function MobileHomeIcon(props: SVGProps<SVGSVGElement>){
    return (
        <svg viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg"  {...props}>
            <path d="M22.9827 23.5082H8.24797C8.03938 23.5082 7.87012 23.3444 7.87012 23.1425V14.9203C7.87012 14.7182 8.03938 14.5547 8.24797 14.5547C8.45655 14.5547 8.62581 14.7182 8.62581 14.9203V22.7769H22.6049V14.9203C22.6049 14.7182 22.7741 14.5547 22.9827 14.5547C23.1913 14.5547 23.3606 14.7182 23.3606 14.9203V23.1425C23.3606 23.3444 23.1913 23.5082 22.9827 23.5082Z" fill="#000000"></path>
            <path d="M5.99028 15.1154C5.88373 15.1154 5.77771 15.0719 5.70304 14.9873C5.56726 14.834 5.58613 14.6031 5.74449 14.472L15.2821 6.57997C15.4229 6.46323 15.6304 6.46297 15.7718 6.57894L25.2539 14.355C25.413 14.4856 25.4327 14.7163 25.298 14.8706C25.163 15.0246 24.9244 15.0436 24.7655 14.913L15.5287 7.33778L6.23554 15.0279C6.16432 15.0868 6.07717 15.1156 5.99028 15.1156V15.1154Z" fill="#000000"></path>
        </svg>
    );
}

export function MobileSearchIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clip-path="url(#clip0_4006_9643)">
                <path d="M20.9814 18.9814L17.1254 15.1254M17.1254 15.1254C17.785 14.4659 18.3082 13.6829 18.6652 12.8211C19.0221 11.9593 19.2058 11.0357 19.2058 10.1029C19.2058 9.17015 19.0221 8.24652 18.6652 7.38475C18.3082 6.52299 17.785 5.73997 17.1254 5.0804C16.4659 4.42083 15.6829 3.89763 14.8211 3.54068C13.9593 3.18372 13.0357 3 12.1029 3C11.1702 3 10.2465 3.18372 9.38475 3.54068C8.52299 3.89763 7.73997 4.42083 7.0804 5.0804C5.74834 6.41246 5 8.21911 5 10.1029C5 11.9867 5.74834 13.7934 7.0804 15.1254C8.41245 16.4575 10.2191 17.2058 12.1029 17.2058C13.9867 17.2058 15.7934 16.4575 17.1254 15.1254Z" stroke="#000000" stroke-width="0.887843" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
            <defs>
                <clipPath id="clip0_4006_9643">
                    <rect width="21.3082" height="21.3082" fill="white"></rect>
                </clipPath>
            </defs>
        </svg>
    );
}

export function MobileNnUrlIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1.86055 5.90981H3.01684L8.8799 14.3439H8.90711V5.90981H9.80493V15.541H8.64864L2.78558 7.10691H2.75837V15.541H1.86055V5.90981Z" fill="currentColor"></path>
            <path d="M8.86469 5.90981H10.021L15.884 14.3439H15.9113V5.90981H16.8091V15.541H15.6528L9.78972 7.10691H9.76251V15.541H8.86469V5.90981Z" fill="currentColor"></path>
        </svg>
    );
}
export function MobileAccountIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <span className="icon icon-mobile-account">
            <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M12.7855 4.57032C13.8339 4.57032 14.8394 4.9868 15.5807 5.72814C16.3221 6.46948 16.7385 7.47495 16.7385 8.52336C16.7385 9.57178 16.3221 10.5772 15.5807 11.3186C14.8394 12.0599 13.8339 12.4764 12.7855 12.4764C11.7371 12.4764 10.7316 12.0599 9.99027 11.3186C9.24893 10.5772 8.83245 9.57178 8.83245 8.52336C8.83245 7.47495 9.24893 6.46948 9.99027 5.72814C10.7316 4.9868 11.7371 4.57032 12.7855 4.57032ZM12.7855 15.2244C15.1026 15.2244 17.1842 15.6943 18.675 16.4397C20.1843 17.1943 21.0002 18.18 21.0002 19.1775V20.9997H4.57081V19.1775C4.57081 18.18 5.38668 17.1943 6.89594 16.4397C8.38683 15.6943 10.4684 15.2244 12.7855 15.2244Z" stroke="#000000" stroke-width="0.617204"></path>
            </svg>
        </span>
    );
}

export function MobileCartIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 -4 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1354 3.625H1.00027V17.6358H14.1354V3.625Z" stroke="#000000" stroke-width="0.579397"></path>
            <line x1="4.50298" y1="0.711026" x2="10.6327" y2="0.711026" stroke="#000000" stroke-width="0.577947"></line>
        </svg>
    );
}