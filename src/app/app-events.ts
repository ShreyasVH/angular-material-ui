export type AppEvent =
    | { type: 'LOADER_SHOW'; payload?: { text?: string } }
    | { type: 'LOADER_HIDE' }
    | { type: 'SNACKBAR_SHOW'; payload?: { message?: string, type?: string } }
    | { type: 'SNACKBAR_HIDE' }
    | { type: 'USER_LOGIN'; payload: { id: string } };
