import React, { createContext, useState, useContext, useEffect } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) throw new Error('useWishlist must be used within WishlistProvider');
    return context;
};

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState(() => {
        const stored = localStorage.getItem('wishlistItems');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    const addToWishlist = (product) => {
        setWishlistItems(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (exists) return prev;
            return [...prev, product];
        });
    };

    const removeFromWishlist = (id) => {
        setWishlistItems(prev => prev.filter(item => item.id !== id));
    };

    const isInWishlist = (id) => {
        return wishlistItems.some(item => item.id === id);
    };

    return (
        <WishlistContext.Provider value={{
            wishlistItems,
            addToWishlist,
            removeFromWishlist,
            isInWishlist
        }}>
            {children}
        </WishlistContext.Provider>
    );
};