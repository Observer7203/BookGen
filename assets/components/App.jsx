import React, { useState } from "react";
import BookList from "./BookList";

const App = () => {
    const [seed, setSeed] = useState(42);
    const [lang, setLang] = useState("en_US");
    const [likes, setLikes] = useState(3.7);
    const [reviews, setReviews] = useState(4.7);

    const randomizeSeed = () => {
        setSeed(Math.floor(Math.random() * 100000));
    };

    return (
        <div>
            <h1>Book Store Generator</h1>
            <label>Language:</label>
            <select value={lang} onChange={(e) => setLang(e.target.value)}>
                <option value="en_US">English (USA)</option>
                <option value="de_DE">German (Germany)</option>
                <option value="fr_FR">French (France)</option>
            </select>
            <button onClick={randomizeSeed}>🔀 Random Seed</button>
            <input type="number" value={seed} onChange={(e) => setSeed(Number(e.target.value))} />
            <BookList seed={seed} lang={lang} likes={likes} reviews={reviews} />
        </div>
    );
};

export default App;
