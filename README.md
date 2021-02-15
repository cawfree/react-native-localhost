# react-native-localhost
⚛️ 🏡  Returns the local address of your actual development machine.

## 🚀 Getting Started

Using [**Yarn**](https://yarnpkg.com):

```sh
yarn add react-native-localhost
```

## ✍️ Usage

Okay, so this is _really_ simple.

Basically, whenever you run `npm i` or `yarn`, a `postinstall` hook for this package is triggered, which determines your machine's local ip address and writes it to the module's default export:

```typescript
import * as React from 'react';
import { Text } from 'react-native';
import localhost from 'react-native-localhost';

export default function App(): JSX.Element {
  return <Text>{`Development machine is running on: ${localhost}`}</Text>;
}
```

That's it. Nothing magical, and certainly nothing fit for use in production.

## ✌️ License
[**MIT**](./LICENSE)