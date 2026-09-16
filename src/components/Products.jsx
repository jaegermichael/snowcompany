export default function Products() {
  const products = [
    { title: 'Ice production', desc: 'Commercial machines. From 60 to 120kg per day.', href: '#ice-machines', image: '/images/60 kgs per 24 hours.jpeg', type: 'machine' },
    { title: 'Ice cream & gelato', desc: 'Soft serve, batch freezers, and gelato equipment.', href: '#ice-cream', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1600&q=90', type: 'lifestyle' },
  ];
  return (
    <section id="products" className="collection-section">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="collection-heading"><div><p className="eyebrow">The equipment collection</p><h2>Good business starts<br />with the right machine.</h2></div><p>From your first scoop to your busiest service, find equipment that works as hard as you do.</p></div>
        <div className="collection-grid">{products.map((product, i) => <a className={`collection-item ${product.type}`} href={product.href} key={product.title}><div className="collection-image"><span className="collection-number">0{i + 1}</span><img src={product.image} alt={i === 0 ? 'Commercial ice production machine' : 'Ice cream served in bowls'} loading="lazy" /></div><div className="collection-caption"><div><h3>{product.title}</h3><p>{product.desc}</p></div><span aria-hidden="true">↗</span></div></a>)}</div>
      </div>
    </section>
  );
}
