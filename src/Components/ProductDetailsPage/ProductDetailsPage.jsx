import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
    const { productId } = useParams();

    useEffect(() => {

    }, [productId]);

    return (
        <div>ProductDetailsPage {productId}</div>
    );
}

export default ProductDetailsPage;
