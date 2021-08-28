export default function ReviewItem({title, price,qty}) {
    const priceFormating = `R$ ${(price*qty).toFixed(2).replace('.',',')}`;

    return (
        <div class="confirm-order-item">
            <p>{title}    x{qty}</p>
            <p>{priceFormating}</p>
        </div>
    )
}