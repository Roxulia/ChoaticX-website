import { createContext } from 'react';
import { FetchHttp, SignalService } from '../services';

export const ServicesContext = createContext(null);

export function ServicesProvider({ children }) {
  const httpClient = new FetchHttp('/');
  const signalService = new SignalService(httpClient);

  const bag = { httpClient, signalService };

  return (
    <ServicesContext.Provider value={bag}>
      {children}
    </ServicesContext.Provider>
  );
}
