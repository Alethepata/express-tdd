const { expect } = require('@jest/globals');

const createSlug = () => {
    let slug = 'slug prova';

    if (typeof slug !== 'string') { 
        return slug.toString().toLowerCase().replace(' ', '-');
    }
    return slug.toLowerCase().replace(' ', '-');   
}

test('createSlug dovrebbe ritornare una stringa', () => {
    expect(typeof createSlug()).toBe('string');
})

test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
    expect(createSlug()).toBe(createSlug().toLowerCase());
})

test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -', () => {
    expect(createSlug()).toBe(createSlug().replace(' ', '-'));
})