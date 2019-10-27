# deno-prettystring

> A deno module for trim and remove extra spaces between characters. Make paragraph looks organised.

## Usage

```ts
import prettystring from "https://deno.land/x/prettystring/mod.ts";

const formattedEnglish = prettystring(
  "prettystring    can  make     a paragraph   looks      better    !"
);
// prettystring can make a paragraph looks better!

const fomattedMixedCharacters = prettystring(
  "  這個    prettystring    可   以  使段落看  起來  更好  ！     良     い  で  す   。  ε٩(๑>    ₃ <)۶з"
);
// 這個 prettystring 可以使段落看起來更好！良いです。 ε٩(๑> ₃ <)۶з
```

You could find more use cases in `test.ts`

## Run test

```ts
deno test.ts
```

## Copyright and license

Licensed under the MIT license.
