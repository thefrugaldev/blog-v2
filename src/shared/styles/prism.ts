import { css } from "@emotion/react";
// import { theme } from "@chakra-ui/react";

export const prismDarkTheme = css`
  code[class*="language-"],
  pre[class*="language-"] {
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    color: #eee;
    background: #2f2f2f;
    font-family: Roboto Mono, monospace;
    font-size: 1em;
    line-height: 1.5em;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  code[class*="language-"]::-moz-selection,
  pre[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection,
  pre[class*="language-"] ::-moz-selection {
    background: #363636;
  }

  code[class*="language-"]::selection,
  pre[class*="language-"]::selection,
  code[class*="language-"] ::selection,
  pre[class*="language-"] ::selection {
    background: #363636;
  }

  :not(pre) > code[class*="language-"] {
    white-space: normal;
    border-radius: 0.2em;
    padding: 0.1em;
  }

  pre[class*="language-"] {
    overflow: auto;
    position: relative;
    margin: 0.5em 0;
    padding: 1.25em 1em;
  }

  .language-css > code,
  .language-sass > code,
  .language-scss > code {
    color: #fd9170;
  }

  [class*="language-"] .namespace {
    opacity: 0.7;
  }

  .token.atrule {
    color: #c792ea;
  }

  .token.attr-name {
    color: #ffcb6b;
  }

  .token.attr-value {
    color: #a5e844;
  }

  .token.attribute {
    color: #a5e844;
  }

  .token.boolean {
    color: #c792ea;
  }

  .token.builtin {
    color: #ffcb6b;
  }

  .token.cdata {
    color: #80cbc4;
  }

  .token.char {
    color: #80cbc4;
  }

  .token.class {
    color: #ffcb6b;
  }

  .token.class-name {
    color: #f2ff00;
  }

  .token.comment {
    color: #616161;
  }

  .token.constant {
    color: #c792ea;
  }

  .token.deleted {
    color: #ff6666;
  }

  .token.doctype {
    color: #616161;
  }

  .token.entity {
    color: #ff6666;
  }

  .token.function {
    color: #c792ea;
  }

  .token.hexcode {
    color: #f2ff00;
  }

  .token.id {
    color: #c792ea;
    font-weight: bold;
  }

  .token.important {
    color: #c792ea;
    font-weight: bold;
  }

  .token.inserted {
    color: #80cbc4;
  }

  .token.keyword {
    color: #c792ea;
  }

  .token.number {
    color: #fd9170;
  }

  .token.operator {
    color: #89ddff;
  }

  .token.prolog {
    color: #616161;
  }

  .token.property {
    color: #80cbc4;
  }

  .token.pseudo-class {
    color: #a5e844;
  }

  .token.pseudo-element {
    color: #a5e844;
  }

  .token.punctuation {
    color: #89ddff;
  }

  .token.regex {
    color: #f2ff00;
  }

  .token.selector {
    color: #ff6666;
  }

  .token.string {
    color: #a5e844;
  }

  .token.symbol {
    color: #c792ea;
  }

  .token.tag {
    color: #ff6666;
  }

  .token.unit {
    color: #fd9170;
  }

  .token.url {
    color: #ff6666;
  }

  .token.variable {
    color: #ff6666;
  }
`;

export const prismLightTheme = css`
  code[class*="language-"],
  pre[class*="language-"] {
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    color: #90a4ae;
    background: #fafafa;
    font-family: Roboto Mono, monospace;
    font-size: 1em;
    line-height: 1.5em;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  code[class*="language-"]::-moz-selection,
  pre[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection,
  pre[class*="language-"] ::-moz-selection {
    background: #cceae7;
    color: #263238;
  }

  code[class*="language-"]::selection,
  pre[class*="language-"]::selection,
  code[class*="language-"] ::selection,
  pre[class*="language-"] ::selection {
    background: #cceae7;
    color: #263238;
  }

  :not(pre) > code[class*="language-"] {
    white-space: normal;
    border-radius: 0.2em;
    padding: 0.1em;
  }

  pre[class*="language-"] {
    overflow: auto;
    position: relative;
    margin: 0.5em 0;
    padding: 1.25em 1em;
  }

  .language-css > code,
  .language-sass > code,
  .language-scss > code {
    color: #f76d47;
  }

  [class*="language-"] .namespace {
    opacity: 0.7;
  }

  .token.atrule {
    color: #7c4dff;
  }

  .token.attr-name {
    color: #39adb5;
  }

  .token.attr-value {
    color: #f6a434;
  }

  .token.attribute {
    color: #f6a434;
  }

  .token.boolean {
    color: #7c4dff;
  }

  .token.builtin {
    color: #39adb5;
  }

  .token.cdata {
    color: #39adb5;
  }

  .token.char {
    color: #39adb5;
  }

  .token.class {
    color: #39adb5;
  }

  .token.class-name {
    color: #6182b8;
  }

  .token.comment {
    color: #aabfc9;
  }

  .token.constant {
    color: #7c4dff;
  }

  .token.deleted {
    color: #e53935;
  }

  .token.doctype {
    color: #aabfc9;
  }

  .token.entity {
    color: #e53935;
  }

  .token.function {
    color: #7c4dff;
  }

  .token.hexcode {
    color: #f76d47;
  }

  .token.id {
    color: #7c4dff;
    font-weight: bold;
  }

  .token.important {
    color: #7c4dff;
    font-weight: bold;
  }

  .token.inserted {
    color: #39adb5;
  }

  .token.keyword {
    color: #7c4dff;
  }

  .token.number {
    color: #f76d47;
  }

  .token.operator {
    color: #39adb5;
  }

  .token.prolog {
    color: #aabfc9;
  }

  .token.property {
    color: #39adb5;
  }

  .token.pseudo-class {
    color: #f6a434;
  }

  .token.pseudo-element {
    color: #f6a434;
  }

  .token.punctuation {
    color: #39adb5;
  }

  .token.regex {
    color: #6182b8;
  }

  .token.selector {
    color: #e53935;
  }

  .token.string {
    color: #f6a434;
  }

  .token.symbol {
    color: #7c4dff;
  }

  .token.tag {
    color: #e53935;
  }

  .token.unit {
    color: #f76d47;
  }

  .token.url {
    color: #e53935;
  }

  .token.variable {
    color: #e53935;
  }
`;
