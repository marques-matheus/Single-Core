import { useState, useEffect } from 'react';
import { ArrowUp } from 'react-feather';

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button onClick={handleClick} className={`fixed hidden md:block bottom-5 right-5 z-30 cursor-pointer ${showButton ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out bg-white border-2 p-1 rounded-full border-sc-600 text-sc-600 hover:bg-gray-200`}>
            <ArrowUp size={25} />
        </button>
    );
};

export default BackToTop;