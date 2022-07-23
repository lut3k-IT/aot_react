import React from 'react';
import Link from 'next/link';

import style from './Navbar.module.scss';

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <Link className={style.link} href="characters-list">Characters list</Link>
    </div>
  )
}