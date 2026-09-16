export default function FeatureCards() {
  const features = [
    { number: '01', title: 'Less energy. More possibility.', desc: 'Efficient commercial equipment that keeps operating costs in check.' },
    { number: '02', title: 'The right size for your ambition.', desc: 'Production capacity matched to your space, demand, and business.' },
    { number: '03', title: 'Here for the long run.', desc: 'Local installation, operator training, genuine parts, and maintenance.' },
  ];
  return <section className="service-strip" aria-label="Equipment benefits">{features.map(feature => <article key={feature.number}><span>{feature.number}</span><div><h3>{feature.title}</h3><p>{feature.desc}</p></div></article>)}</section>;
}
