import { CoustomOptions, MenuOptions } from '../types'
import{ Underline as TiptapUndeline }from '@tiptap/extension-underline'
export default class Undeline {
  constructor({
    showMenu = true,
    toolTips = '下划线'
  }: CoustomOptions) {
    const ZeroUnderline: Record<string, any> = TiptapUndeline.extend()
    const menusOptions: MenuOptions = {
      showMenu: showMenu,
      toolTips: toolTips,
      toggleCommand: function () {
        this.editor.commands.toggleUnderline();
      }
    }
    ZeroUnderline.menusOptions = menusOptions;

    return ZeroUnderline
  }
}