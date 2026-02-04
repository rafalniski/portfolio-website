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
        // Use reallyfreegeoip.org (no API key, no rate limits, CORS enabled)
        const response = await fetch('https://reallyfreegeoip.org/json/', {
          method: 'GET',
        });

        if (response.ok) {
          const data = await response.json();
          const countryCode = data.country_code;

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
