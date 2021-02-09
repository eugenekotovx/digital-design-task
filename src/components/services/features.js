function features({ items }) {
    return <div className="features">
        {items.map(item => (
            <div key={item.id} className="features-item">
                <img className="features-item__image" src={item.imgSrc} />
                <div className="features-item__group">
                    <h1 className="features-item__title">{item.title}</h1>
                    <p className="features-item__description">{item.description}</p>
                </div>
            </div>
        ))}
    </div>
}
export default features