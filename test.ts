import { runTests, test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import prettystring from "./mod.ts";

test(function stringWithExtraSpaces() {
  const actual = prettystring(
    "prettystring    can  make     a paragraph   looks      better    !\n   Than good  .  "
  );
  assertEquals(
    actual,
    "prettystring can make a paragraph looks better!\nThan good."
  );
});

test(function stringWithTabs() {
  const actual = prettystring(
    "prettystring	can	make	a paragraph			looks		better			!\n   Than good  .  "
  );
  assertEquals(
    actual,
    "prettystring can make a paragraph looks better!\nThan good."
  );
});

test(function stringWithoutExtraSpaces() {
  const actual = prettystring(
    "prettystring can make a paragraph looks better!\nThan good."
  );
  assertEquals(
    actual,
    "prettystring can make a paragraph looks better!\nThan good."
  );
});

test(function stringWithExtraSpacesAndComma() {
  const actual = prettystring(
    "prettystring    can  make     a paragraph   looks      better    ,   than good  .  "
  );
  assertEquals(
    actual,
    "prettystring can make a paragraph looks better, than good."
  );
});

test(function stringInStringTemplate() {
  const actual = prettystring(`    prettystring         can    make a     paragraph    looks    better!
                              Than      good  .   `);
  assertEquals(
    actual,
    "prettystring can make a paragraph looks better!\nThan good."
  );
});

test(function stringAreNoNeedSpacesBetweenCharacters() {
  const actual = prettystring(
    "  この    prettystring   は  段  落　　をよ  り良 くす　るこ   とがで   きます  。  \n     良     い  で  す   。  ε٩(๑>    ₃ <)۶з"
  );
  assertEquals(
    actual,
    "この prettystring は段落をより良くすることができます。\n良いです。 ε٩(๑> ₃ <)۶з"
  );
});

test(function stringAreNoNeedSpacesBetweenCharactersWithComma() {
  const actual = prettystring("  這個 　 prettystring   ，　　可   以  使段落看  起來  更好  ！");
  assertEquals(
    actual,
    "這個 prettystring，可以使段落看起來更好！"
  );
});

runTests();
