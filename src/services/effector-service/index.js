import {createContext} from 'react';
import * as models from './exports';

export class EffectorService {
  constructor(services, config = {}) {
    this.services = services;
    this.config = config;
    this.models = {};
    for (const name of Object.keys(models)) {
      this.models[name] = models[name](services);
    }
  }
}

export const EffectorContext = createContext();
