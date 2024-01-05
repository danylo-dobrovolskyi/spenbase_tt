import { FileSystem } from "../types/structure";

export const data: FileSystem[] = [
  {
    id: 'root',
    name: 'Parent folder',
    type: 'folder',
    children: [
      {
        id: '2',
        name: 'Empty folder',
        type: 'folder'
      },
      {
        id: '3',
        name: 'Fruits',
        type: 'folder',
        children: [
          {
            id: '4',
            name: 'Banana',
            type: 'file'
          },
          {
            id: '5',
            name: 'Apple',
            type: 'file'
          },
          {
            id: '6',
            name: 'Grape',
            type: 'file'
          },
          {
            id: '7',
            name: 'Favourite fruits',
            type: 'folder',
            children: [
              {
                id: '8',
                name: 'Strawberry',
                type: 'file'
              },
              {
                id: '9',
                name: 'Pineaple',
                type: 'file'
              },
            ]
          }
        ]
      },
      {
        id: '10',
        name: 'Programming languages',
        type: 'folder',
        children: [
          {
            id: '11',
            name: 'Java',
            type: 'file'
          },
          {
            id: '12',
            name: 'JavaScript',
            type: 'file'
          },
          {
            id: '13',
            name: 'Python',
            type: 'file'
          }
        ]
      }
    ]
  }
];