import { nanoid } from 'nanoid';

export default function ContactList({ contacts, container }) {
  const loweredFilter = container.toLowerCase();
  const list = (
    <ul>
      {!container
        ? contacts.map(elem => {
            return (
              <li key={nanoid()}>
                {elem.name}: {elem.number}
              </li>
            );
          })
        : contacts
            .filter(elem => elem.name.toLowerCase().includes(loweredFilter))
            .map(elem => {
              return (
                <li key={nanoid()}>
                  {elem.name}: {elem.number}
                </li>
              );
            })}
    </ul>
  );
  return list;
}
