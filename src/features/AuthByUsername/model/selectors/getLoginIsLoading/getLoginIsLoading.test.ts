import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    test('should return true if isLoading is true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { isLoading: true },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should return false if isLoading is false', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { isLoading: false },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });

    test('should return false if loginForm is undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
