//import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
//import Projects from '../components/Projects/Projects';
//import Example from '../components/Examples/Example';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import ScrollToTop from "react-scroll-to-top";
//import FAQ from "../components/FAQ/FAQ";
import dynamic from 'next/dynamic';
import Information from '../components/Information/Info';

const DynamicFaq = dynamic(() => import('../components/FAQ/FAQ'))
const DynamicProjects = dynamic(() => import('../components/Projects/Projects'))
const DynamicExample = dynamic(() => import('../components/Examples/Example'))
import { Analytics } from '@vercel/analytics/react';

const Home = () => {
  return (
    <Layout>
        <Section grid>
            <Hero />
            {/* <BgAnimation /> */}
        </Section>
        <DynamicExample />
        {/* <Technologies /> */}
        {/* <Timeline /> */}
        <Information/>
        <DynamicProjects />
        {/* <Acomplishments /> */}
        <DynamicFaq/>
        <Analytics />
        <ScrollToTop smooth />
    </Layout>
  );
};

export default Home;
