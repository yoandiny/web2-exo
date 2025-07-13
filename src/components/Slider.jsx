import { useState, useEffect, useRef } from "react";
import heiBanner1 from "../assets/hei-banner-1.jpg";
import heiBanner2 from "../assets/hei-banner-2.jpg";
import heiBanner3 from "../assets/hei-banner-3.jpg";
import "./styles/Slider.css";

const slides = [
    {
        image: heiBanner1,
        description: "Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l'employabilité de nos étudiants.",
    },
    {
        image: heiBanner2,
        description: "«L’éducation est l’arme la plus puissante pour changer le monde» selon Nelson Mandela. «L’éducation dans l’informatique est une arme très puissante pour lutter contre la pauvreté à Madagascar» selon HEI. C’est notre mission.",
    },
    {
        image: heiBanner3,
        description: "Des entreprises partenaires et une équipe pédagogique et administrative qui travaille sans relâche pour la montée en compétences de nos étudiants.",
    },
];
const extendedSlides = [...slides, slides[0]];


export default function Slider() {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const slideInterval = useRef(null);
    const timeoutRef = useRef(null);

    const goToSlide = (index) => {
        setCurrent(index);
        setIsTransitioning(true);
    };

    const nextSlide = () => {
        if (current < slides.length) {
            goToSlide(current + 1);
        }
    };

    const prevSlide = () => {
        if (current > 0) {
            goToSlide(current - 1);
        }
    };

    useEffect(() => {
        slideInterval.current = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(slideInterval.current);
    }, [current, nextSlide]);

    useEffect(() => {
        if (current === slides.length) {
            timeoutRef.current = setTimeout(() => {
                setIsTransitioning(false);
                setCurrent(0);
            }, 700);
        }
        return () => clearTimeout(timeoutRef.current);
    }, [current]);

    return (
        <div className="slider">
            <div
                className={`slides-wrapper ${isTransitioning ? "transition" : ""}`}
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {extendedSlides.map((slide, index) => (
                    <div
                        key={index}
                        className="slide"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                        }}
                    >
                        <div className="slide-content">
                            <h1>Haute Ecole d'Informatique</h1>
                            <p>{slide.description}</p>
                            <div className="button-container">
                                <button className="main-btn">Inscrivez-vous ici</button>
                                <button>Emploi du temps</button>
                                <button>Programme pédagogique</button>
                            </div>
                            <p>Habilitation MESupRES, suivant l'arrêté n°31309/2023</p>
                        </div>
                    </div>
                ))}
            </div>

            <button id="left-btn" onClick={() => { prevSlide(); clearInterval(slideInterval.current); }}>❮</button>
            <button id="right-btn" onClick={() => { nextSlide(); clearInterval(slideInterval.current); }}>❯</button>

            <div className="pagination">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrent(index);
                            setIsTransitioning(true);
                            clearInterval(slideInterval.current);
                        }}
                        className={`dot ${current === index ? "active" : ""}`}
                    />
                ))}
            </div>

        </div>
    )
}
