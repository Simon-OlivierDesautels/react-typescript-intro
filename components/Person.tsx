import { PersonProps } from "./Person.type"

export const Person = (props:PersonProps) => {
  return (
    <p>{props.name.first} {props.name.last}</p>
  )
}
