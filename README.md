# deno-solospace

> A deno module for trim and remove extra spaces between characters. Make paragraph looks organised.

## Usage

```ts
import solospace from './mod.ts';

const formattedEnglish = solospace('solospace    can  make     a paragraph   looks      better    !');
// solospace can make a paragraph looks better!

const fomattedMixedCharacters = solospace('  這個    solospace    可   以  使段落看  起來  更好  ！     良     い  で  す   。  ε٩(๑>    ₃ <)۶з');
// 這個 solospace 可以使段落看起來更好！良いです。 ε٩(๑> ₃ <)۶з'
```

You could find more use cases in `test.ts`

## Run test

```ts
deno test.ts
```

## Copyright and license
Licensed under the MIT license.
