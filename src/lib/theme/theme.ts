import { DefaultTheme } from "styled-components"
import { colors, spacers, typography } from "./tokens"

export const lightTheme: DefaultTheme = {
    colors: {
        primary: {
            50: colors.blue[50],
            100: colors.blue[100],
            200: colors.blue[400],
            300: colors.blue[500],
            400: colors.blue[600],
         },

         neutral: {
            static: colors.base.white,
            globalBg: colors.grey[50],
            contentBg: colors.base.white,
            50: colors.grey[50],
            100: colors.grey[100],
            150: colors.grey[200],
            200: colors.grey[300],
            300: colors.grey[500],
            400: colors.grey[800],
         },

         success: {
            50: colors.green[50],
            100: colors.green[100],
            200: colors.green[400],
            300: colors.green[500],
            400: colors.green[600],
         },

          warning: {
            50: colors.yellow[50],
            100: colors.yellow[100],
            200: colors.yellow[500],
            300: colors.yellow[600],
            400: colors.yellow[700],
         },

         danger: {
            50: colors.red[50],
            100: colors.red[100],
            200: colors.red[400],
            300: colors.red[500],
            400: colors.red[600],
         },

    },

    typography: {
        fontFamily: {
            heading: `"Onest", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
            text: `"Onest", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
            monospace: `'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
        },
        
        fontSize:{
            heading: {
                h1: typography.fontSize.h1,
                h2: typography.fontSize.h2,
                h3: typography.fontSize.h3,
                h4: typography.fontSize.h4,
                h5: typography.fontSize.h5,
                h6: typography.fontSize.h6,
            },
            text: {
                base: typography.fontSize.base,
                small: typography.fontSize.small,
                extraSmall: typography.fontSize.extraSmall,
            },
            component: {
                base: typography.fontSize.base,
                small: typography.fontSize.small,
                extraSmall: typography.fontSize.extraSmall,
            },
            
        },

        lineHeight:{
            heading: {
                h1: typography.lineHeight.h1,
                h2: typography.lineHeight.h2,
                h3: typography.lineHeight.h3,
                h4: typography.lineHeight.h4,
                h5: typography.lineHeight.h5,
                h6: typography.lineHeight.h6,
            },
            text: {
                base: typography.lineHeight.base,
                small: typography.lineHeight.small,
                extraSmall: typography.lineHeight.extraSmall,
            },
            component: {
                base: typography.lineHeight.base, 
                small: typography.lineHeight.small,
                extraSmall: typography.lineHeight.extraSmall,
            },
            
        },

        fontWeight:{
            regular: typography.fontWeight.regular,
            semiBold: typography.fontWeight.semiBold,
            bold: typography.fontWeight.bold, 
        },
            
    },

    spacing: {
        gap: {
            noGap: spacers[0],
            closest: spacers[2],
            close: spacers[4],
            related: spacers[8],
            grouped: spacers[16],
            subSection: spacers[24],
            section: spacers[40],
            groupedLanding: spacers[24],
            subSectionLanding: spacers[40],
            sectionLanding: spacers[128],
        },
        padding: {
            compact: spacers[8],
            condensed: spacers[12],
            default: spacers[16],
            relaxed: spacers[24],
            large: spacers[32],
            extraLarge: spacers[40],
        },
        height: {
            xxxxSmall: spacers[4],
            xxxSmall: spacers[8],
            xxSmall: spacers[16],
            xSmall: spacers[24],
            small: spacers[32],
            base: spacers[40],
            large: spacers[48],
            xLarge: spacers[56],
            xxLarge: spacers[64], 
        },
    },

    borderRadius: {
        micro: spacers[4],
        componentInner: spacers[8],
        componentBase: spacers[12],
        sectionInner: spacers[16],
        sectionBase: spacers[20],
        full: spacers[999],
    },   

};

export const darkTheme: DefaultTheme = {
    ...lightTheme,
     colors: {
        primary: {
            50: colors.blue[800],
            100: colors.blue[700],
            200: colors.blue[400],
            300: colors.blue[300],
            400: colors.blue[200],
         },

         neutral: {
            static: colors.base.white,
            globalBg: colors.grey[900],
            contentBg: colors.base.black,
            50: colors.grey[900],
            100: colors.grey[800],
            150: colors.grey[400],
            200: colors.grey[500],
            300: colors.grey[300],
            400: colors.grey[50],
         },

         success: {
            50: colors.green[900],
            100: colors.green[800],
            200: colors.green[400],
            300: colors.green[300],
            400: colors.green[200],
         },

          warning: {
            50: colors.yellow[900],
            100: colors.yellow[800],
            200: colors.yellow[600],
            300: colors.yellow[500],
            400: colors.yellow[400],
         },

         danger: {
            50: colors.red[900],
            100: colors.red[800],
            200: colors.red[400],
            300: colors.red[300],
            400: colors.red[200],
         },

    },
};