# MEMORY.md - 长期记忆

## 项目
- **alincraft-astro** - Astro电商网站 (https://www.alincraft.com)
  - 自定义钩针宠物玩偶商店
  - 11个产品（9种狗品种 + 1个宝可梦 Magnemite）
  - 每个产品有 `colorImages` 映射颜色对应图片

## 2026-02-03 重要更新
### 多语言支持完成 ✅
网站现在支持 **21种语言** 的商品名称和描述：
- English (en)
- 简体中文 (zh-CN)
- 繁體中文 (zh-TW)
- 日本語 (ja)
- 한국어 (ko)
- Português (pt / pt-BR)
- Español (es)
- Français (fr)
- Deutsch (de)
- Italiano (it)
- Русский (ru)
- العربية (ar)
- हिन्दी (hi)
- ไทย (th)
- Tiếng Việt (vi)
- Bahasa Indonesia (id)
- Bahasa Melayu (ms)
- Türkçe (tr)
- Polski (pl)
- Nederlands (nl)

所有产品的 `name` 和 `description` 字段都已翻译为多语言版本。

## 用户偏好
- 通过WhatsApp联系 (+8613671887113)

## Git 推送流程
- 本地修改完成后，告知用户
- 用户同意后，手动执行 `git push`
- SSH key 已添加到 agent，无需每次输入 passphrase

## 工具配置
- 已配置长期记忆机制 (daily notes + MEMORY.md)
