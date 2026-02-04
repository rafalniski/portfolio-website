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
    // Geolocation disabled due to CORS issues with free APIs
    // Default: assume non-US (shows CET)
    // Users can manually select their preference if needed in the future
    setLocation({
      countryCode: null,
      isUS: false,
      loading: false,
    });
  }, []);

  return location;
}
