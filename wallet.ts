// Freighter API için window tipini genişlet
export interface FreighterApi {
  isConnected: () => Promise<boolean>;
  getPublicKey: () => Promise<{ publicKey: string }>;
  getNetwork: () => Promise<'PUBLIC' | 'TESTNET'>;
  signTransaction: (xdr: string, options?: { networkPassphrase?: string }) => Promise<string>;
}

declare global {
  interface Window {
    freighterApi?: FreighterApi;
  }
}

export interface WalletState {
  isConnected: boolean;
  publicKey: string | null;
  isFreighterInstalled: boolean;
  isTestnet: boolean;
  loading: boolean;
  error: string | null;
}

export interface WalletContextType extends WalletState {
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  checkFreighterInstalled: () => boolean;
  verifyNetwork: () => Promise<boolean>;
}
