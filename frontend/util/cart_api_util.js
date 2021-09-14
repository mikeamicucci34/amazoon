export const addCartItem = (item) => (
    $.ajax({
        method: "POST",
        url: `/api/carts`,
        data: { item }
    })
)

export const removeCartItem = (itemId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/carts/${itemId}`,
    })
)

export const fetchCartItems = () => (
    $.ajax({
        method: "GET",
        url: `/api/carts/`,
    })
)

export const fetchCartItem = (itemId) => (
    $.ajax({
        method: "GET",
        url: `/api/carts/${itemId}`,
    })
)
