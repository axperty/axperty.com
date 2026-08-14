import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Axperty",
  description: "Creating Minecraft content that focuses on details and the player experience.",
  themeConfig: {
    logo: 'https://avatars.githubusercontent.com/u/107956734',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' },
      { text: 'News & Updates', link: '/posts/' },
      { text: 'Donate', link: '/donate' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/axperty' },
      { icon: 'discord', link: 'https://discord.gg/v2QqhXKsaQ' },
      { icon: 'youtube', link: 'https://www.youtube.com/@axperty' }
    ],
    footer: {
      message: 'Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft. All other trademarks and logos are property of their respective owners.',
      copyright: 'Copyright © 2026 Axperty.'
    }
  }
})
