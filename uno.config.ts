import { defineConfig, presetIcons, presetWebFonts, presetUno } from 'unocss'

export default defineConfig({
    content: { pipeline: { include: ["**/*.rs"] } },
    cli: {
        entry: {
            patterns: ["src/**/*.rs"],
            outFile: "node_modules/.unocss-prebuild/uno.css",
        },
    },
    theme: {
        colors: {
            mainBackgroundColor: '#0d1117',
            columnBackgroundColor: '#161c22',
            customWhite: '#fafafa'
        }
    },
    presets: [
        presetUno(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                onest: 'Onest'
            }
        }),
        presetIcons({
            cdn: 'https://esm.sh/',
            extraProperties: {
                display: 'inline-block',
                'vertical-align': 'middle'
            }
        })
    ]
})
