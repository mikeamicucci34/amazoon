
export const fetchProduct = (productId) => (
    $.ajax ({
        method: "GET",
        url: `/api/products/${productId}`,
    })
)

export const fetchProducts = () => (
    $.ajax ({
        method: "GET",
        url: `/api/product`,
    })
)