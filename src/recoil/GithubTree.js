import React from 'react'
import { atom, useRecoilState } from 'recoil'

export const githubTreeStats = atom({
  key: 'githubTreeStats',
  default: [{"path":".github/workflows","type":"tree","url":"/laststance/create-react-app-typescript-todo-example-2021/tree/master/.github/workflows"},{"path":"cypress","type":"tree","url":"/laststance/create-react-app-typescript-todo-example-2021/tree/master/cypress"},{"path":"images","type":"tree","url":"/laststance/create-react-app-typescript-todo-example-2021/tree/master/images"},{"path":"public","type":"tree","url":"/laststance/create-react-app-typescript-todo-example-2021/tree/master/public"},{"path":"src","type":"tree","url":"/laststance/create-react-app-typescript-todo-example-2021/tree/master/src"},{"path":".all-contributorsrc","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/.all-contributorsrc"},{"path":".env","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/.env"},{"path":".eslintignore","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/.eslintignore"},{"path":".eslintrc","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/.eslintrc"},{"path":".gitattributes","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/.gitattributes"},{"path":".gitignore","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/.gitignore"},{"path":".prettierignore","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/.prettierignore"},{"path":".prettierrc","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/.prettierrc"},{"path":"LICENSE","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/LICENSE"},{"path":"README.md","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/README.md"},{"path":"cypress.json","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/cypress.json"},{"path":"diagram.svg","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/diagram.svg"},{"path":"package.json","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/package.json"},{"path":"tsconfig.json","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/tsconfig.json"},{"path":"yarn.lock","type":"blob","url":"/laststance/create-react-app-typescript-todo-example-2021/blob/master/yarn.lock"}]
});

export const treeOptionStats = atom({
    key: 'TreeOption',
    default: { depthSize: 3, folderIcon: false, fileIcon: false, folderOnly: true, selectOnly: false }
})

export const urlStats = atom({
    key: 'urlStats',
    default: ""
});

export const selectedStats = atom({
  key: 'selectedStats',
  default: []
});

export const activeStats = atom({
  key: 'activeStats',
  default: false
});

export const urlChangeStats = atom({
  key: 'urlChangeStats',
  default: 0
});