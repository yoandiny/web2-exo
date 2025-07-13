import { useEffect, useRef, useState } from "react";
import "./styles/Slider2.css";
import Mirado from "../assets/Mirado.jpg";
import Julien from "../assets/Julien-150x150.jpg";
import Ryan from "../assets/Ryan.jpg";
import Jean from "../assets/Jean-Aime.jpg";
import Parison from "../assets/Parison.png";
import Yannick from "../assets/Yannick.jpg";
import Tahina from "../assets/Tahina.png";
import Lou from "../assets/Lou.jpg";

const enseignants = [
    {
        nom: "Mirado RAFENOMAHENINTSOA",
        description: "Data and Business Intelligence Specialist 5+",
        image: Mirado,
    },
    {
        nom: "Julien RAJERISON",
        description: "Lead Développeur | Fondateur de l'association Techzara",
        image: Julien,
    },
    {
        nom: "Ryan ANDRIAMAHERY",
        description: "Développeur back end | Cofondateur et Directeur des opérations de HEI",
        image: Ryan,
    },
    {
        nom: "Jean Aimé Maxa",
        description: "Responsable technique cybersécurité chez CES  France Continental(Toulouse - France)",
        image: Jean,
    },
    {
        nom: "Parisson Ravalomanda",
        description: "Ingénieur en informatique | Ingénieur logiciel chez Google (Londres - UK)",
        image: Parison,
    },
    {
        nom: "Yannick Raharijaona",
        description: "Responsable technique ML chez Rocket Science (Ottawa - Canada)",
        image: Yannick,
    },
    {
        nom: "Dre Tahina Ralitera",
        description: "Docteure-Ingénieure, CNRS France | Prix L'Oréal-UNESCO pour les Femmes en Science (2017)",
        image: Tahina,
    },
    {
        nom: "Dr Lou Maurica",
        description: "Docteure-Ingénieure en informatique | Fondateur et Directeur pédagogique de HEI",
        image: Lou,
    },
];

const extendedCards = [...enseignants, ...enseignants.slice(0, 3)];

const Slider2 = () => {
    const [index, setIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const slideInterval = useRef(null);
    const timeoutRef = useRef(null);
    const visibleCount = 3;

    const goToSlide = (i) => {
        setIndex(i);
        setIsTransitioning(true);
    };

    const next = () => {
        if (index < enseignants.length) goToSlide(index + 1);
    };

    const prev = () => {
        if (index > 0) goToSlide(index - 1);
    };

    useEffect(() => {
        slideInterval.current = setInterval(() => {
            next();
        }, 5000);
        return () => clearInterval(slideInterval.current);
    }, [index]);

    useEffect(() => {
        if (index === enseignants.length) {
            timeoutRef.current = setTimeout(() => {
                setIsTransitioning(false);
                setIndex(0);
            }, 600);
        }
        return () => clearTimeout(timeoutRef.current);
    }, [index]);

}