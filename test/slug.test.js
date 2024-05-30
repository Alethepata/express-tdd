const { expect } = require('@jest/globals');

const createSlug = () => {
    return ''
}

test('createSlug dovrebbe ritornare una stringa', () => {
    expect(typeof createSlug()).toBe('string');
})