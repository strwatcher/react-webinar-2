import {createContext} from 'react';
import {articleModel} from './exports';

export class EffectorService {
  constructor(services, config = {}) {
    this.services = services;
    this.config = config;
    this.article = articleModel(this.services);
  }
}

export const EffectorContext = createContext();
