
export const fetchProducts = () => (
    $.ajax ({
        method: "GET",
        url: `/api/product`,
    })
)