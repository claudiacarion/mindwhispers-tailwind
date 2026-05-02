import type { Affirmation } from '../types/Affirmation';

export const GetAffirmation = async ():Promise<Affirmation> => {
  const response = await fetch('/api/?ref=freepublicapis.com')
    .then(res => res.json());
  console.log(response);

  return response;
}