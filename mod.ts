// Copyright 2019 OnikurYH. All rights reserved. MIT license.

const regexNoSpaceBetweenCharacters = [
  "[\\u3100-\\u312F]", // Bopomofo
  "[\\u31A0-\\u31BF]", // Bopomofo Extended

  "[\\u4E00-\\u9FFF]", // CJK Unified Ideographs (Han)
  "[\\u3400-\\u4DBF]", // CJK Extension A
  "[\\u{20000}-\\u{2A6DF}]", // CJK Extension B
  "[\\u{2A700}-\\u{2B73F}]", // CJK Extension C
  "[\\u{2B740}-\\u{2B81F}]", // CJK Extension D
  "[\\u{2B820}-\\u{2CEAF}]", // CJK Extension E
  "[\\u{2CEB0}-\\u{2EBE0}]", // CJK Extension F
  "[\\u3190-\\u319F]", // Kanbun

  "[\\u3040-\\u309F]", // Hiragana
  "[\\u{1B100}-\\u{1B12F}]", // Kana Extended-A
  "[\\u{1B000}-\\u{1B0FF}]", // Kana Supplement
  "[\\u{1B130}-\\u{1B16F}]", // Small Kana Extension
  "[\\u30A0-\\u30FF]", // Katakana
  "[\\u31F0-\\u31FF]", // Katakana Phonetic Extensions
  "[\\uFF65-\\uFF9F]", // Halfwidth Katakana

  "[\\u1100-\\u11FF]", // Hangul Jamo
  "[\\uA960-\\uA97F]", // Hangul Jamo Extended-A
  "[\\uD7B0-\\uD7FF]", // Hangul Jamo Extended-B
  "[\\u3130-\\u318F]", // Hangul Compatibility Jamo
  "[\\uFFA0-\\uFFDC]", // Halfwidth Jamo
  "[\\uAC00-\\uD7AF]" // Hangul Syllables
].join("|");

/**
 * Trim extra spaces between characters from a string
 * @param str The string have to process
 */
export function prettystring(str: string) {
  return str
    .split("\n")
    .map(s =>
      s
        .replace(/\s+(?=!|\?|,|\.|！|，|、|。)/g, "")
        .replace(
          new RegExp(`\\s+(?=${regexNoSpaceBetweenCharacters})`, "ug"),
          ""
        )
        .replace(
          new RegExp(`(\\w)(?=${regexNoSpaceBetweenCharacters})`, "ug"),
          "$1 "
        )
        .replace(/\s+/g, " ")
        .trim()
    )
    .join("\n");
}

export default prettystring;
