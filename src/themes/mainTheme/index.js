import { createTheme } from '@material-ui/core/styles';

export const mainTheme = createTheme({
    overrides: {
        // Style sheet name ⚛️
        MuiList: {
            // Name of the rule
            padding: {
                // Some CSS
                padding: '16px 24px',
                border: '1px solid rgb(185, 185, 185)',
                margin: '10px 30px',
            },
        },
        MuiListItem: {
            // Name of the rule
            button: {
                // Some CSS
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                borderRadius: 3,
                border: 0,
                color: 'white',
                padding: '5px 30px',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                marginBottom: '5px',
            },
        },
    },
});