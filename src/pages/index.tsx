import MainMenu from '@mactech/libs/@mactech/components/MainMenu';
import { Container } from "@nextui-org/react";
import Button from "@mui/material/Button";
import data from '@mactech/libs/@mactech/local-data/data';
import ImageSliders from '@mactech/libs/@mactech/components/ImageSliders';
import HeroSlipWithImage from '@mactech/libs/@mactech/components/HeroSlipWithImage';
import CardSection from '@mactech/libs/@mactech/components/CardSection';
import AppPage from '@mactech/hoc/DefaultPage/index';
import asyncComponent from '@mactech/utility/asyncComponent';

export default function index() {
    const slideData = data.images;
    return (
        <>
            <MainMenu />
            <HeroSlipWithImage slideData={slideData} />
            <CardSection />
        </>
    );
}

// const Maintenance = asyncComponent(() => import('modules/errorPages/Maintenance'));
// export default AppPage(() => <Maintenance />);
