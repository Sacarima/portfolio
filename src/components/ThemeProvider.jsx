import { useSelector } from 'react-redux';

export default function ThemeProvider({ children}) {
    const theme = useSelector((state) => state.theme);

    return (
        <div className={theme}>
            <div className='bg-white text-gray-700 dark:bg-[rgb(16,23,42)]'>
                {children}
            </div>
        </div>
    )
}