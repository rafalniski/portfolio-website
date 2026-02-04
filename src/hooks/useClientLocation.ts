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
        const response = await fetch('https://ipapi.co/json/', {
          method: 'GET'
        });
        const data = await response.json();
        const countryCode = data.country_code;

        const usCountries = ['US', 'CA', 'MX']; // US, Canada, Mexico

        setLocation({
          countryCode,
          isUS: usCountries.includes(countryCode),
          loading: false,
        });
      } catch (error) {
        console.error('Error fetching location:', error);
        setLocation({
          countryCode: null,
          isUS: false,
          loading: false,
        });
      }
    };

    fetchLocation();
  }, []);

  return location;
}
