export default function Product(props) {
    const { item, product, onAdd, onRemove } = props;
    return (
        <div className="Card">
            <img className="small" src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div className="price">${product.prices}</div>
            <div>
                {item ? (<div>
                    <button onClick={() => onRemove(item)} className="remove">
                        -
                    </button>
                    <span className="p-1" >{item.qty}</span>
                    <button onClick={() => onAdd(item)} className="add">
                        +
                    </button>
                </div>
                ):(
                <button onClick={() => onAdd(product)}>Add To Cart</button>
                )}

            </div>
        </div >
    );
}