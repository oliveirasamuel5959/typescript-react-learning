  export function getStatus(progress) {
    if (progress < 33) return 'Preparing';
    if (progress < 66) return 'Shipped';
    return 'Delivered';
  }