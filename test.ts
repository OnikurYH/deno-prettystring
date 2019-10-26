import { runTests, test } from 'https://deno.land/std/testing/mod.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import solospace from './mod.ts';

test(function stringWithExtraSpaces() {
    const actual = solospace('solospace    can  make     a paragraph   looks      better    !\n   Than good  .  ');
    assertEquals(actual, 'solospace can make a paragraph looks better!\nThan good.');
});

test(function stringWithoutExtraSpaces() {
    const actual = solospace('solospace can make a paragraph looks better!\nThan good.');
    assertEquals(actual, 'solospace can make a paragraph looks better!\nThan good.');
});

test(function stringWithExtraSpacesAndComma() {
    const actual = solospace('solospace    can  make     a paragraph   looks      better    ,   than good  .  ');
    assertEquals(actual, 'solospace can make a paragraph looks better, than good.');
});

test(function stringInStringTemplate() {
    const actual = solospace(`    solospace         can    make a     paragraph    looks    better!
                              Than      good  .   `);
    assertEquals(actual, 'solospace can make a paragraph looks better!\nThan good.');
});

test(function stringAreNoNeedSpacesBetweenCharacters() {
    const actual = solospace('  這個    solospace    可   以  使段落看  起來  更好  ！\n     良     い  で  す   。  ε٩(๑>    ₃ <)۶з');
    assertEquals(actual, '這個 solospace 可以使段落看起來更好！\n良いです。 ε٩(๑> ₃ <)۶з');
});

runTests();
