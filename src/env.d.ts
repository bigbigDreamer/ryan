/// <reference types="astro/client" />
declare interface Window {
    gtag: (...params: unknown[]) => void;
}
