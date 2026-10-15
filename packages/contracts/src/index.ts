// Export contracts configurations and utilities
export const SOROBAN_NETWORKS = {
  LOCAL: {
    networkPassphrase: 'Standalone Network ; February 2017',
    rpcUrl: 'http://localhost:8000/soroban/rpc',
  },
  TESTNET: {
    networkPassphrase: 'Test SDF Network ; September 2015',
    rpcUrl: 'https://soroban-testnet.stellar.org',
  },
  MAINNET: {
    networkPassphrase: 'Public Global Stellar Network ; September 2015',
    rpcUrl: 'https://soroban-rpc.stellar.org',
  },
} as const;

export * from './networks';

export * as EscrowClient from './generated/escrow/src';
