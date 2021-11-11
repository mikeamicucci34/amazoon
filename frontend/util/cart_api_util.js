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
        data: { itemId }
    })
)

export const fetchCartItems = () => (
    $.ajax({
        method: "GET",
        url: `/api/carts/`,
    })
)

export const fetchCartItem = (item) => (
    $.ajax({
        method: "GET",
        url: `/api/carts/${item.id}`,
    })
)

export const appendCartItem = (item) => {
    return (
        $.ajax({
            method: "PATCH",
            url: `/api/carts/${item.product_id}`,
            data: {item}
        })
    )
}
