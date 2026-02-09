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

## 2026-02-02 网站更新
- **尺寸显示**: 英寸+厘米双单位 (`4" (10cm)`)
- **价格逻辑**: 最小尺寸显示基础价格，更大尺寸显示"Custom Quote"多语言版本
- **多语言修复**:
  - 产品特点(features)、订购方式(howToOrder) 添加中英文双语
  - 缩略图全部显示，移除 "+X more images" 限制
  - 价格显示多语言: EN/ZH/JA/KO 四种语言
- **首页优化**: 使用实际产品数据，可点击跳转详情页

## 工具配置
- 已配置长期记忆机制 (daily notes + MEMORY.md)
