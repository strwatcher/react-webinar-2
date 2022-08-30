import {useContext} from 'react';
import {EffectorContext} from '../services/effector-service';

export function useEffector() {
  const effectorContext = useContext(EffectorContext);

  return {models: effectorContext.models};
}
