import { useContext } from 'react';
import { ServicesContext } from '../contexts';

export function useServices() {
  return useContext(ServicesContext);
}
