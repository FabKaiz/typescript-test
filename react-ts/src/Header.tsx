export interface Props {
  title: string
  color?: string
}

const Header = (props: Props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  )
}