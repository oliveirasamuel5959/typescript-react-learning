import dayjs from 'dayjs';

export function calculateDeliveryProgress(createdAt, estimatedDeliveryTimeMs) {
  const start = dayjs(createdAt).valueOf();
  const end = estimatedDeliveryTimeMs;
  const now = Date.now();

  if (now >= end) return 100;
  
  if (now <= start) return 0;

  const progress = (now - start) / (end - start);
  return Math.round(progress * 100);
}
