const { expect } = require('@jest/globals');

const posts = require('../db/posts.json');

const createSlug = (title) => {
    if (!title || title.trim() == '') {
        throw new Error('Titolo non presente')
    }
    
    if (typeof title !== 'string') { 
        return new Error('Titolo in formato sbagliato');
    }

    const slugs = posts.map(post => post.slug);

    if (!posts) {
        return new Error('Mancano i post');
    }

    const BaseSlug = title.toLowerCase().replace(' ', '-');

    let slug = BaseSlug;
    
    let counter = 1;
    
    while (slugs.includes(slug)) {
        slug = `${slug}-${counter}`;
        counter++;
    }
    
    return slug;   
}

test('createSlug dovrebbe ritornare una stringa', () => {
    expect(typeof createSlug('ciambellone')).toBe('string');
})

test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
    expect(createSlug('ciambellone')).toBe(createSlug('ciambellone').toLowerCase());
})

test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -', () => {
    expect(createSlug('ciambellone')).toBe(createSlug('ciambellone').replace(' ', '-'));
})

test('createSlug dovrebbe incrementare di 1 lo slug quando esiste già', () => {
    expect(() => createSlug().slugs).not.toContain(createSlug('ciambellone'));
})

test('createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato', () => {
    expect(() => createSlug('')).toThrow();
    expect(() => createSlug()).toThrow();
    expect(() => createSlug(Number)).toThrow();
    expect(() => createSlug(Array)).toThrow();
})

test('createSlug dovrebbe lanciare un errore se manca l\'array dei post', () => {
    expect(() => createSlug().tags).toThrow();
})