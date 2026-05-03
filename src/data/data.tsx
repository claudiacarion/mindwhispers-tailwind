import type { AffirmationType } from '../types/Affirmation';

export const GetAffirmation = async (): Promise<AffirmationType> => {
  const response = await fetch('/api/affirmation');
  const data = await response.json()

  return data;
}