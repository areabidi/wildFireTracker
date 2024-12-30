import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from "@iconify/icons-mdi/fire-alert"

const Header = () => {
  return (
    <header class="header">
        <h1><Icon icon={locationIcon}/> WildFireTracker (Power by NASA)</h1>
    </header>
  )
}

export default Header