export const EditorTabs = [
  {
    name: 'colorpicker',
    icon: '/swatch.png',
  },
  {
    name: 'filepicker',
    icon: '/file.png',
  },
]

export const FilterTabs = [
  {
    name: 'logoShirt',
    icon: '/logo-tshirt.png',
  },
  {
    name: 'stylishShirt',
    icon: '/stylish-tshirt.png',
  },
]

export const DecalTypes = {
  logo: {
    stateProperty: 'logoDecal',
    filterTab: 'logoShirt',
  },
  full: {
    stateProperty: 'fullDecal',
    filterTab: 'stylishShirt',
  },
}
