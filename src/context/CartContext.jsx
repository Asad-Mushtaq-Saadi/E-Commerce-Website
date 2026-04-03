import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Add product to cart (or increase quantity if already exists)
    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existing = prevItems.find(item => item.id === product.id);
            if (existing) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    // Remove item completely
    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    // Update quantity of an item
    const updateQuantity = (id, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(id);
        } else {
            setCartItems(prev =>
                prev.map(item =>
                    item.id === id ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    };

    // Clear entire cart
    const clearCart = () => setCartItems([]);

    // Compute total price
    const getCartTotal = () => {
        return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getCartTotal
        }}>
            {children}
        </CartContext.Provider>
    );
};