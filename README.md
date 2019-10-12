# invisible-attachment
[![build status](https://travis-ci.com/rastapasta/invisible-attachment.svg?token=ubbpW9so2rtnRSFNwzed&branch=master)](https://travis-ci.com/rastapasta/invisible-attachment) ![coverage](https://img.shields.io/badge/coverage-100%25-green.svg) [![npm version](https://badge.fury.io/js/invisible-attachment.svg)](https://www.npmjs.com/package/invisiable-attachment) ![license](https://img.shields.io/github/license/rastapasta/invisible-attachment.svg)

Encode and attach any numeric value to a string by using invisible UTF8 characters.

## Example

```js
import { attach, parse } from 'invisible-attachment'

const attached = attach('this is an example', 1337)
// -> this is an example﻿﻿⠀﻿﻿﻿﻿⠀

const decoded = parse(attached)
// -> 1337
```

## Usecase

Attaching additional metadata to strings in systems you don't control but want to build a beautiful client for :)

Imagine triggering client features by attaching invisible control commands to messages exchanged on a chat platform - while users without your client won't notice any difference in the exchanged messages.
