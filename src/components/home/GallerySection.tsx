import GalleryScroller from "./GalleryScroller";
import { useState } from "react";

import { useTranslation } from "react-i18next";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

import gallary9 from "@/assets/gallary/gallary-9.jpeg";
import gallary10 from "@/assets/gallary/gallary-10.jpeg";
import gallary11 from "@/assets/gallary/gallary-11.jpeg";
import gallary12 from "@/assets/gallary/gallary-12.jpeg";
import gallary13 from "@/assets/gallary/gallary-13.jpeg";
import gallary14 from "@/assets/gallary/gallary-14.jpeg";
const GallerySection = () => {

    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const galleryItems = [
        {
            src: gallery2,
            title: t('gallery.officeInterior'),
            category: t('gallery.office'),
        },
        {
            src: gallery3,
            title: t('gallery.workerDeployment'),
            category: t('gallery.operations'),
        },
        {
            src: gallery4,
            title: t('gallery.receptionArea'),
            category: t('gallery.office'),
        },
        {
            src: gallery5,
            title: t('gallery.deploymentCeremony'),
            category: t('gallery.events'),
        },

        {
            src: gallery7,
            title: t('gallery.leadershipInterview'),
            category: t('gallery.mediaCoverage'),
        },
        {
            src: gallery8,
            title: t('gallery.leadershipInterview'),
            category: t('gallery.mediaCoverage'),
        },
        {
            src: gallary9,
            title: t('gallery.leadershipInterview'),
            category: t('gallery.mediaCoverage'),
        },
        {
            src: gallary10,
            title: t('gallery.iraqMarketCoverage'),
            category: t('gallery.mediaCoverage'),
        },
        {
            src: gallary11,
            title: t('gallery.leadershipInterview'),
            category: t('gallery.mediaCoverage'),
        },
        {
            src: gallary12,
            title: t('gallery.iraqMarketCoverage'),
            category: t('gallery.mediaCoverage'),
        },
        {
            src: gallary13,
            title: t('gallery.deploymentCeremony'),
            category: t('gallery.events'),
        },
        {
            src: gallary14,
            title: t('gallery.deploymentCeremony'),
            category: t('gallery.events'),
        }
    ];

    return <GalleryScroller items={galleryItems} />;
};

export default GallerySection;
