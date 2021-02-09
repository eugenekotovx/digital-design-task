function features({ items }) {
    return <div className="services__list">
        {items.map(item => (
            <div key={item.id} className="services-item">
                <img className="services-item__image" src={item.imgSrc} />
                <div className="services-item__group">
                    <h1 className="services-item__title">{item.title}</h1>
                    <p className="services-item__description">{item.description}</p>
                </div>
            </div>
        ))}
    </div>
}
export default features