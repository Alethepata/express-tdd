const { expect } = require('@jest/globals');

const createSlug = () => {
    let slug = 'slug';

    if (typeof slug !== 'string') { 
        return slug.toString().toLowerCase();
    }
    return slug.toLowerCase();   
}

test('createSlug dovrebbe ritornare una stringa', () => {
    expect(typeof createSlug()).toBe('string');
})

test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
    expect(createSlug()).toBe(createSlug().toLowerCase());
})