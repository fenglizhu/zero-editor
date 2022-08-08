import{ Color as TiptapColor }from '@tiptap/extension-color'
import { HTML_TYPE, STYLE_NAME } from '../constant';
import { CoustomOptions, MenuOptions, HTMLElementEvent } from '../types'
import { Colors } from "../types/color";

interface ColorOptions extends CoustomOptions {
  colors?: string[],
}

export default class Color {
  extension: Record<string, any>;
  constructor({
    showMenu = true,
    toolTips = '文本颜色',
    colors = Colors
  }: ColorOptions = {}) {
    const ZeroColor: Record<string, any> = TiptapColor.extend();
    const menusOptions: MenuOptions = {
      showMenu: showMenu,
      toolTips: toolTips,
      hasTab: true,
      dropdown: colors,
      menuType: 'color',
      dataNeType: 'textStyle',
      activeIsObject: true,
      src: 'src/assets/images/font-color.svg',
      setActiveRules: (color: string) => {
        return [
          'textStyle',
          {
            color
          }
        ]
      },
      htmlOption: {
        type: HTML_TYPE.STYLE,
        styleName: STYLE_NAME.BACKGROUND_COLOR,
        tagAndText: colors,
        tabClassName: 'editor-menu-tab-color'
      },
      toggleCommand: function (pointerEvent: HTMLElementEvent<HTMLElement>) {
        const element:Element = pointerEvent.target;
        const color = element.getAttribute('data-attr')
        this.editor.commands.setColor(color);
      }
    }
    ZeroColor.menusOptions = menusOptions;
    this.extension = ZeroColor;
  }
}