import { useState, useEffect } from 'react';

interface LocationData {
  countryCode: string | null;
  isUS: boolean;
  loading: boolean;
}

export function useClientLocation(): LocationData {
  const [location, setLocation] = useState<LocationData>({
    countryCode: null,
    isUS: false,
    loading: true,
  });

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // Use ip-api.com which supports CORS (free tier: 45 requests/minute)
        const response = await fetch('https://ip-api.com/json/?fields=countryCode', {
          method: 'GET',
        });

        if (response.ok) {
          const data = await response.json();
          const countryCode = data.countryCode;

          if (countryCode) {
            const usCountries = ['US', 'CA', 'MX']; // US, Canada, Mexico

            setLocation({
              countryCode,
              isUS: usCountries.includes(countryCode),
              loading: false,
            });
            return;
          }
        }
      } catch (error) {
        // Silently fail - use default values
        console.debug('Geolocation not available, using defaults');
      }

      // Default: assume non-US (shows CET)
      setLocation({
        countryCode: null,
        isUS: false,
        loading: false,
      });
    };

    fetchLocation();
  }, []);

  return location;
}
