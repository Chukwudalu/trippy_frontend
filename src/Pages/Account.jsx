import {useState, useEffect} from 'react'
import { SettingsOutlined } 
from '@mui/icons-material';
import Settings from '../Components/ProfileComponents/Settings'
import UpcomingFeature from '../Components/ProfileComponents/UpcomingFeature';
import useResizer from '../utils/customHooks/useResizer';



function Account() {
    const [ settingClicked, setSettingClicked ] = useState(true);
    const [ screenWidth, mobileWidthBreakPoint ] = useResizer()


    useEffect(() => {
        handleNavItemClicked()
    }, [])
    
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    

    const handleNavItemClicked = () => {
        // const nav = document.querySelector('.accountPage__menu')
        const navItems = document.querySelectorAll('.accountPage__nav__item')
        
        navItems.forEach(navItem => {
            navItem.addEventListener('click', (e) => {
                document.querySelector('.accountPage__nav__item.active').classList.remove('active')
                e.currentTarget.classList.add('active')
                if(!e.currentTarget.classList.contains('accountPage__nav__item--settings')){
                    setSettingClicked(false)
                }
            })
        })
    }

    return (
        <section className='accountPage'>
            {
                screenWidth >= mobileWidthBreakPoint && (
                    <nav className='accountPage__menu'>
                        <ul className='accountPage__sideNav__users'>
                            <li className='accountPage__nav__item  accountPage__nav__item--settings active' onClick={() => setSettingClicked(true)}>
                                <SettingsOutlined className='accountPage__nav__icon MuiIcon-fontSizeLarge'/>
                                <p>Settings</p>
                            </li>
                            
                        </ul>
                    </nav>
                )
            }
            
            <section className='accountPage__edits'>
                {
                    settingClicked ? <Settings/> : <UpcomingFeature/>
                }
                
            </section>
        </section>
    )
}

export default Account


// const navItems = document.querySelectorAll('.accountPage__nav__item')
//         navItems.forEach(el => {
//             el.addEventListener('click', (e) => {
//                 if(el.classList.contains('accountPage__nav__item--settings')){
//                     if(el.classList.contains('active')){
//                         setSettingClicked(false)
//                         setSettingClicked(true)
//                     }else{
//                         setSettingClicked(true)
//                         setSettingClicked(false)
//                     }
                    
//                 }else{
//                     if(el.classList.contains('active')){
//                         el.classList.remove('active')
//                     }else{
//                         el.classList.add('active')
//                     }

//                 }
//             })
//         })