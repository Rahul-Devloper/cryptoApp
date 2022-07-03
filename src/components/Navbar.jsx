import React, { useEffect, useState } from 'react'
import { Menu, Typography, Avatar } from 'antd'
import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import icon from '../images/crypto-img.png'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setScreenSize] = useState(undefined)

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size='large' />
        <Typography.Title level={2} className='logo'>
          <Link to='/'>Cryptoverse</Link>
        </Typography.Title>
        <button
          style={{
            background: 'red',
            width: '2rem !important',
            height: '2rem !important',
          }}
          className='menu-control-container'
          onClick={() => setActiveMenu(!activeMenu)}>
          Menu
        </button>
      </div>
      {activeMenu && (
        <Menu theme='dark'>
          <Menu.Item key={1} icon={<HomeOutlined />}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key={2} icon={<FundOutlined />}>
            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item key={3} icon={<MoneyCollectOutlined />}>
            <Link to='/exchanges'>Exchanges</Link>
          </Menu.Item>
          <Menu.Item key={4} icon={<BulbOutlined />}>
            <Link to='/news'>News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  )
}

export default Navbar
