import React from 'react';
import './Trending.css'; 

export const Trending = ({ items }) => {
    const scrollRef = React.useRef();

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -200 : 200,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="trending-section">
            <h2 className="trend-head">Trending Now</h2>
            <div className="trending-container" ref={scrollRef}>
                {items.map((item, index) => (
                    <div className="trending-card" key={index}>
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
            <button className="scroll-button left" onClick={() => scroll('left')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></button>
            <button className="scroll-button right" onClick={() => scroll('right')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></button>
        </div>
    );
};


