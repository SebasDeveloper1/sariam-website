import React from 'react';
import { MdMenu } from 'react-icons/md';
import { Button, IconButton, Typography } from '@/components/index';

export default function Header() {
  return (
    <aside className="">
      <IconButton
        type="button"
        variant="primary"
        styles=""
        title="Menu"
        ariaLabel=""
        icon={MdMenu}
      />
      <Button
        type="button"
        variant="text"
        styles=""
        title=""
        value="aaaaa"
        startIcon={MdMenu}
        endIcon={MdMenu}
      />

      <Typography variant="h1" value="hello world" styles="" />
    </aside>
  );
}
