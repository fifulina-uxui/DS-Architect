import "styled-components";

declare module "styled-components"{
 export interface DefaultTheme {
    colors: {
       primary: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
       };
       neutral: {
        static: string;
        globalBg: string;
        contentBg: string;
        50: string;
        100: string;
        150: string;
        200: string;
        300: string;
        400: string;
       };
       success: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
       };
       warning: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
       };
       danger: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
       };
    };

    typography: {
        fontFamily: {
            heading: string;
            text: string;
            monospace: string;
        };
        fontSize:{
            heading: {
                h1: string;
                h2: string;
                h3: string;
                h4: string;
                h5: string;
                h6: string;
            };
            text: {
                base: string;
                small: string;
                extraSmall: string;
            };
            component: {
                base: string;
                small: string;
                extraSmall: string;
            };
            
        };
        lineHeight:{
            heading: {
                h1: string;
                h2: string;
                h3: string;
                h4: string;
                h5: string;
                h6: string;
            };
            text: {
                base: string;
                small: string;
                extraSmall: string;
            };
            component: {
                base: string;
                small: string;
                extraSmall: string;
            };
            
        };
        fontWeight:{
            regular: string;
            semiBold: string;
            bold: string; 
        };
    };

    spacing: {
        gap: {
            noGap: string;
            closest: string;
            close: string;
            related: string;
            grouped: string;
            subSection: string;
            section: string;
            groupedLanding: string;
            subSectionLanding: string;
            sectionLanding: string;
        };
        padding: {
            compact: string;
            condensed: string;
            default: string;
            relaxed: string;
            large: string;
            extraLarge: string;
        };
        height: {
            xxxxSmall: string;
            xxxSmall: string;
            xxSmall: string;
            xSmall: string;
            small: string;
            base: string;
            large: string;
            xLarge: string;
            xxLarge: string; 
        };
    };
    
    borderRadius: {
        micro: string;
        componentInner: string;
        componentBase: string;
        sectionInner: string;
        sectionBase: string;
        full: string;
    };

  }
}