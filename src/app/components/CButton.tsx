import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

type CButtonProps = {
  textValue: string;
  to?: string;
  icon?: string;
  handleClick?: () => void;
  className?: string;
  outline?: boolean; // New prop for outline style
};

const CButton = ({ textValue, to, icon, handleClick, className, outline }: CButtonProps) => {
  const buttonClasses = `text-white btn hover:brightness-125 flex items-center ${className}`;

  const ButtonContent = (
    <>
      {textValue}
      {icon && <Icon icon={icon} color="white" className="ml-2" />}
    </>
  );

  const renderButton = () => {
    if (to) {
      return (
        <Link href={to} passHref>
          <div className={`${buttonClasses} ${outline ? 'btn-outline border-2 border-success text-success' : 'border-0 bg-success hover:bg-success'}`} onClick={handleClick}>
            {ButtonContent}
          </div>
        </Link>
      );
    } else {
      return (
        <button className={`${buttonClasses} ${outline ? 'btn-outline border-2 border-success text-success' : 'border-0 bg-success hover:bg-success'}`} onClick={handleClick}>
          {ButtonContent}
        </button>
      );
    }
  };

  return renderButton();
};

export default CButton;
