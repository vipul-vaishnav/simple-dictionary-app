import { FC, Fragment, PropsWithChildren, ReactElement } from 'react'

interface IEntry extends PropsWithChildren { }

const Entry: FC<IEntry> = (props): ReactElement => {
  const { children } = props

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default Entry