This rule reports the regular expressions which include multiple code point characters in character class syntax.

```
//Bad:
/^[AΜ]$/u
/^[βοΈ]$/u
/^[πΆπ»]$/u
/^[π―π΅]$/u
/^[π¨βπ©βπ¦]$/u
/^[π]$/

//Good:
/^[abc]$/
/^[π]$/u
```

[Source](http://eslint.org/docs/rules/no-misleading-character-class)
