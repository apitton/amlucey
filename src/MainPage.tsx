import ScrollAnimationObserver from "./components/ScrollAnimationObserver";
import Experience from "./components/Experience";
import Profile from "./components/Profile";
import Hero from "./components/Hero";
import Spacer from "./components/Spacer";
import { Element } from "react-scroll";
import Contact from "./components/Contact";
import { useState } from "react";

export default function MainPage() {
    
    return (
        <ScrollAnimationObserver setCurrentNav={setCurrentNav}>
            <Element id= "" name="/">
                {/*nbNav>0 && <Spacer />*/}
                <Hero />
            </Element>
            <Element id = "/experience" name="/experience">
                <Spacer />
                <Experience />
            </Element>
            <Element id = "/profile" name="/profile">
                <Spacer />
                <Profile />
            </Element>
            <Element id="/contact" name="/contact">
                <Spacer />
                <Contact />
            </Element>
        </ScrollAnimationObserver>
    )
}