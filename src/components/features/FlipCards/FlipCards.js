import { useEffect, useState } from 'react';
import Card from './Card';

const FlipCards = ({ cards, onAllCardsComplete }) => {
    const [cardData, setCardData] = useState([]);

    // copy and extend the data provided by JSON file
    useEffect(() => {
        const extendedData = cards.map((card, i) => {
            console.log(card);
            return {
                ...card,
                disabled: i === 0 ? false : true, // !!TODO: Add logic so only the first card is enabled by default
                completed: false
            };
        });
        setCardData(extendedData);
    }, [cards]);

    // add logic to check all cards complete after every interaction
    useEffect(() => {
        if (!cardData.length) return;

        // !!TODO: Add logic to check if all cards are complete after every interaction
        //ADD CODE HERE....
    }, [cardData, onAllCardsComplete]);

    // complete card after flip and unlock next card
    const handleCardFlipComplete = (index) => {
        //fix json index
        const arrIndex = index - 1;
        const newCardData = [...cardData];
        newCardData[arrIndex] = {
            ...cardData[arrIndex],
            completed: true
        };

        // !!TODO: Add logic to enabled the next card when the previous card is completed
        //ADD CODE HERE....
        if (index < cardData.length) {
            newCardData[arrIndex + 1] = {
                ...cardData[arrIndex + 1],
                disabled: false
            };
        }

        setCardData(newCardData);
    };

    return (
        <div style={{}}>
            {cardData.map((card) => {
                return <Card data={card} key={'card' + card.id} onCardComplete={handleCardFlipComplete} />;
            })}
        </div>
    );
};

export default FlipCards;
