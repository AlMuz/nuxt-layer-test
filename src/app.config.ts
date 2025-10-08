export default defineAppConfig({
  ui: {
    colors: {
      primary: 'brand',
      neutral: 'zinc'
    },
    button: {
      slots: {
        base: 'cursor-pointer disabled:cursor-not-allowed rounded-full'
      },
      variants: {
        size: {
          xl: {
            base: 'p-3'
          }
        }
      },
      defaultVariants: {
        size: 'xl'
      }
    },
    pinInput: {
      variants: {
        size: {
          lg: {
            base: 'px-4 py-3'
          }
        }
      },
      defaultVariants: {
        size: 'lg'
      }
    },
    input: {
      variants: {
        size: {
          lg: {
            base: 'px-4 py-3',
            root: 'w-full'
          }
        }
      },
      defaultVariants: {
        size: 'lg'
      }
    },
    textarea: {
      variants: {
        size: {
          lg: {
            base: 'px-4 py-3',
            root: 'w-full'
          }
        }
      },
      defaultVariants: {
        size: 'lg'
      }
    },
    inputMenu: {
      variants: {
        size: {
          lg: {
            base: 'px-4 py-3 gap-2 ',
            root: 'w-full',
            leading: 'ps-4',
            trailing: 'pe-4',
            tagsItem: '!p-[6px]'
          }
        }
      },
      defaultVariants: {
        size: 'lg'
      },
      compoundVariants: [
        {
          leading: true,
          size: 'lg',
          class: 'ps-11'
        }
      ]
    },
    selectMenu: {
      variants: {
        size: {
          lg: 'px-4 py-3',
          root: 'w-full'
        }
      },
      defaultVariants: {
        size: 'lg'
      }
    }
  }
})
