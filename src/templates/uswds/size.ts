export default (size) => {
  switch (size) {
    case 'md': return 'tablet';
    case 'sm': return 'mobile-lg';
    case 'lg': return 'desktop';
    default: return 'tablet';
  }
};