import type { AffirmationType } from '../types/Affirmation';

export const GetAffirmation = async ():Promise<AffirmationType> => {
  const response = await fetch('/api/?ref=freepublicapis.com')
    .then(res => res.json());
  console.log(response);

  return response;
}