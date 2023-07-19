import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "jest"
  },
};

export default config;