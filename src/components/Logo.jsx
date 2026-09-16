export default function Logo({ inverse = false }) {
  return <img className="brand-logo" src={inverse ? '/brand/logo-white.svg' : '/brand/logo.svg'} alt="Frozen Solutions" width="240" height="64" />;
}
