/* eslint-disable react/prop-types */

import clsx from 'clsx'

function Button({variant, customClasses, children}) {

  const className = clsx({
    'text-white p-4 bg-opacity-30 bg-black': variant ==="primary",
    [customClasses]: customClasses
  })

  return (
    <button className={className}>{children}</button>
    )
}

export default Button