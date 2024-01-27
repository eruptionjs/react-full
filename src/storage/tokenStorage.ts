import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

const isDev = import.meta.env.MODE === 'development'

type Token = {
  accessToken: string | null
  refreshToken: string | null
}

type Actions = {
  setAccessToken: (accessToken: string) => void
  setRefreshToken: (refreshToken: string) => void
}

const useTokenStorage = create<Token & Actions>()(
  devtools(
    persist(
      (set) => ({
        accessToken: null,
        refreshToken: null,
        setAccessToken: (accessToken) => set({ accessToken }),
        setRefreshToken: (refreshToken) => set({ refreshToken }),
      }),
      {
        name: 'TokenStore',
        storage: createJSONStorage(() => localStorage),
        partialize: ({ accessToken, refreshToken }) => ({
          accessToken,
          refreshToken,
        }),
      },
    ),
    {
      store: 'TokenStore',
      enabled: isDev,
    },
  ),
)

export { useTokenStorage, type Token }
