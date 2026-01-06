import { MaterialIcon } from '../ui';

export function TrustBadges() {
  const badges = [
    {
      icon: 'store',
      text: 'Built for Shopify stores',
    },
    {
      icon: 'shield',
      text: 'Privacy-first',
    },
    {
      icon: 'bolt',
      text: 'Fast setup',
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6 text-sm text-charcoal/60">
      {badges.map((badge, index) => (
        <div key={index} className="flex items-center gap-2">
          <MaterialIcon name={badge.icon} size={18} className="text-charcoal/40" />
          <span>{badge.text}</span>
        </div>
      ))}
    </div>
  );
}
