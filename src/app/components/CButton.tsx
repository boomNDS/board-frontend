import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const CButton = ({ textValue, to, icon }: { textValue: string, to?: string, icon?: string }) => {
  const ButtonContent = (
    <>
      {textValue}
      {icon && <Icon icon={icon} color="white" />}
    </>
  );

  return to ? (
    <Link href={to} passHref>
      <div className="border-0 text-white btn bg-success hover:bg-success hover:brightness-125 flex items-center">
        {ButtonContent}
      </div>
    </Link>
  ) : (
    <button className="border-0 text-white btn bg-success hover:bg-success hover:brightness-125 flex items-center">
      {ButtonContent}
    </button>
  );
};

export default CButton;
