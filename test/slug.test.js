const { expect } = require('@jest/globals');

const posts = require('../db/posts.json');
const slugs = posts.map(post => post.slug);

console.log(slugs);

const createSlug = () => {
    let slug = 'ciambellone';

    if (typeof slug !== 'string') { 
        return slug.toString().toLowerCase().replace(' ', '-');
    }

    let counter = 1;

    while (slugs.includes(slug)) {
        slug = `${slug}-${counter}`;
        counter++;
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

test('createSlug dovrebbe incrementare di 1 lo slug quando esiste già', () => {
    expect(slugs).not.toContain(createSlug());
})