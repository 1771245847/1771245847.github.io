# HeoMusic

![demo](https://1771245847.github.io/Music/img/cover.webp)

一个基于[Aplayer](https://github.com/DIYgod/APlayer)和[MetingJS](https://github.com/metowolf/MetingJS)的静态音乐播放器

## 基本操作

`Space空格键`：暂停/播放音乐

`上/下方向键`：增加/减少音量

`左/右方向键`：上一曲/下一曲

## 修改歌单/私有部署与配置

### ID

播放列表的id，可以从音乐歌单分享的链接中获取，例如`https://y.qq.com/n/ryqq/playlist/8668419170`中，id为`8668419170`

### Server

播放列表的服务商，例如`netease`（网易云音乐）,`tencent`（腾讯）,`kugou`（酷狗）,`xiami`（小米音乐）,`baidu`（百度音乐）

### Type(可选）

播放列表的类型，例如`song`（单曲）, `playlist`（歌单，默认）, `album`（专辑）, `search`（搜索结果）, `artist`（歌手）

## 使用URL参数（推荐）

HeoMusic支持URL参数 `https://music.zhheo.com/?id=`+ id +`&server=` + server

编辑`index.html`的相关代码，填写歌单id和服务商

# 修改id和server
