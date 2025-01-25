import React, {useState, useEffect} from 'react';
import Card from '../Components/Card';
import '../Style/Deck.css';

interface CardProps {
    title: string;
    description: string;
    image?: string; // Optional: If you want to display an image
    link?: string;  // Optional: If you want to add a link
  }

interface DeckProps {
    cards: CardProps[];
}

const Deck: React.FC<DeckProps> = ({cards}) =>{
    const [cardSelection, setCardSelection] = useState(0);

    const handleClick = () =>{
        setCardSelection(prevCardSelection => (prevCardSelection + 1) % cards.length);
    }

    return(
        <div className = "deck">
            <Card
            title={cards[cardSelection]?.title}
            description={cards[cardSelection]?.description}
            image={cards[cardSelection]?.image}
            link={cards[cardSelection]?.link}
            onClick={handleClick}
            />
        </div>
    )
}

export default Deck;