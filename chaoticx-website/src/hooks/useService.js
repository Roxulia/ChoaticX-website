import { useContext } from 'react';
import { ServicesContext } from '../context';

export function useServices() {
  return useContext(ServicesContext);
}
