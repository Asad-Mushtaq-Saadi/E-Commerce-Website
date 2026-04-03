import React from 'react';
import Styles from './WishlistSection.module.css';
import Container from '../Building Blocks/Container/Container';
import WishlistCard from './WishlistCard';
import { useWishlist } from '../../context/WishlistContext';

const WishlistSection = () => {
    const { wishlistItems, removeFromWishlist } = useWishlist();

    return (
        <div className={Styles.wlSection}>
            <Container>
                <div className={Styles.wishlistGrid}>
                    {wishlistItems.length === 0 ? (
                        <p>Your wishlist is empty</p>
                    ) : (
                        wishlistItems.map(item => (
                            <WishlistCard 
                                key={item.id}
                                product={item}
                                onRemove={() => removeFromWishlist(item.id)}
                            />
                        ))
                    )}
                </div>
            </Container>
        </div>
    );
};

export default WishlistSection;