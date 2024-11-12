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
        <button onClick={handleClick} className={`fixed block -right-2 bottom-5 lg:right-5 z-30 cursor-pointer ${showButton ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out bg-white border-r-0 lg:border-r-2 border-2 p-1 rounded-l-full lg:rounded-full border-sc-600 text-sc-600 hover:bg-gray-200`}>
            <ArrowUp size={25} />
        </button>
    );
};

export default BackToTop;