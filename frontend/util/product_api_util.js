
export const fetchProduct = (productId) => (
    $.ajax ({
        method: "GET",
        url: `/api/products/${productId}`,
    })
)

export const fetchProducts = (query) => (
    $.ajax ({
        method: "GET",
        url: `/api/products`,
        data: { query }
    })
)