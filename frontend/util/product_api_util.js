
export const fetchProduct = (productId) => (
    $.ajax ({
        method: "GET",
        url: `/api/product/${productId}`,
    })
)

export const fetchProducts = () => (
    $.ajax ({
        method: "GET",
        url: `/api/product`,
    })
)