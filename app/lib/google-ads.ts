// lib/google-ads.ts
export const reportWaConversion = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-18127663798/PDY7CIex4qQcELbl-MND', // Gunakan ID & Label yang sama untuk semua tombol WA
    });
  }
};

